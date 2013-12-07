// specs code
describe("bookTest", function() {'use strict';
	var bookController = null;
	var bookFactory = null;

	beforeEach(module('bookMod'));
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		bookController = $rootScope.$new();
		$controller('bookController', { $scope: bookController }); 
		bookFactory = $injector.get('bookFactory');
	}));

	it("Test Book Controller", function() {
		//console.log(bookController);
		expect(bookController).toBeTruthy();
	});

	it("Test Book Factory", function() {
		expect(bookFactory).toBeTruthy();
	});
	
	it("Get Book From Author", function() {
		var result = bookFactory.getAuthorFromBook("Great Expectations");
		expect(result).toEqual("Dickens");
		//expect(bookController.func()).toEqual(8);
	});

	it("Get Author From Book", function() {
		var result = bookFactory.getBookFromAuthor("Tolstoy");
		expect(result).toEqual("War and Peace");
		//expect(bookController.func()).toEqual(8);
	});
});

