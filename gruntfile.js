module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['assets/javascripts/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: [
          'assets/stylesheets/*.scss',
          'assets/stylesheets/**/*.scss',
          'assets/stylesheets/**/**/*.scss'
        ],
        tasks: ['sass:dist', 'autoprefixer'],
        options: {
          spawn: false,
        }
      }
    },

    concat: {
      dist: {
        src: [
          'assets/javascripts/carousel.js',
          'assets/javascripts/ceiling.js',
          'assets/javascripts/home.js',
          'assets/javascripts/menu.js',
          'assets/javascripts/parallax.js'
        ],
        dest: 'assets/javascripts/application.js'
      }
    },

    uglify: {
      build: {
        src: 'assets/javascripts/application.js',
        dest: 'assets/javascripts/application.min.js'
      }
    },

    sass: {
      options: {
        outputStyle: 'compressed',
        sourceMap: false
      },
      dist: {
        files: {
          'assets/stylesheets/application.min.css': 'assets/stylesheets/application.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        files: {
          'assets/stylesheets/application.min.css': 'assets/stylesheets/application.min.css'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['**/*.{png,jpg,svg}', '!min/**'],
          dest: 'assets/images/min/'
        }]
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'assets/javascripts/application.min.js',
            'assets/stylesheets/application.min.css',
            'views/*.pug',
            'views/**/*.pug'
          ]
        },
        options: {
          proxy: 'localhost:8080',
          watchTask: true
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['browserSync', 'concat', 'uglify', 'sass:dist', 'autoprefixer', 'imagemin', 'watch']);
};
