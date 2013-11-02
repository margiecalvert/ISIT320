/**
 * @author Margie
 */
/**
 * @author Margie
 */

angular.module('diceApp', ['d6', 'twod6', 'threed6', 'd4', 'd10', 'd20']);

angular.module('d6', []).factory('d6', function() {
	return {
		description : "I am D6.",
		testNumber : 7
	};
});

angular.module('twod6', []).factory('twod6', function() {
	return {
		description : "I am 2D6.",
		testNumber : 13
	};
});

angular.module('threed6', []).factory('threed6', function() {
	return {
		description : "I am 3D6.",
		testNumber : 19
	};
});

angular.module('d4', []).factory('d4', function() {
	return {
		description : "I am D4.",
		testNumber : 5
	};
});

angular.module('d10', []).factory('d10', function() {
	return {
		description : "I am D10.",
		testNumber : 11
	};
});

angular.module('d20', []).factory('d20', function() {
	return {
		description : "I am D20.",
		testNumber : 21
	};
});

function DieController($scope, d6, twod6, threed6, d4, d10, d20) {
	$scope.d6 = d6;
	$scope.twod6 = twod6;
	$scope.threed6 = threed6;
	$scope.d4 = d4;
	$scope.d10 = d10;
	$scope.d20 = d20;

	$scope.rollD6 = function() {
		return $scope.rollD6Result = Math.floor(Math.random() * 6) + 1;
	};

	$scope.roll2D6 = function() {
		$scope.roll2D6Result1 = Math.floor(Math.random() * 6) + 1;
		$scope.roll2D6Result2 = Math.floor(Math.random() * 6) + 1;
		return $scope.roll2D6Result = $scope.roll2D6Result1 + $scope.roll2D6Result2;
	};

	$scope.roll3D6 = function() {
		$scope.roll3D6Result1 = Math.floor(Math.random() * 6) + 1;
		$scope.roll3D6Result2 = Math.floor(Math.random() * 6) + 1;
		$scope.roll3D6Result3 = Math.floor(Math.random() * 6) + 1;
		return $scope.roll3D6Result = $scope.roll3D6Result1 + $scope.roll3D6Result2 + $scope.roll3D6Result3;
	};

	$scope.rollD4 = function() {
		return $scope.rollD4Result = Math.floor(Math.random() * 4) + 1;
	};

	$scope.rollD10 = function() {
		return $scope.rollD10Result = Math.floor(Math.random() * 10) + 1;
	};

	$scope.rollD20 = function() {
		return $scope.rollD20Result = Math.floor(Math.random() * 20) + 1;
	};
}

