module.exports = function(grunt) {
  grunt.initConfig({
    app: 'app',
    distFolder: 'dist',
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= app %>/scripts/*.js'],
        dest: '<%= distFolder %>/scripts/app.js'
      }
    },

    sass: {
      dist: {
        files: {
          '<%= distFolder %>/stylesheets/app.css': '<%= app %>/stylesheets/app.scss'
        }
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
        files: '<%= app %>/stylesheets/**/*.scss',
        tasks: ['sass']
      },

      images: {
        files: '<%= app %>/images',
        tasks: ['imagemin']
      },

      html: {
        files: '<%= app %>/*.html',
        tasks: ['copy']
      }
    }
  }); // The end of grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['clean', 'concat', 'sass', 'imagemin', 'cssmin', 'copy', 'watch']);
};