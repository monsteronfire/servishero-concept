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
      }
    },

    copy: {
      dist: {
        src: '<%= app %>/index.html',
        dest: '<%= distFolder %>/index.html'
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
    }
  }); // The end of grunt.initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['copy', 'concat', 'imagemin', 'cssmin', 'watch']);
};