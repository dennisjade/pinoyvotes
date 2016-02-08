module.exports = function(grunt) {
  // Project configuration.
  grunt.config.set('jade', {
      compile: {
        options: {
          pretty: true,
        },
        cwd: 'templates',
        // files: {
        //   '.tmp/public/templates.js': require('../pipeline').templateFilesToInject
        // }
        files: [{
          expand: true,
          cwd : 'assets/templates',
          src : [ '*.jade' ],
          dest:'.tmp/public/templates/',
          ext : '.html'
        }]
      }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
};