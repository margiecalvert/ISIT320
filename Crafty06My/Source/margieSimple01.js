/**
 * @author Margie Calvert
 */


angular.module('elvenApp', ['hero'])
.controller('MyController', function($scope, $http, heroes) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    // $scope.presidents = presidents;
    $scope.heroes = heroes.query({}, function(users) {
      $scope.heroesLength = $scope.heroes.length;
      console.log($scope.heroesLength);
    });
	
	var getDataJson = $http.get('margie.json');

	getDataJson.success(function(data, status, headers, config)  {
		$scope.data = data;
	});
	
	getDataJson.error(function(data, status, headers, config) {
		throw new Error('Oh no! An Error!');
	});

});

angular.module('hero', ['ngResource'])
.factory('heroes', function($resource) {
	console.log('Heroes factory called');
	var Heroes = $resource('https://api.mongolab.com/api/1/databases/margie01/collections/heroes/:id', {
      apiKey:'W_Xas2gshx3Baf9QX6W53oN7riOyhW4P',     
    });

    Heroes.prototype.getName = function() {
      return this.name;
    };
    
    Heroes.prototype.getHitPoints = function() {
    	return this.hitPoints;
    };

	 Heroes.prototype.getDamage = function() {
    	return this.damage;
    };
    return Heroes;    
	 
	// return { a: 2 };		
});
