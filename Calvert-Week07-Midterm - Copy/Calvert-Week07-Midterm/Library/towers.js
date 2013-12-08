tower: function($resource) {
	console.log('Towers being called.');
	var Towers = $resource('https://api.mongolab.com/api/1/databases/margie01/collections/towers/:id', {
      apiKey:'W_Xas2gshx3Baf9QX6W53oN7riOyhW4P',       
    });

    Towers.prototype.getName = function() {
      return this.name;
    };
    
    Towers.prototype.getHealth = function() {
    	return this.health;
    };
	Towers.prototype.getHitPoints = function(){
		return this.hitPoints;
	};
	
	Towers.prototype.getDamage = function(){
		return this.damage;
	};		
		
    return Towers;    
  };