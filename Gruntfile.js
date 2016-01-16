module.exports = function(grunt) {
  // var rewrite = require('connect-modrewrite');

  grunt.initConfig({
    app: 'app',
    distFolder: 'dist',
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= distFolder %>/{,*/}*',
            '!<%= distFolder %>/.git{,*/}*'
          ]
        }]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        files: [
          { src: ['<%= app %>/scripts/*.js'], dest: '<%= distFolder %>/scripts/app.js' },
          { src: 'bower_components/**/dist/*.min.js', dest: '<%= distFolder %>/scripts/plugins.js' }
        ]
      }
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app %>/stylesheets/',
          src: ['*.scss'],
          dest: '<%= distFolder %>/stylesheets',
          ext: '.css'
        }]
      }
    },

    // If you encounter 'Fatal error: Cannot read property 'contents' of undefined'
    // Run: 'sudo npm cache clean && npm install grunt-contrib-imagemin' 
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app %>/images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: '<%= distFolder %>/images/'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= distFolder %>/stylesheets',
          src: ['*.css', '!*.min.css'],
          dest: '<%= distFolder %>/stylesheets',
          ext: '.min.css'
        }]
      }
    },

    copy: {
      dist: {
        files: [
          { src: '<%= app %>/index.html', dest: '<%= distFolder %>/index.html'},
          { src: '<%= app %>/404.html', dest: '<%= distFolder %>/404.html'},
        ]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      scripts: {
        files: [
            '<%= app %>/scripts/app.js'
        ],
        tasks: ['concat']
      },

      sass: {
        files: '<%= app %>/stylesheets/{,*/}*.{scss,sass}',
        tasks: ['sass', 'cssmin']
      },

      images: {
        files: '<%= app %>/images/*.{png,jpg,gif}',
        tasks: ['imagemin']
      },

      html: {
        files: '<%= app %>/*.html',
        tasks: ['copy']
      }
    },

    // connect: {
    //   server: {
    //   keepalive: true,
    //   hostname: 'localhost',
    //   middleware: function(connect, options, middlewares) {
    //       // the rules that shape our mod-rewrite behavior
    //       var rules = [
    //       '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html'
    //       ];

    //       // add rewrite as first item in the chain of middlewares
    //       middlewares.unshift(rewrite(rules));

    //       return middlewares;
    //     }
    //   }
    // }
  }); // The end of grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('build', ['sass']);
  // FYI, the order of these tasks is pretty important.
  // Don't put the 'clean' task at the end, like a n00b.
  // Yes, I did it once. Hence the comments.
  grunt.registerTask('default', ['clean', 'concat', 'sass', 'imagemin', 'cssmin', 'copy', 'watch']);
};