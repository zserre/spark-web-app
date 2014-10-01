/*global module:false*/
'use strict';

var env = process.env.NODE_ENV || 'development'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt)


  // Project configuration.
  grunt.initConfig({

    // Project settings
    conf: {
      // configurable paths
      app: 'app/assets',
      dist: 'public',
      config: 'config',
      env: env
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      target: {
        src: 'app/views/index.ejs',
        fileTypes: {
          html: {
            replace: {
              js: '<script src="/{{filePath}}"></script>',
              css: '<link rel="stylesheet" href="/{{filePath}}"></link>'
            }
          }
        }
      }
    },

    // Renames files for browser caching purposes
    rev: {
      prod: {
        files: {
          src: [
            '<%= conf.dist %>/js/**/*.js',
            '<%= conf.dist %>/css/**/*.css',
            '<%= conf.dist %>/img/**/*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= conf.dist %>/fonts/**/*.{eot,svg,ttf,woff}'
          ]
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      prod: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= conf.app %>',
          dest: '<%= conf.dist %>',
          src: [
            'views/**/*.html',
            'bower_components/**/*',
            'img/**/*',
            'css/**/*',
            'js/**/*'
          ]
        }]
      },
      dev: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= conf.app %>',
          dest: '<%= conf.dist %>',
          src: [
            'bower_components/**/*',
            'js/**/*',
            'views/**/*',
            'img/**/*',
            'css/**/*'
          ]
        }]
      }
    }

  })

  // Default task.
  grunt.registerTask('default', [
    'bower-install',
    'copy:dev'
  ])

}
