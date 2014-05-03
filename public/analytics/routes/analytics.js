'use strict';

angular.module('mean.analytics').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		// states for my app
		$stateProvider
			.state('analytics',
				{
					url: '/analytics',
					templateUrl: 'public/analytics/views/analytics.html'
				});
	}
]);