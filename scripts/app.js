'use strict';

var angulardcOnGithub = angular.module('angulardcOnGithubApp', [])
  .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl:'views/about.html'
      })
      .when('/resources', {
        templateUrl:'views/resources.html' 
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      
  }]);
