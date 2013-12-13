/**
 * @author Charlie
 */

angular.module('towerMod', []).
factory('tower', function() { 'use strict';
	return {
		// race: this.races[2],
		// "class": this.classes[2],
		hitPoints : 4,
		damage : 1,
		bonusDamage : function() {
			return Math.floor(Math.random() * 2) + 1;
		},
		bonusHitPoints : function() {
			return Math.floor(Math.random() * 4) + 1;
		}
	};

});
