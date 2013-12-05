/**
 * @author Margie
 */

angular.module ("circleModule", []).factory ('circleFactory', function(){'use strict';
	return{
		GetAreaOfCircle: function(radius){
			var area = radius * radius * 3.14;
			return area;
			
		},
		
		getCircumferenceOfCircle: function(radius){
			var circumference = 3.14 * (2 * radius);
			return circumference;
		}
	};
});
