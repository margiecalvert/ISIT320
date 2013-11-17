module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        all: ['server.js']
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
}