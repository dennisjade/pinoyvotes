/**
* Votes.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    candidateName : {
      'type'   : 'string',
      'unique' : true
    },
    img : {
      'type'   : 'string'
    },
    desc : {
      'type' : 'string'
    },
    votes : {
      'type' : 'integer',
      'defaultsTo' : 0
    },
    likes : {
      'type' : 'integer',
      'defaultsTo' : 0
    },
    voters : {
      'collection' : 'user',
      'via' : 'userid'
    },
    comments : {
      'type' : 'string'
    }
  }
};

