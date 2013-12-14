/**
 * @author Charlie Calvert
 */

/* jshint devel: true */

angular.module('musicMainModule', ['mongoMusicModule']).controller('musicController', function($scope, mongoMusicData) {'use strict';

	$scope.name = "musicController";

	$scope.presidentsLength = 0;
	$scope.userIndexSelection = 0;

	$scope.loadData = function() {
		$scope.presidents = mongoMusicData.query({}, function(presidents) {
			$scope.presidentsLength = presidents.length;
			console.log($scope.presidentsLength);
			$scope.userIndexSelection = 0;
			$('#indexSelection').val("0");
			$scope.indexChange();
		});
	};

	$scope.addPresident = function() {
		var pres = new mongoMusicData({
			musician : $scope.musician,
			album : $scope.album,

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
		$scope.author = $scope.presidents[$scope.userIndexSelection].musician;
		$scope.book = $scope.presidents[$scope.userIndexSelection].album;
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

