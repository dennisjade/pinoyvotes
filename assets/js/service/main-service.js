// var voteApp = angular.module('VoteApp', ['$http',  '$q']);

// voteApp.factory('VoteApp', [ '$http', '$q', 
//   function($http,$q){
//     return 
//   }])


voteApp.service('MainService', function($http){
  var getVotesUrl = '/main/getVotesDetails',
      slidesUrl= '/slides/getImages',
      recordVotesUrl = '/votes/recordVotes'

  var doRequest = function(data, url,method) {
      return $http({
        method: method,
        url: url
        data: data
      });
  }

  return {
    'getSlides' : function(data){
      return doRequest(opts, votesUrl, 'GET'); 
    },
    'getVotes' : function(data){
      return doRequest(opts, getVotesUrl, 'GET'); 
    },
    'recordVotes': function(data){
      return doRequest(opts, recordVotesUrl, 'POST');
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