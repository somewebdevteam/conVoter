(function () {
	var convoter = angular.module('convoter', [
			'ngRoute'
		]);

	convoter.config(['$routeProvider', '$locationProvider',
		function (routeProvider, locationProvider) {
			/*
			 * turn on html5 history api
			 * for avoiding hashs in URLs
			 */
			locationProvider.html5Mode(true);

			routeProvider
				.when('/login', {
					templateUrl: 'partials/guest.html',
					controller: 'GuestController'
				})
				.otherwise({
					templateUrl: 'partials/main.html'
				});
		}
	]);
	
	convoter
		.constant('colorConfig', {
			colors: []
		})
		.constant('I18N.MESSAGES', {
			'logo': 'Contest voting in realtime',
			'contestIdInputLabel': 'Enter your contest ID',
			'or': 'or',
			'loginAsJury': 'Login as Jury',
			'action.vote': 'vote'
		});

	convoter
		.factory('localizedMessages', ['I18N.MESSAGES', function (i18nMessages) {
			return {
				get: function (messageKey) {
					if (messageKey in i18nMessages) {
						return i18nMessages[messageKey];
					} else {
						return messageKey;
					}
				}
			}
		}]);

})();