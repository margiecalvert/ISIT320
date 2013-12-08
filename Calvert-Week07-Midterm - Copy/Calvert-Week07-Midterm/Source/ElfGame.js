/* jshint browser: true */

angular.module('elfGameMod', ['characters', 'gameWrapper'])
.factory('elfgame', function(gameEventService, people, gameWrap) { 'use strict';

	return {

		map_grid : null,

		defaultMapGrid : {
			width : 18,
			height : 12,
			tile : {
				width : 32,
				height : 32
			}
		},

		villages : [],

		// Report an event
		reportEvent : function(message) {
			gameEventService.towerBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			gameEventService.debugBroadcast(message);
		},

		rollD3 : function(village) {
			village.tower.hitPoints -= Math.floor(Math.random() * 3);
			if (village.tower.hitPoints <= 2 && people.hero.hitPoints >2){
				setTimeout(function(){gameEventService.encounterBroadcast('Village sleeping.');},1000);
				
			}
			else if (people.hero.hitPoints <= 2 && village.tower.hitPoints >2){
				setTimeout(function(){gameEventService.encounterBroadcast('Hero resting.');},1000);
			}	
			
			else(gameEventService.encounterBroadcast('It is a hard battle.'));
		},

        encounterFood : function(food) {
            gameEventService.debugBroadcast("food");
            gameEventService.encounterBroadcast('Food success');
            return true;
        },
        
		encounter : function(village) {
			this.rollD3(village);
			console.log("Hero name = " + people.hero.name);
			gameEventService.debugBroadcast('Tower hit points: ' + village.tower.hitPoints);
			if (village.tower.hitPoints <= 0) {
				gameEventService.encounterBroadcast('success');
				return true;
			} else {
				gameEventService.encounterBroadcast('miss');
				return false;
			}
		},

		newVillage : function(village) {
			village.tower = people.tower();
			village.tower.loadTower(function(tower) {
				village.tower.hitPoints = tower[0].hitPoints;
				village.tower.damage = tower[0].damage;
				console.log(village.tower[0].hitPoints);
			});					
			this.villages.push(village);
		},

		goLeft : function() {
			Crafty.trigger('goLeft', Crafty);
		},

		stopMove : function() {
			Crafty.trigger('stopMove', Crafty);
		},

		// Get width of the game screen in pixels
		width : function() {
			return this.map_grid.width * this.map_grid.tile.width;
		},

		// Get height of the game screen in pixels
		height : function() {
			return this.map_grid.height * this.map_grid.tile.height;
		},

		initMapGrid : function(mapGrid) {
			this.map_grid = mapGrid;
		},
		
		// Initialize and start our game
		start : function(mapGrid) {			
			// Start crafty
			var gameDiv = document.getElementById("gameBoard");
			if (mapGrid) {
				this.map_grid = mapGrid;
			} else {
				this.map_grid = this.defaultMapGrid;
			}
			gameWrap.startGame(gameDiv, this);	
			/*Crafty.init(this.width(), this.height(), gameDiv);
			Crafty.game = this;
			Crafty.background('rgb(0, 109, 20)');

			// Call load scene, defined below
			Crafty.scene('Loading'); */
			people.hero.loadData();
			//people.tower().loadTower();
		}
	};
});

