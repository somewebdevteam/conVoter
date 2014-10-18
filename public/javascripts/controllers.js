(function () {
	var convoter = angular.module('convoter');

	convoter.controller('GuestController', ['$scope', 
		function (scope) {
			var startBox = $('.start-box'),
				body = $('body');

			body
				.attr('class', '')
				.addClass('page-guest');

			scope.close = function () {
				startBox.removeClass('login');
			};

			scope.loginAsJury = function () {
				startBox.addClass('login');
			};
		}
	]);

	convoter.controller('VotingMainController', ['$scope', function (scope) {
		var body = $('body');

		body
			.attr('class', '')
			.addClass('page-inner')
	}]);

	convoter.controller('LoginAsJuryFormController', ['$scope', '$http', '$location', 
		function (scope, http, location) {
			var form = $('#jury-login-form');

			scope.formData = {};

			scope.submit = function () {
				http({
					method: 'POST',
					url: form.attr('action'),
					data: $.param(scope.formData),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).success(function () {
					
				});

				location.path('/');
			};
		}
	]);

	convoter.controller('FindContestFormController', ['$scope', function (scope) {

	}]);

	convoter.controller('JuryController', ['$scope', function (scope, Jury) {
		scope.jury = [
			{
				imageSrc: 'http://placehold.it/60x60',
				name: 'Firstname Lastname'
			},
			{
				imageSrc: 'http://placehold.it/60x60',
				name: 'Firstname Lastname'
			},
			{
				imageSrc: 'http://placehold.it/60x60',
				name: 'Firstname Lastname'
			},
		]
	}]);

	convoter.controller('ProjectController', ['$scope', function (scope) {
		scope.projects = [
			{
				name: 'project',
				teamName: 'someteam'
			},
			{
				name: 'project',
				teamName: 'someteam'
			},
			{
				name: 'project',
				teamName: 'someteam'
			}
		]
	}]);
})();