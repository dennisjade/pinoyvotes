module.exports = {
  getImages:function (link,next){

    query = {link:link}
    Slides.find(query).exec(function(errFind,data){
      next(errFind, data)
    })
  }
}