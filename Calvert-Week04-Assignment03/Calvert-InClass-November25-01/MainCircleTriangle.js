/**
 * @author Margie
 */
var thisApp = angular.module("thisApp", ['circleModule', 'triangleMod']);

//angular.module ('mainModule', ['circleModule', 'triangleModule'])
thisApp.controller ('mainController', function($scope, circleFactory, triangleFactory){'use strict';
	$scope.name = "mainController";
	$scope.GetAreaOfCircle = circleFactory.GetAreaOfCircle;
	$scope.pythagorus = triangleFactory.pythagorus;
	
});


