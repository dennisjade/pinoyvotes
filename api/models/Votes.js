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
    desc : {
      'type' : 'string'
    },
    votes : {
      'type' : 'integer'
    },
    likes : {
      'type' : 'integer'
    }
  }
};

