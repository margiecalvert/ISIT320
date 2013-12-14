/**
 * @author Charlie Calvert
 */


/**
 * @author Charlie
 */

describe("main controller test", function() {'use strict';
    var mainController = null;    
    var $httpBackend = null;
    
    beforeEach(function() {
        module("mainModule");
        module("mongoModule");
    });
    
    beforeEach(inject(function($rootScope, $controller) {        
        mainController = $rootScope.$new();
        $controller('mainController', { $scope: mainController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Test main controller name", function() {
        expect(mainController.name).toEqual("mainController");
    });    
    
    it("can find tower hitpoints", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/margie01/collections/books?apiKey=W_Xas2gshx3Baf9QX6W53oN7riOyhW4P')
        .respond([
        	{"author" : "Heminway" , "book" : "The Sun Also Rises"} , 
        	{"author" : "Fitzgerald" , "book" : "Tender is the Night"} ,
        	{"author" : "Tolstoy" , "book" : "War and Peace"}            
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.presidents[0].author).toEqual('Heminway');
    });
    
    it("can find tower hitpoints", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/margie01/collections/books?apiKey=W_Xas2gshx3Baf9QX6W53oN7riOyhW4P')
        .respond([
        	{"author" : "Heminway" , "book" : "The Sun Also Rises"} , 
        	{"author" : "Fitzgerald" , "book" : "Tender is the Night"} ,
        	{"author" : "Tolstoy" , "book" : "War and Peace"}            
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.presidents[1].author).toEqual('Fitzgerald');
    }); 
});


