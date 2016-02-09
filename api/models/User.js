/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userid : {
      'type'   : 'string',
      'unique' : true,
      'collection' : 'votes',
      'via' : 'voters',
      'dominant' :true
    },
    fname : {
      'type' : 'string'
    },
    lname : {
      'type' : 'string'
    }
  }
};

