/**
 * SlidesController
 *
 * @description :: Server-side logic for managing slides
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getImages : function(req, res) {
        console.log('req.body ');
        console.log(req.query);
        SlidesService.getImages('/', function(err, data){
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

