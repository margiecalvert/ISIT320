/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('elvenApp', ['pres']).constant('CONFIG', {
    DB_NAME: 'margie01',
    COLLECTION: 'margie01Collection',
    API_KEY: 'W_Xas2gshx3Baf9QX6W53oN7riOyhW4P'
})
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    $scope.presidents = presidents.query({}, function(presidents) {
      $scope.presidentsLength = presidents.length;
      console.log($scope.presidentsLength);
    });
    
    
    $scope.newPresident = function() {
        var pres = new presidents({
            presidentName: $scope.presidentName,
            termStart: $scope.termStart,
            termEnd: $scope.termEnd
        });
        pres.$save(function(president, r) {
            $scope.presidents.push(president);
            $scope.presidentsLength = $scope.presidents.length;
        });
    };
    
    $scope.deleteRow = function() {
        var indexOfItemToDelete = $scope.indexOfItemToDelete;
        $scope.presidents[indexOfItemToDelete].remove(function(p, r) {
            $scope.presidents.splice(indexOfItemToDelete, 1);
            $scope.presidentsLength = $scope.presidents.length;
        });
    };
    
    $scope.updateRow = function() {
        var indexOfItemToUpdate = $scope.indexOfItemToDelete;
        $scope.presidents[indexOfItemToUpdate].presidentName = $scope.presidentName;
        $scope.presidents[indexOfItemToUpdate].updateMe(function(data) {            
            console.log("success: " + data);
        }, function(err) {
            console.log("Error Status: " + err.status + ' ' + err.data.message);
        });  
    };
    
    $scope.indexChange = function() {        
        $scope.presidentName = $scope.presidents[$scope.indexOfItemToDelete].presidentName;
        $scope.termStart = $scope.presidents[$scope.indexOfItemToDelete].termStart;
        $scope.termEnd = $scope.presidents[$scope.indexOfItemToDelete].termEnd;
    };
});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource, CONFIG) {
	console.log('Presidents factory called');
	var Presidents = $resource(
        'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + 
        '/collections/' + CONFIG.COLLECTION + '/:id', {      
        apiKey: CONFIG.API_KEY,      
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
    
    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };
    
    Presidents.prototype.getTermEnd = function() {
    	return this.termEnd;
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
/**
 * @author Margie
 */
