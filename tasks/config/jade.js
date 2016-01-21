module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        cwd: 'templates',
        files: [{
          expand: true,
          cwd : 'assets/templates',
          src : [ '*.jade' ],
          dest:'.tmp/public/templates/',
          ext : '.html'
        }]
      }
    }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  // Default task.
  //grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade']);
};