/**
 * VotesController
 *
 * @description :: Server-side logic for managing votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  recordVotes : function(req, res) {
    console.log('req.body: ', req.body);
    console.log('req.query: ',req.query);

    var data = {candidateId:'', voter:{id:''}}
    var plusOrMinus = 1
    Votes.recordVotes(data, plusOrMinus, function(err, data){
      var ret = {
        status:200,
        msg: "success",
        data: data
      }
      console.log(ret);
      res.json(ret)
    }) // end getImages
  } // end function
};

