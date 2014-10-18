var convoter = angular.module('convoter', [
		'ngRoute',
		'ngResource'
	]);

convoter
	.constant('BASE_URLS', {
		api: 'assets/',
		templates: ''
	})
	.constant('I18N.MESSAGES', {
		'logo': 'Contest voting in realtime',
		'contestIdInputLabel': 'Enter your contest ID',
		'or': 'or',
		'loginAsJury': 'Login as Jury',
		'action.vote': 'vote'
	});

convoter.config(['$routeProvider', '$locationProvider', 'BASE_URLS',
	function (routeProvider, locationProvider, baseUrls) {
		/*
		 * turn on html5 history api
		 * for avoiding hashs in URLs
		 */
		locationProvider.html5Mode(true);

		routeProvider
			.when('/login', {
				templateUrl: baseUrls.templates + 'partials/guest.html',
				controller: 'GuestController'
			})
			.when('/voting', {
				templateUrl: baseUrls.templates + 'partials/inner.html',
				controller: 'VotingMainController'
			})
			.when('/voting/:eventId', {
				templateUrl: baseUrls.templates + 'partials/inner.html',
				controller: 'GuestController'
			})
			.otherwise({
				templateUrl: baseUrls.templates + 'partials/main.html'
			});
	}
]);

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
