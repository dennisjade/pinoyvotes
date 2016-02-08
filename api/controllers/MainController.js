/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   getVotesDetails: function(req, res) {
      VoteDetailsService.getVotes(function(votes) {
        res.json(votes)
      })
    },
    addVote:  function(req, res) {

    }
};

