
// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function($window) {
//   return $window._; // assumes underscore has already been loaded on the page
// }]);

var voteApp = angular.module('voteModule', ['ngRoute','facebook','underscore'])

// .config( function( $facebookProvider ) {
//   $facebookProvider.setAppId('247396145430424');
// })

  .run( function( $rootScope ) {
    // declare global vars
    $rootScope.user = {};
    $rootScope.userIsConnected = false
    // Load the facebook SDK asynchronously
    // (function(){
    //    // If we've already installed the SDK, we're done
    //    if (document.getElementById('facebook-jssdk')) {return;}

    //    // Get the first script element, which we'll use to find the parent node
    //    var firstScriptElement = document.getElementsByTagName('script')[0];

    //    // Create a new script element and set its id
    //    var facebookJS = document.createElement('script'); 
    //    facebookJS.id = 'facebook-jssdk';

    //    // Set the new script's source to the source of the Facebook JS SDK
    //    facebookJS.src = '//connect.facebook.net/en_US/sdk.js';

    //    // Insert the Facebook JS SDK into the DOM
    //    firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    //  }());
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

  $scope.vote = function(){
    if (_.isEmpty($rootScope.user)){
      if ($rootScope.userIsConnected){
        Facebook.api('/me', function(response) {
            /**
             * Using $scope.$apply since this happens outside angular framework.
             */
            $scope.$apply(function() {
              $rootScope.user = response;
              console.log('User identified. Voting now ',response)
            });
            
          });
      }else {
        Facebook.login(function(response) {
          if (response.status == 'connected') {
            Facebook.api('/me', function(response) {
              $scope.$apply(function() {
                $rootScope.user = response;
                console.log('User has login. Voting now ',response)
              });
            })
          }
        });
      }
    } else {
      console.log('User is good. Count this vote ',$rootScope.user)
    }
  }

  $scope.recordVote = function(){
    
  }

}])

voteApp.controller('aboutController', ['$scope', function ($scope){
  
}])

voteApp.controller('serviceController', ['$scope', function ($scope){
  
}])

voteApp.controller('contactController', ['$scope', function ($scope){
  
}])

