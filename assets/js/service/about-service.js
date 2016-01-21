angular
  .module('voteModule')
  .factory('AboutService', function($http, $q){
  return {
    'getAboutPage' : function(){
      var defer = $q.defer();
      $http.get('/getAbout').success(function(resp){
        return resp
      }).error(function(err){
        defer.reject(err);
      })

    }
  }
})