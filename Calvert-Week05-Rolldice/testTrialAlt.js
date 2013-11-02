/**
 * @author Margie
 */

describe("diecontrollertest", function() {'use strict';
	var $mockScope = null;
	var pc = null;
	var d6 = null;

	beforeEach(function() {
		d6 = module('d6');
		module('twod6');
		module('threed6');
		module('d4');
		module('d10');
		module('d20');
	});

	beforeEach(inject(function($rootScope, $controller) {
		$mockScope = $rootScope.$new();
		pc = $controller('DieController', {
			$scope : $mockScope
		});
	}));

	it("TestD6", function() {
		for (var i = 0; i <= 250; i++) {
			var actual = $mockScope.rollD6();
			expect(actual).toBeLessThan($mockScope.d6.testNumber);
		};
	});

	it("TestTwoD6", function() {
		for (var i = 0; i <= 250; i++) {
			var actual = $mockScope.roll2D6();
			expect(actual).toBeLessThan($mockScope.twod6.testNumber);
		};
	});

	it("TestThreeD6", function() {
		for (var i = 0; i <= 250; i++) {
			var actual = $mockScope.roll3D6();
			expect(actual).toBeLessThan($mockScope.threed6.testNumber);
		};
	});

	it("TestD4", function() {
		for (var i = 0; i <= 250; i++) {
			var actual = $mockScope.rollD4();
			expect(actual).toBeLessThan($mockScope.d4.testNumber);
		};
	});

	it("TestD10", function() {
		for (var i = 0; i <= 250; i++) {
			var actual = $mockScope.rollD10();
			expect(actual).toBeLessThan($mockScope.d10.testNumber);
		};
	});

	it("TestD20", function() {
		for (var i = 0; i <= 250; i++) {
			var actual = $mockScope.rollD20();
			expect(actual).toBeLessThan($mockScope.d20.testNumbe
				r);
		};
	});
});

(function() {'use strict';
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var reporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(reporter);

	jasmineEnv.specFilter = function(spec) {
		return reporter.specFilter(spec);
	};

	var currentWindowOnload = window.onload;

	window.onload = function() {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		execJasmine();
	};

	function execJasmine() {
		jasmineEnv.execute();
	}

})();

/*describe('MainCtrl', function(){
 var scope;//we'll use this scope in our tests

 //mock Application to allow us to inject our own dependencies
 beforeEach(angular.mock.module('Application'));
 //mock the controller for the same reason and include $rootScope and $controller
 beforeEach(angular.mock.inject(function($rootScope, $controller){
 //create an empty scope
 scope = $rootScope.$new();
 //declare the controller and inject our empty scope
 $controller('MainCtrl', {$scope: scope});
 });
 // tests start here
 });
 */
