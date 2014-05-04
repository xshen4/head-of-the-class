'use strict';

angular.module('mean.students').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		// states for my app
		$stateProvider
			.state('profile',
				{
					url: '/profile',
					templateUrl: 'public/students/views/profile.html'
				})
			;
	}
]);