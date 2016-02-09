
// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function($window) {
//   return $window._; // assumes underscore has already been loaded on the page
// }]);

var voteApp = angular.module('voteModule', ['ngRoute','facebook','underscore'])

  .run( function( $rootScope ) {
    // declare global vars
    $rootScope.user = {};
    $rootScope.userIsConnected = false
  })


voteApp.config( function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller : 'aboutController'
    })
    .when('/service', {
      templateUrl: 'templates/service.html',
      controller : 'serviceController'
    })
    .when('/contact', {
      templateUrl: 'templates/contact.html',
      controller : 'contactController'
    })
    .when('/vp', {
      templateUrl: 'templates/vp.html',
      controller : ''
    })
    .when('/', {
      templateUrl: 'templates/main.html',
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

voteApp.controller('mainController', 
            ['$scope','$rootScope','_','Facebook','MainService',
            function ($scope, $rootScope, _, Facebook, MainService){
  var opts = {
    filter : ''
  }

  MainService.getVotes(opts).success(function(results){
    console.log(results.data)
    $scope.votes = results.data
  })

  $scope.vote = function($plusOrMinus, $candidateId){
    if (_.isEmpty($rootScope.user)){
      if ($rootScope.userIsConnected){
        Facebook.api('/me', function(response) {
            /**
             * Using $scope.$apply since this happens outside angular framework.
             */
            $scope.$apply(function() {
              $rootScope.user = response;
              console.log('User identified. Voting now ',response)
              $scope.recordVote($rootScope.user, $candidateId, $plusOrMinus)
            });
            
          });
      }else {
        Facebook.login(function(response) {
          if (response.status == 'connected') {
            Facebook.api('/me', function(response) {
              $scope.$apply(function() {
                $rootScope.user = response;
                console.log('User has login. Voting now ',response)
                $scope.recordVote($rootScope.user, $candidateId, $plusOrMinus)
              });
            })
          }
        });
      }
    } else {
      console.log('User is good. Count this vote ',$rootScope.user)
    }
  }

  $scope.recordVote = function($user, $candidateId, $plusOrMinus){
    var opts = {voter:$user, candidateId:$candidateId, plusOrMinus:$plusOrMinus}
    console.log('optsssssss', opts)
    MainServer.recordVotes(opts).success(function(results){
      $scope.recentVoteCount = results.votes
    }) 
  }

}])

voteApp.controller('aboutController', ['$scope', function ($scope){
  
}])

voteApp.controller('serviceController', ['$scope', function ($scope){
  
}])

voteApp.controller('contactController', ['$scope', function ($scope){
  
}])

