/**
 * @author Margie
 */

describe("mycontrollertest", function() {'use strict';
    var $mockScope = null;
    var pc = null;
    var $dialog = null;
    
    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('NpcController', { $scope: $mockScope, $dialog: $dialog }); 
    }));

    it("Test array length", function() {
        expect($mockScope.npcs.length).toEqual(4);
    });
    
    it("TestTypeofField", function() {
        
        expect(typeof $mockScope.npcs[0]) === String;       
		expect(typeof $mockScope.npcs[1]) === Number;
		expect(typeof $mockScope.npcs[2]) === Number;
		expect(typeof $mockScope.npcs[3]) === Number;    
    });
    
    it("SetArrayValues", function() {
        $mockScope.npcs = [{npcName: 'Lucy', hitPoints: 25, health: 32, totalMoves: 0},];
     });    
    
    
    it("TestArrayItems", function() {
        expect($mockScope.npcs[0]) === "Lucy";
        expect($mockScope.npcs[1]) === 25;
        expect($mockScope.npcs[0]) === 32;
        expect($mockScope.npcs[0]) === 0;
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