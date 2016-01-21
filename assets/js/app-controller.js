
var voteApp = angular.module('voteModule', ['ngRoute']);

voteApp.config( function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'templates/about.jade',
      controller : 'aboutController'
    })
    .when('/service', {
      templateUrl: 'templates/services.jade',
      controller : ''
    })
    .when('/contact', {
      templateUrl: 'templates/contact.jade',
      controller : ''
    })
    .when('/', {
      templateUrl: 'templates/main.jade',
      controller : 'mainController'
    })
    .otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  
});

voteApp.controller('mainController', ['$scope', function ($scope){
  
}])

voteApp.controller('aboutController', ['$scope', function ($scope){
  
}])