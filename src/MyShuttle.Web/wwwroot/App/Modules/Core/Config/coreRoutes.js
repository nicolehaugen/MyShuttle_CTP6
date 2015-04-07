'use strict';

angular.module('myShuttleCore').config(['$urlRouterProvider',
	function($urlRouterProvider) {
        $urlRouterProvider.when('', '/dashboard');

        // TODO: Manage invalid routes
        //$urlRouterProvider.otherwise('/');
	}
]);