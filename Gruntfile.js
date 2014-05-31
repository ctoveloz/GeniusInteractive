/* global module:true */
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    dirs: {
      js: 'assets/js',
      css: 'assets/css',
      img: 'assets/img',
      sass: 'assets/sass'
    },

    pkg: grunt.file.readJSON( 'package.json' ),

    clean: {
      dist: 'dist',
      sprite: [
        'dist/<%= dirs.img %>/sprite/retina',
        'dist/<%= dirs.img %>/sprite/standard'
      ],
      release: [
        'dist/<%= dirs.sass %>',
        'dist/<%= dirs.js %>/main.js',
        'dist/<%= dirs.js %>/plugins.js'
      ]
    },

    concat: {
      dist: {
        src: [
          'src/<%= dirs.js %>/plugins.js',
          'src/<%= dirs.js %>/main.js'
        ],
        dest: 'src/<%= dirs.js %>/scripts.js'
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      target: {
        files: {
          'dist/<%= dirs.js %>/scripts.js': ['dist/<%= dirs.js %>/scripts.js']
        }
      }
    },

    compass: {
      dev: {
        options: {
          sassDir: 'src/<%= dirs.sass %>',
          cssDir: 'src/<%= dirs.css %>',
          imagesDir: 'src/<%= dirs.img %>',
          relativeAssets: true,
          outputStyle: 'expanded'
        }
      },
      dist: {
        options: {
          sassDir: 'dist/<%= dirs.sass %>',
          cssDir: 'dist/<%= dirs.css %>',
          imagesDir: 'dist/<%= dirs.img %>',
          relativeAssets: true,
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    csscomb: {
      dev: {
        files: {
          'src/<%= dirs.css %>/main.css': ['src/<%= dirs.css %>/main.css'],
          'src/<%= dirs.css %>/main-ie.css': ['src/<%= dirs.css %>/main-ie.css']
        }
      },
      dist: {
        files: {
          'dist/<%= dirs.css %>/main.css': ['dist/<%= dirs.css %>/main.css'],
          'dist/<%= dirs.css %>/main-ie.css': ['dist/<%= dirs.css %>/main-ie.css']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: 'src/assets/sass/**/*',
        tasks: [
          'compass:dev',
          'csscomb:dev'
        ]
      },
      js: {
        files: [
          'src/<%= dirs.js %>/plugins.js',
          'src/<%= dirs.js %>/main.js',
        ],
        tasks: [
          'concat',
        ]
      },
      html: {
        files: [
          'src/*.html',
          'src/*/*.html'
        ]
      }
    },

    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**'],
            dest: 'dist/'
          }
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost', //change to hostname: '0.0.0.0' if you can mobile device.
          livereload: true,
          base: 'src',
          open: true
        }
      }
    }

  });

  grunt.registerTask('default', ['connect', 'watch']);

  grunt.registerTask('build', [
    'clean:dist',
    'copy',
    'compass:dist',
    'csscomb:dist',
    'clean:sprite',
    'concat',
    'uglify',
    'clean:release'
  ]);

};