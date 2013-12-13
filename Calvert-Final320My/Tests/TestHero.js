/**
 * @author Charlie
 */

describe("Test hero", function() {'use strict';

	var hero = null;

	beforeEach(function() {
		module('heroMod');
	});

	beforeEach(inject(function($injector) {
		hero = $injector.get('hero');
	}));

	it("can get a hero", function() {
		expect(hero).toNotEqual(null);
	});

	it("can get Sam", function() {
		expect(hero.name).toEqual('Sam');
	});

	it("can get hitPoints", function() {
		expect(hero.hitPoints).toEqual(12);
	});

	it("can get heroclass name", function() {
		expect(hero.class.name).toEqual('Magic-User');
	});

	it("can get heroclass armor", function() {
		expect(hero.class.armor).toEqual('none');
	});

	it("can get heroclass shield", function() {
		expect(hero.class.shield).toEqual(false);
	});

	it("can get heroclass xpForLevel2", function() {
		expect(hero.class.xpForLevelTwo).toEqual(2500);
	});

	it("can get heroclass hitDie", function() {
		expect(hero.class.hitDie).toEqual(4);
	});

	it("can get heroclass damage", function() {
		expect(hero.damage).toEqual(2);
	});

	it("can get heroclass spell[0]", function() {
		expect(hero.class.spells[0]).toEqual('Charm Person');
	});

	it("can get heroclass spell[0]", function() {
		expect(hero.class.spells[0]).toEqual('Charm Person');
	});

	it("can get heroclass spell[1]", function() {
		expect(hero.class.spells[1]).toEqual('Detect Magic');
	});

	it("can get heroclass spell[2]", function() {
		expect(hero.class.spells[2]).toEqual('Floating Disc');
	});

	it("can get heroclass spell[3]", function() {
		expect(hero.class.spells[3]).toEqual('Hold Portal');
	});

	it("can get heroclass spell[4]", function() {
		expect(hero.class.spells[4]).toEqual('Light');
	});

	it("can get heroclass spell[5]", function() {
		expect(hero.class.spells[5]).toEqual('Magic Missile');
	});

	it("can get heroclass spell[6]", function() {
		expect(hero.class.spells[6]).toEqual('Magic Mouth');
	});

	it("can get heroclass spell[7]", function() {
		expect(hero.class.spells[7]).toEqual('Protection from Evil');
	});

	it("can get heroclass spell[8]", function() {
		expect(hero.class.spells[8]).toEqual('Read Languages');
	});

	it("can get heroclass spell[9]", function() {
		expect(hero.class.spells[9]).toEqual('Read Magic');
	});

	it("can get heroclass spell[10]", function() {
		expect(hero.class.spells[10]).toEqual('Shield');
	});

	it("can get heroclass spell[11]", function() {
		expect(hero.class.spells[11]).toEqual('Sleep');
	});

	it("can get heroclass spell[12]", function() {
		expect(hero.class.spells[12]).toEqual('Ventriloquism');
	});

	it("can get herorace name", function() {
		expect(hero.race.name).toEqual('Elves');
	});

	it("can get herorace name", function() {
		expect(hero.race.name).toEqual('Elves');
	});

	it("can get herorace description", function() {
		expect(hero.race.description).toEqual('Typically about 5 feet tall, slender, 130 lbs. Lifespan of 1200 years or more. Pale with dark hair, pointed ears, little or no facial hair.');
	});

	it("can get herorace hitDie", function() {
		expect(hero.race.hitDie).toEqual(6);
	});

	it("can get herorace languages", function() {
		expect(hero.race.languages).toEqual(['Common', 'Elvish']);
	});

	it("can get herorace classes", function() {
		expect(hero.race.classes).toEqual(['Fighter', 'Magic User']);
	});

	it("can get bonusDamage", function() {
		expect(hero.bonusDamage).toNotEqual(null);
	});

	it("can get bonusDamage defined", function() {
		expect(hero.bonusDamage).not.toBeUndefined();
	});

	it("can get bonusHitPoints", function() {
		expect(hero.bonusHitPoints).toNotEqual(null);
	});
	
	it("can get bonusHitPoints range", function() {
		for (var i = 0; i < 150; i++) {
			var actual = hero.bonusHitPoints();
			expect(actual).toBeGreaterThan(0);
			expect(actual).toBeLessThan(5);
		}
	});

	it("can get bonusDamage defined", function() {
		expect(hero.bonusHitPoints).not.toBeUndefined();
	});

	it("can get bonusDamage range", function() {
		for (var i = 0; i < 150; i++) {
			var actual = hero.bonusDamage();
			expect(actual).toBeGreaterThan(0);
			expect(actual).toBeLessThan(3);
		}
	});
});
