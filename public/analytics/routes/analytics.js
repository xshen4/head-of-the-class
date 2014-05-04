'use strict';

angular.module('mean.analytics').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		// states for my app
		$stateProvider
			.state('analytics',
				{
					url: '/analytics',
					templateUrl: 'public/analytics/views/analytics.html'
				})
			.state('class_stats',
			{
				url: '/class_stats',
				templateUrl: 'public/analytics/views/class_stats.html'
			})
			.state('individual_stats',
			{
				url:'/individual_stats',
				templateUrl: 'public/analytics/views/individual_stats.html'
			})
			.state('new_reports',
			{
				url:'/new_reports',
				templateUrl: 'public/analytics/views/new_reports.html'
			})
			;
	}
]);