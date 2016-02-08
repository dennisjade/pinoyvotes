//angular.module('voteModule', ['facebook'])
voteApp.config([
    'FacebookProvider',
    function(FacebookProvider) {
      var myAppId = '247396145430424';
     
      // You can set appId with setApp method
      // FacebookProvider.setAppId('myAppId');
     
      /**
      * After setting appId you need to initialize the module.
      * You can pass the appId on the init method as a shortcut too.
      */
      FacebookProvider.init(myAppId);
    }
])

voteApp.controller('fbController', [
    '$scope',
    '$rootScope',
    '$timeout',
    'Facebook',
    '_',
    function($scope, $rootScope, $timeout, Facebook, _) {
      
      // Define user empty data :/
      //$scope.user = {};
      
      // Defining user logged status
      $scope.logged = false;
      
      // And some fancy flags to display messages upon user status change
      $scope.byebye = false;
      $scope.salutation = false;
      
      /**
       * Watch for Facebook to be ready.
       * There's also the event that could be used
       */
      $scope.$watch(
        function() {
          return Facebook.isReady();
        },
        function(newVal) {
          if (newVal)
            $scope.facebookReady = true;
        }
      );
      
      //var userIsConnected = false;
      
      Facebook.getLoginStatus(function(response) {
        if (response.status == 'connected') {
          $rootScope.userIsConnected = true;
        }
      });
      
      // make this method available from other controller
      $rootScope.$on("CallParentMethod", function(){
           $scope.parentmethod();
      });

      /**
       * IntentLogin
       */
      $scope.IntentLogin = function() {
        if(!$rootScope.userIsConnected) {
          $scope.login();
        }else{
          if (_.isEmpty($scope.user)) {
            console.log('User info is empty. Getting it now');
            $scope.me();
          }else{
            console.log('User is login')
            console.log($scope.user)
          }
        }
      };
      
      /**
       * Login
       */
       $scope.login = function() {
         Facebook.login(function(response) {
          if (response.status == 'connected') {
            $scope.logged = true;
            $scope.me();
          }
        
        });
       };
       
       /**
        * me 
        */
        $scope.me = function() {
          Facebook.api('/me', function(response) {
            /**
             * Using $scope.$apply since this happens outside angular framework.
             */
            $scope.$apply(function() {
              $rootScope.user = response;
            });
            
          });
        };
      
      /**
       * Logout
       */
      $scope.logout = function() {
        Facebook.logout(function() {
          $scope.$apply(function() {
            $rootScope.user   = {};
            $scope.logged = false;  
          });
        });
      }
      
      /**
       * Taking approach of Events :D
       */
      $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status == 'connected') {
          $scope.$apply(function() {
            $scope.salutation = true;
            $scope.byebye     = false;
          });
        } else {
          $scope.$apply(function() {
            $scope.salutation = false;
            $scope.byebye     = true;
            
            // Dismiss byebye message after two seconds
            $timeout(function() {
              $scope.byebye = false;
            }, 2000)
          });
        }
      });
    }
])

  /**
   * Just for debugging purposes.
   * Shows objects in a pretty way
   */
voteApp.directive('debug', function() {
  return {
    restrict: 'E',
    scope: {
      expression: '=val'
    },
    template: '<pre>{{debug(expression)}}</pre>',
    link: function(scope) {
      // pretty-prints
      scope.debug = function(exp) {
        return angular.toJson(exp, true);
      };
    }
  }
})
