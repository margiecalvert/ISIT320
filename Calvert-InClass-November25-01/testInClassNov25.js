

describe("circle test", function() {'use strict';

    var circle = null;
    var triangle = null;

    // Step 1: Create Module
    beforeEach(function() {
        module('circleModule');
        module('triangleMod');
    });

    // Step 2: Retrieve factory
    beforeEach(inject(function($injector) {
        circle = $injector.get('circleFactory');
        triangle = $injector.get('triangleFactory');
    }));

    // Step 3: run Test on a method of the factory
    it("Get Circle area", function() {
        expect(circle.GetAreaOfCircle(3)).toEqual(28.26);
    });
    
    it ("Get Circle circumference", function(){
    	expect(circle.getCircumferenceOfCircle(3)).toEqual(18.84);
    	
    });
    
    it ('Get Triangle area', function(){
    	expect (triangle.pythagorus(3,6)).toEqual(45);
    });
});

