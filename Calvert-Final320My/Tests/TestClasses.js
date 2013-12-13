/**
 * @author Charlie
 */

describe("TestClasses", function() {'use strict';

	var classes = null;

	beforeEach(function() {
		module('classesMod');
	});

	beforeEach(inject(function($injector) {
		classes = $injector.get('classes');
	}));

	it("can get a class", function() {
		expect(classes).toNotEqual(null);
	});

	it("can get a Cleric", function() {
		expect(classes[0].name).toEqual('Cleric');
	});

	it("can get a Cleric's name", function() {
		expect(classes[0].name).toEqual('Cleric');
	});

	it("can get a Cleric's armor", function() {
		expect(classes[0].armor).toEqual('any');
	});

	it("can get Cleric hitDie", function() {
		expect(classes[0].hitDie).toEqual(6);
	});

	it("can get a Cleric shield", function() {
		expect(classes[0].shield).toEqual(true);
	});

	it("can get a Cleric spell", function() {
		expect(classes[0].spells).toEqual(['none']);
	});

	it("can get a Cleric weapon 0", function() {
		expect(classes[0].weapons[0]).toEqual('club');
	});

	it("can get a Cleric weapon 1", function() {
		expect(classes[0].weapons[1]).toEqual('mace');
	});

	it("can get a Cleric weapon 2", function() {
		expect(classes[0].weapons[2]).toEqual('maul');
	});

	it("can get a Cleric weapon 3", function() {
		expect(classes[0].weapons[3]).toEqual('quarterstaff');
	});

	it("can get a Cleric weapon 4", function() {
		expect(classes[0].weapons[4]).toEqual('sling');
	});

	it("can get a Cleric weapon 5", function() {
		expect(classes[0].weapons[5]).toEqual('warhammer');
	});

	it("can get a Cleric spForLevelTwo", function() {
		expect(classes[0].xpForLevelTwo).toEqual(1500);
	});

	it("can get a Fighter", function() {
		expect(classes[1].name).toEqual('Fighter');
	});

	it("can get a Fighter", function() {
		expect(classes[1].armor).toEqual('any');
	});

	it("can get a Fighter hitDie", function() {
		expect(classes[1].hitDie).toEqual(8);
	});

	it("can get a Fighter shield", function() {
		expect(classes[1].shield).toEqual(true);
	});

	it("can get a Fighter spell", function() {
		expect(classes[1].spells).toEqual(['none']);
	});

	it("can get a Fighter weapon", function() {
		expect(classes[1].weapons).toEqual(['Any']);
	});

	it("can get a Fighter expFor Level 2", function() {
		expect(classes[1].xpForLevelTwo).toEqual(2000);
	});

	it("can get a Magic-User", function() {
		expect(classes[2].name).toEqual('Magic-User');
	});

	it("can get a Magic-User armor", function() {
		expect(classes[2].armor).toEqual('none');
	});

	it("can get a Magic-User hitDie", function() {
		expect(classes[2].hitDie).toEqual(4);
	});

	it("can get a Magic-User shield", function() {
		expect(classes[2].shield).toEqual(false);
	});

	it("can get a Magic-User xpForLevel2", function() {
		expect(classes[2].xpForLevelTwo).toEqual(2500);
	});
	
	it("can get a Thief", function() {
		expect(classes[3].name).toEqual('Thief');
	});
	
	it("can get a Thief armor", function() {
		expect(classes[3].armor).toEqual('leather');
	});
	
	it("can get a Thief hitDie", function() {
		expect(classes[3].hitDie).toEqual(4);
	});
	
	it("can get a Thief shield", function() {
		expect(classes[3].shield).toEqual(false);
	});
	
	it("can get a Thief spells", function() {
		expect(classes[3].spells).toEqual(['none']);
	});
	
	it("can get a Thief weapons", function() {
		expect(classes[3].weapons).toEqual(['any']);
	});
	
	it("can get a Thief weapons xp for Level 2", function() {
		expect(classes[3].xpForLevelTwo).toEqual(1250);
	});

});
