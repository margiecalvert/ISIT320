/**
 * @author Charlie Calvert
 */

/* jshint devel: true */

angular.module('mainModule', ['mongoModule']).controller('mainController', function($scope, mongoData) {'use strict';

	$scope.name = "mainController";

	$scope.presidentsLength = 0;
	$scope.userIndexSelection = 0;

	$scope.loadData = function() {
		$scope.presidents = mongoData.query({}, function(presidents) {
			$scope.presidentsLength = presidents.length;
			console.log($scope.presidentsLength);
			$scope.userIndexSelection = 0;
			$('#indexSelection').val("0");
			$scope.indexChange();
		});
	};

	$scope.addPresident = function() {
		var pres = new mongoData({
			author : $scope.author,
			book : $scope.book,

		});
		pres.$save(function(president, r) {
			$scope.presidents.push(president);
			$scope.presidentsLength = $scope.presidents.length;
		});
	};

	$scope.deleteRow = function() {
		var userIndexSelection = $scope.userIndexSelection;
		// if (userIndexSelection < $scope.presidents.length) {}
		$scope.presidents[userIndexSelection].remove(function(deletedObject, headers) {
			$scope.presidents.splice(userIndexSelection, 1);
			$scope.presidentsLength = $scope.presidents.length;
		}, function(err) {
			console.log("error: " + err.data.message);
		});
	};

	$scope.updateRow = function() {
		var indexOfItemToUpdate = $scope.userIndexSelection;
		$scope.presidents[indexOfItemToUpdate].author = $scope.author;
		$scope.presidents[indexOfItemToUpdate].book = $scope.book;

		$scope.presidents[indexOfItemToUpdate].updateMe(function(data) {
			console.log("success: " + data);
		}, function(err) {
			console.log("Error Status: " + err.status + ' ' + err.data.message);
		});
	};

	$scope.indexChange = function() {
		$scope.author = $scope.presidents[$scope.userIndexSelection].author;
		$scope.book = $scope.presidents[$scope.userIndexSelection].book;
	};

	$scope.bookFromAuthor = function() {
		for (var i = 0; i < $scope.presidents.length; i++) {
			if ($scope.presidents[i].author === $scope.authorName) {
				$scope.bookFromAuthorResult = $scope.presidents[i].book;
				break;
			}
		}
	};

	$scope.authorFromBook = function() {
		for (var i = 0; i < $scope.presidents.length; i++) {
			if ($scope.presidents[i].book === $scope.bookName) {
				$scope.authorFromBookResult = $scope.presidents[i].author;
				break;
			}
		}
	};
	
	$scope.albumFromMusician = function() {
		for (var i = 0; i < $scope.presidents.length; i++) {
			if ($scope.presidents[i].musician === $scope.musicianName) {
				$scope.albumFromMusicianResult = $scope.presidents[i].album;
				break;
			}
		}
	};

	$scope.musicianFromAlbum = function() {
		for (var i = 0; i < $scope.presidents.length; i++) {
			if ($scope.presidents[i].album === $scope.albumName) {
				$scope.musicianFromAlbumResult = $scope.presidents[i].musician;
				break;
			}
		}
	};
});

