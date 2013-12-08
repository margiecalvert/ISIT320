/**
 * @author Margie
 */
angular.module('bookMod', []).factory('bookFactory', function() {'use strict';

	return {
		authors : [{
			author : "Dickens",
			book : "Great Expectations"
		}, {
			author : "Tolstoy",
			book : "War and Peace"
		}, {

			author : "Melville",
			book : "Moby Dick"
		}, {

			author : "Christie",
			book : "Murder on the Orient Express"
		}, {

			author : "Hemingway",
			book : "The Sun Also Rises"
		}],

		getAuthorFromBook : function(book) {
			for (var i = 0; i < 5; i++) {
				if (this.authors[i].book === book) {
					return this.authors[i].author;
				}
			}

		},

		getBookFromAuthor : function(author) {
			for (var i = 0; i < 5; i++) {
				if (this.authors[i].author === author) {
					return this.authors[i].book;
				}

			}
		}
	};
}).controller('bookController', function($scope, bookFactory) {

	$scope.authors = bookFactory.authors;

	$scope.bookFromAuthor = function() {
		$scope.authorFromBook = bookFactory.getAuthorFromBook($scope.bookAuthor);
	};

	$scope.authorFromBook = function() {
		$scope.bookFromAuthor = bookFactory.getBookFromAuthor($scope.authorBook);
	};

});
