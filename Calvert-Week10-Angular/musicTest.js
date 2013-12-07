// specs code
describe("musicTest", function() {'use strict';
	var musicController = null;
	var musicFactory = null;

	beforeEach(module('musicMod'));
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		musicController = $rootScope.$new();
		$controller('musicController', { $scope: musicController }); 
		musicFactory = $injector.get('musicFactory');
	}));

	it("Test Music Controller", function() {
		//console.log(bookController);
		expect(musicController).toBeTruthy();
	});

	it("Test Music Factory", function() {
		expect(musicFactory).toBeTruthy();
	});
	
	it("Get Album From Musician", function() {
		var result = musicFactory.getAlbumFromMusician("Doors");
		expect(result).toEqual("Strange Days");
		//expect(bookController.func()).toEqual(8);
	});

	it("Get Musician From Album", function() {
		var result = musicFactory.getMusicianFromAlbum("Night Beat");
		expect(result).toEqual("Cooke");
		//expect(bookController.func()).toEqual(8);
	});
});

