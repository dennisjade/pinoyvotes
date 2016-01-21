/**
 * AboutController
 *
 * @description :: Server-side logic for managing abouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getAbout: function(req, res) {
    AboutService.getAbout(function(about){
      res.send(about);
    })
  }
};

