module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.config.init({
    config: {
      app: 'app',
      dist: 'dist',
      port: 3000,
      liveP: 35729
    },
    clean: {
      dist: '<%= config.dist %>',
      tmp: '.tmp'
    },
    useminPrepare: {
        html: '<%= config.app %>/index.html',
        options: {
          dest: '<%= config.dist %>'
        }
    },
    usemin:{
      html:[
        '<%= config.dist %>/index.html'
      ]
    },
    copy:{
      html: {
        src: '<%= config.app %>/index.html',
        dest: '<%= config.dist %>/index.html'
      }
    },
    connect: {
      options: {
        port: '<%= config.port %>',
        hostname: '0.0.0.0',
        livereload: '<%= config.liveP %>',
        open: true,
      },
      dev: {
        options: {
          base: '<%= config.app %>'
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>'
        }
      }
    },
    watch: {
      options: {
        livereload: '<%= config.liveP %>'
      },
      dev: {
        files: '<%= config.app %>/*'
      },
      dist: {
        files: '<%= config.app %>/*',
        tasks: 'build'
      }
    }
  });

  grunt.registerTask('default',[
    'connect:dev',
    'watch:dev'
  ]);

  grunt.registerTask('serve',[
    'build',
    'connect:dist',
    'watch:dist'
  ]);

  grunt.registerTask('build',[
    'clean:dist',
    'copy:html',
    'useminPrepare',
    'concat',
    'uglify',
    'cssmin',
    'usemin',
    'clean:tmp'
  ]);
}