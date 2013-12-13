/**
 * @author Margie
 */

/**
 * @author Charlie
 */

describe("TestTower", function() {'use strict';

	var tower = null;

	beforeEach(function() {
		module('towerMod');
	});

	beforeEach(inject(function($injector) {
		tower = $injector.get('tower');
	}));

	it("can get a tower", function() {
		expect(tower).toNotEqual(null);
	});
	
	it("tower hitPoints", function() {
		expect(tower.hitPoints).toEqual(4);
	});
	
	it("tower damage", function() {
		expect(tower.damage).toEqual(1);
	});

	it("can get bonusDamage", function() {
		expect(tower.bonusDamage).toNotEqual(null);
	});
	
	it("can get bonusDamage defined", function() {
		expect(tower.bonusDamage).not.toBeUndefined();
	});
	
	it("can get bonusHitPoints", function() {
		expect(tower.bonusHitPoints).toNotEqual(null);
	});
	
	it("can get bonusDamage defined", function() {
		expect(tower.bonusHitPoints).not.toBeUndefined();
	});
	
}); 