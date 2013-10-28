/**
 * @author Margie Calvert
 */

describe("mycontrollertest", function() {'use strict';
    var $mockScope = null;
    var pc = null;

    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('MyController', { $scope: $mockScope }); 
    }));
    
     

    it("Test hint", function() {
        expect($mockScope.hint).toEqual("Enter a number of miles");
    });
    
    it("TestMilesToFeetForOneMile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToFeet();
        expect(actual).toEqual(5280);
    });
    
    it("TestMilesToInchesFor1Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToInches();
        expect(actual).toEqual(63360);
    });
    
    it("TestMilesToYardsFor1Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToYards();
        expect(actual).toEqual(1760);
    });
    
    it("TestMilesToKilometersFor1Mile", function() {
        $mockScope.miles = 1;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(1.60934);
    });
    
    it("TestKilometersToMilesFor1Kilometer", function() {
        $mockScope.kilometers = 1;
        var actual = $mockScope.convertKilometersToMiles();
        expect(actual).toEqual(0.621371);
    });
  
    it("TestForZeroK", function() {
        $mockScope.kilometers = 0;
        var actual = $mockScope.convertKilometersToMiles();
        expect(actual).toEqual(0);
    });
    
    it("TestForZeroMiles", function() {
        $mockScope.miles = 0;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(0);
    });
    
    it("TestForNegMiles", function() {
        $mockScope.miles = -1;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(-1.60934);
    });
    
     it("TestForNegKilometers", function() {
        $mockScope.kilometers = -1;
        var actual = $mockScope.convertKilometersToMiles();
        expect(actual).toEqual(-0.621371);
    });
    
      it("TestMilesToKilometersForManyMiles", function() {
        $mockScope.miles = 1000;
        var actual = $mockScope.convertMilesToKilometers();
        expect(actual).toEqual(1609.34);
    });
    
    it("TestKilometersToMilesForManyKilometers", function() {
        $mockScope.kilometers = 1000;
        var actual = $mockScope.convertKilometersToMiles();
        expect(actual).toEqual(621.371);
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