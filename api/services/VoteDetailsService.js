module.exports = {
  getVotes : function(data, next) {
    Votes.find().exec( function(err, votes) {
      if(err) throw err;
      
      console.log('getVotes service ', votes);
      next(votes);
    })
  },
  'recordVotes' : function(data, plusOrMinus, next) {
    Votes.findOne({_id:data.candidateId}).exec(function(err, votesModel){
      if (err) 
        throw err;

      votesModel.votes + plusOrMinus

      if (plusOrMinus==1){
        votesModel.voters.add(user)
      }else{
        User.findOne({userid: data.voter.id}).exec(function(results){
          if (!results)
            votesModel.voters.remove(results._id)
        })
      }

      votesModel.save(function(errSave){
        if (errSave){
          console.log('Error on saving votes: ', errSave)
          next(errSave)
        }else
          next(votesModel)
      })
    })
  }
}