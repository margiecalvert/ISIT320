/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('mongoMusicModule', ['ngResource'])
.constant('CONFIG', {
	DB_NAME: 'margie01',
	COLLECTION: 'music',
	API_KEY: 'W_Xas2gshx3Baf9QX6W53oN7riOyhW4P'
})
.factory('mongoMusicData', function($resource, CONFIG) { 'use strict';
	console.log('Music factory called');
	var Presidents = $resource(
		'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
		'/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey: CONFIG.API_KEY
	},
	{
		update: {method:'PUT'}
	});

	Presidents.prototype.updateMe = function (callback, errorCallback) {
		console.log("update called");
		return Presidents.update(
			{id:this._id.$oid},
			angular.extend({}, this, {_id:undefined}),
			callback,
			errorCallback);
	};

	Presidents.prototype.musician = function() {
		return this.musician;
	};

	Presidents.prototype.album = function() {
		return this.album;
	};

	Presidents.prototype.remove = function (cb, errorcb) {
		return Presidents.remove({id:this._id.$oid}, cb, errorcb);
	};

	Presidents.prototype['delete'] = function (cb, errorcb) {
		return this.remove(cb, errorcb);
	};

	return Presidents;

	// return { a: 2 };
});
