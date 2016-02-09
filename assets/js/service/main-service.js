// var voteApp = angular.module('VoteApp', ['$http',  '$q']);

// voteApp.factory('VoteApp', [ '$http', '$q', 
//   function($http,$q){
//     return 
//   }])


voteApp.service('MainService', function($http){
  var getVotesUrl = '/main/getVotesDetails',
      slidesUrl= '/slides/getImages',
      recordVotesUrl = '/votes/'

  var doRequest = function(opts, url) {
      return $http({
        method: 'GET',
        url: url
      });
  }

  return {
    'getSlides' : function(opts){
      return doRequest(opts, votesUrl); 
    },
    'getVotes' : function(opts){
      return doRequest(opts, getVotesUrl); 
    },
    'recordVotes': function(opts){
      return doRequest(opts, )
    }

      // var defer = $q.defer();
      // $q.all([votesRequest, slidesRequest]).then(function(results){
      //   console.log('ccccccccccccccc');
      //   console.log(results);
      //   return defer.resolve(results);
      // })

      // var defer = $q.defer();
      // $http.get('/main/getVotesDetails').success(function(resp){
      //   console.log('bbbbbb '+ resp);
      //   return resp
      // }).error(function(err){
      //   defer.reject(err);
      // })
      // return defer.promise;()
      //}
  }
})