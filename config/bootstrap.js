/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  console.log('Bootstrapping...')

  addSlidesImages = function (cb){
    console.log('Adding slide images...')
    var images = [{link:'/', images:['/images/carousel-pres2.jpg','/images/carousel-pres3.jpg']}, 
                {link:'vp', images:['/images/carousel-pres1.jpg']}]

    images.forEach(function(img, index){
      
      Slides.findOne({link:img.link}).exec(function(errFind, data){
        if (errFind)
          console.log("Finding is hard cause we got an error" + errFind)
        
        if (!data){
          Slides.create(img).exec(function(err, data){
            if (err)
              console.log('I felt an error just happen')
            else
              console.log('Olryt then we have some data')
          })
        } // end if
      }) //end findOne
    }) // end forEach
    
  };

  addSlidesImages(cb);

  cb();
};
