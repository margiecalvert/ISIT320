/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('mongoMod', ['ngResource'])
.factory('mongoTowerService', function($resource, CONFIG) {
	console.log('Presidents factory called');
	var Tower = $resource(
        'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + 
        '/collections/' + CONFIG.COLLECTION + '/:id', {      
        apiKey: CONFIG.API_KEY,      
    },
    {
        update: {method:'PUT'}
    });

    Tower.prototype.updateMe = function (callback, errorCallback) {
        console.log("update called");
        return Presidents.update(
            {id:this._id.$oid}, 
            angular.extend({}, this, {_id:undefined}), 
            callback, 
            errorCallback);
    };
    
    Tower.prototype.getName = function() {
      return this.name;
    };
    
    Tower.prototype.getHitPoints = function() {
    	return this.hitPoints;
    };
    
    Tower.prototype.getDamage = function() {
    	return this.damage;
    };
    
    Tower.prototype.remove = function (cb, errorcb) {
      return Presidents.remove({id:this._id.$oid}, cb, errorcb);
    };

    Tower.prototype['delete'] = function (cb, errorcb) {
      return this.remove(cb, errorcb);
    };

    return Tower;    
	 
	// return { a: 2 };		
});
