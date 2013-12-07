/**
 * @author Margie
 */
angular.module('musicMod', []).factory('musicFactory', function() {'use strict';

	return {
		musicians : [{
			musician : "Beatles",
			album : "White Album"
		}, {
			musician : "Dylan",
			album : "Nashville Skyline"
		}, {

			musician : "Doors",
			album : "Strange Days"
		}, {

			musician : "Redding",
			album : "The Dock of the Bay"
		}, {

			musician : "Cooke",
			album : "Night Beat"
		}],

		getMusicianFromAlbum : function(album) {
			for (var i = 0; i < 5; i++) {
				if (this.musicians[i].album === album) {
					return this.musicians[i].musician;
				}
			}

		},

		getAlbumFromMusician : function(musician) {
			for (var i = 0; i < 5; i++) {
				if (this.musicians[i].musician === musician) {
					return this.musicians[i].album;
				}

			}
		}
	};
}).controller('musicController', function($scope, musicFactory) {

	$scope.musicians = musicFactory.musicians;

	$scope.albumFromMusician = function() {
		$scope.musicianFromAlbum = musicFactory.getMusicianFromAlbum($scope.albumMusician);
	};

	$scope.musicianFromAlbum = function() {
		$scope.albumFromMusician = musicFactory.getAlbumFromMusician($scope.musicianAlbum);
	};

});

