/**
 * @author Margie
 */

angular.module('triangleMod', []).factory('triangleFactory', function(){'use strict';
	return {
		pythagorus: function(L1,L2){
			var leg = (L1 * L1) + (L2 * L2);
			return leg;
			
		}
	};
});


