Instructions for the Angular Three Assignment
=============================================

This exercise creates a very simple function inside an angular module, then hooks it up appropriately 
with a controller, a unit test, and an index page. It uses Charlie's Aptana Ruble to get started.

Use the Elvenware Angular Jasmine Karma project. This contains the necessary files to run Karma on 
the code you generate, as you generate it.



After you install the project in Aptana, 

	

	FourModule.js file
	------------------
	
	1. Use a new JavaScript Template (File -> New From Template -> JavaScript -> JavaScript Template) 
	to create a blank javascript page. Call it FourModule.js and save it 
	in the Source directory of your project.
	
	2. Use this code in the module:
	
		angular.module("fourModule", []).factory('fourFactory', function() {'use strict';
			return {

				getFour : function(){
				return 4;
				}
			};

		});
		
	TestMain.js file	
	----------------

	Now set up the Unit Test. Go to TestMain.js, and make these changes:
	
	1. Under this area at the top
		
			"describe("Test Main", function() {'use strict';"
		
	create a variable called (var fourFactory = null;). This code will be 
	somewhere beneath the declaration  (var MainController = null;)
		  
	2. Then below the 
		
						(beforeEach(function() {
							module('mainModule'); 
	create 	

							module('fourModule');
							
	3.Scroll down past this code:

				beforeEach(inject(function($rootScope, $controller, $injector) {
					mainController = $rootScope.$new();
					$controller('mainController', {
					$scope : mainController
				});
	
		but above this }));

		and type this:
		
				fourFactory = $injector.get('fourFactory');
				
	4.Go below the }));  and type this code:
		
			it("gets the number four", function() {
				var actual = fourFactory.getFour();
				expect(actual).toEqual(4);
			});
		
	karma.conf.js
	-------------
	Open up karma.conf.js, which is in the Tests folder. You will see something like this 
	after the first little bit:

			files: [   
			'Library/angular.js',
			'Library/angular-mocks.js',
			'Tests/TestMain.js',
			'Source/Main.js',
			'Source/NewModule.js',
			'Source/EightModule.js',
			'Source/TenModule.js',
			'Source/OneModule.js',
			'Source/ThreeModule.js', 
			],

	Add 'Source/FourModule.js' to the list. I already added a few other modules, so your list will look
	different.
	
	Main.js
	-------
	1. Add the module into the list in the brackets. Any time you add a module, add the name here.
	
	The first line will look something like this before you change anything. 
	
	angular.module('mainModule', ['newModule', 'eightModule', 'tenModule', 'oneModule', 'threeModule'])
	
	In my code, I already added quite a few modules, which you will not have. 
	Don't forget to put the name of your module in quotes and don't forget to use a comma to separate any modules in the brackets.
	
	So now in my code it looks like this:
	
	angular.module('mainModule', ['newModule', 'eightModule', 'tenModule', 'oneModule', 
	'threeModule', 'fourModule'])
	
	2. The second line looks something like this:
	
	.controller('mainController', function($scope, newFactory, eightFactory, tenFactory, 
	oneFactory, threeFactory) { 'use strict';
	
	Add fourFactory to the list.
	
	.controller('mainController', function($scope, newFactory, eightFactory, tenFactory, oneFactory, 
	threeFactory, fourFactory) { 'use strict';
	
	3. The next line is
	
			$scope.name = "mainController";
	
	Somewhere under that, put this code:
	
			$scope.getFour = fourFactory.getFour();
	
	This is also where you would write a function for the mainController. In my code things look like this:
	
			$scope.add = function(a, b) {
		
				return a + b;
			};
	
			$scope.getNine = newFactory.getNine();
			$scope.getEight = eightFactory.getEight();
			$scope.getTen = tenFactory.getTen();
			$scope.getOne = oneFactory.getOne();
			$scope.getThree = threeFactory.getThree();
			$scope.getFour = fourFactory.getFour();
	
	
	Then way at the bottom  you will see  });

	
	index.html
	----------
	head
	====
	Add this code in the <head></head> section:
	
			<script src = "Source/FourModule.js"> </script>
	
	body
	====
	
	You will see a div id tag:
	
		<div id="textDisplay" data-ng-controller="mainController">
		
	Below that, put your display instructions:

		<p>Get Four:  {{getFour}}</p>
		
		
	Now try running index.html. It should show the results of your work.	
	
	
Using Karma
===========

In the command terminal in Aptana, navigate to the directory where you have your project. 
You will be starting in your Users/myName directory. So if the project is in the isit320 
directory, you might have to cd to Documents/isit320/currentprojectfolder.

run

	npm install

and then type

	karma start

Grunt
=====

You can also use Grunt to run jshint.

	grunt jshint