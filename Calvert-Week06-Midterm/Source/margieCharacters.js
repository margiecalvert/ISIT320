/**
 * @author Charlie Calvert
 */

/* global angular:true */

angular.module('characters', ['mongoMod'])
.constant('CONFIG', {
    DB_NAME: 'margie01',
    COLLECTION: 'towers',
    API_KEY: 'W_Xas2gshx3Baf9QX6W53oN7riOyhW4P'
}).factory('people', function($http, mongoTowerService) {'use strict';

	var people = {

		races : [{
			name : 'Dwarves',
			description : 'Typically about 4 feet tall, stocky, lifespan of 300-400 years. Thick hair and beards',
			hitDie : 1,
			languages : ['Common', 'Dwarvish'],
			classes : ['Cleric', 'Fighter', 'Thief']
		}, {
			name : 'Halflings',
			description : 'Typically 3 tall, 60 lbs., with curly hair, no facial hair, lifespan of about 100 years.',
			hitDie : 6,
			languages : ['Common', 'Halfling'],
			classes : ['Cleric', 'Fighter', 'Thief']
		}, {
			name : 'Elves',
			description : 'Typically about 5 feet tall, slender, 130 lbs. Lifespan of 1200 years or more. Pale with dark hair, pointed ears, little or no facial hair.',
			hitDie : 6,
			languages : ['Common', 'Elvish'],
			classes : ['Fighter', 'Magic User']
		}, {
			name : 'Humans',
			description : 'Average male is typically 6 feet tall, 175 lbs., and lives about 75 years.',
			hitDie : 1,
			languages : ['Common'],
			classes : ['Any']
		}],

		classes : [{
			name : 'Cleric',
			armor : 'any',
			hitDie : 6,
			shield : true,
			spells : ['none'],
			weapons : ['club', 'mace', 'maul', 'quarterstaff', 'sling', 'warhammer'],
			xpForLevelTwo : 1500
		}, {
			name : 'Fighter',
			armor : 'any',
			hitDie : 8,
			shield : true,
			spells : ['none'],
			weapons : ['Any'],
			xpForLevelTwo : 2000
		}, {
			name : 'Magic-User',
			armor : 'none',
			hitDie : 4,
			shield : false,
			spells : ['Charm Person', 'Detect Magic', 'Floating Disc', 'Hold Portal', 'Light', 'Magic Missile', 'Magic Mouth', 'Protection from Evil', 'Read Languages', 'Read Magic', 'Shield', 'Sleep', 'Ventriloquism'],
			weapons : ['cudgel', 'dagger', 'walking staff'],
			xpForLevelTwo : 2500
		}, {
			name : 'Thief',
			armor : 'leather',
			hitDie : 4,
			shield : false,
			spells : ['none'],
			weapons : ['any'],
			xpForLevelTwo : 1250
		}],

		hero : {
			hitPoints : 14,

			damage : 3,

			loadData : function() {

				var getDataJson = $http.get('margie.json');

				getDataJson.success(function(data, status, headers, config) {
					console.log("Success: " + data);
					people.hero = data;
				});

				getDataJson.error(function(data, status, headers, config) {
					console.log("Error: " + data);
					throw new Error('Oh no! An Error!');
				});

			}
		},

		tower : function() {
			return {
				hitPoints : 12,
	
				damage : 2,
	
				loadTower : function(callback) {
					mongoTowerService.query({}, callback);
				}
			};
		}
	};

	 
	
	return people;
});
