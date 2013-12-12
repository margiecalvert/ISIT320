/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('characterMod', ['heroMod', 'towerMod', 'classesMod'])
.factory('people', function(hero, tower, classes) {'use strict';

	return {

		

		hero: hero,
		
		tower: tower,
		
		classes: classes
		
	};
});
