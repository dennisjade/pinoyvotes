module.exports = {
  getVotes : function(next) {
    Votes.find().exec( function(err, votes) {
      if(err) throw err;
      console.log('bbbbbbbbbbbbbbbbbbb ' + votes);
      next(votes);
    })
  }
}