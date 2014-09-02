'use strict';

process.env.PHANTOMJS_EXECUTABLE = process.env.PHANTOMJS_EXECUTABLE || '/usr/local/opt/nvm/v0.10.31/bin/phantomjs';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jsdoc : {
      dist : {
        src: ['lib/*.js', 'test/*.js'],
        options: {
          destination: 'doc'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'server.js', 'test/api/*.js','app/js/**/*.js']
    },
    clean: ['public'],
    copy: {
      all: {
        expand: true,
        cwd: 'app/',
        src: ['css/**/*.css', '*.html', '/views/**/*.html', '/images/**/*', '!Gruntfile.js'],
        dest: 'public/',
        flatten: false,
        filter: 'isFile'
      },
    },
    browserify: {
      all: {
        src: 'app/js/**/*.js',
        dest: 'public/js/bundle.js'
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },

    express: {
      dev: {
        options: {
          background: true,
          script: 'server.js'
        }
      },
      prod: {
        options: {
          script: 'server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js', 'app/js/**/*.js', 'app/bower_components/**/*.js', 'test/**/*.js', 'app/**/*.html'],
        tasks: ['build']
      },
      express: {
          files: ['server.js', 'routes/*.js', 'models/*.js'],
          tasks: ['server'],
          options: {
            spawn: false
          }
      }
    },
    shell: {
      mongodb: {
        command: 'mongod --dbpath ./db',
        options: {
          async: true,
          stdout: false,
          stderr: true,
          failOnError: true,
          execOptions: {
            cwd: '.'
          }
        }
      }
    },

  });

  grunt.registerTask('serve', [ 'build', 'express:dev','watch' ]);
  grunt.registerTask('server', 'serve');
  grunt.reuisterTask('test','simplemocha');
  grunt.registerTask('default', ['jshint','build', 'test', 'jsdoc']);
  grunt.registerTask('build',['clean', 'browserify', 'copy']);
};
