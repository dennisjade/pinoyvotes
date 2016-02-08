module.exports = function (grunt) {
  grunt.registerTask('syncAssets', [
    'jade:compile',
    //'jst:dev',
    'less:dev',
    'sync:dev',
    'coffee:dev'
  ]);
};
