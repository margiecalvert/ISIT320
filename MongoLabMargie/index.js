/**
 * @author Charlie Calvert
 */


angular.module('elvenApp', ['pres'])
.controller('MyController', function($scope, $http, presidents) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    $scope.presidentsList = presidents.query({}, function(users){
      	
      console.log($scope.presidents.length);
    });
	
	/*var getDataJson = $http.get('data.json');

	getDataJson.success(function(data, status, headers, config)  {
		$scope.data = data;
	});
	
	getDataJson.error(function(data, status, headers, config) {
		throw new Error('Oh no! An Error!');
	}); */

});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/margie01/collections/margie01Collection/:id', {
      // apiKey:'4fb51e55e4b02e56a67b0b66',
      apiKey: 'W_Xas2gshx3Baf9QX6W53oN7riOyhW4P',
      //apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',
      id:'@_id.$oid'
    });

    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };

    return Presidents;    
	 
	// return { a: 2 };		
});
