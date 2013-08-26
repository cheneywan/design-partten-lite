'use strict'

module.exports = (grunt)->
 
# Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      compile:
        expand: true
        cwd: 'src'
        src: '*.coffee'
        dest: 'dest'
        ext: '.js'

    watch:
      coffee:
        files: '**/*.coffee'
        tasks: ['coffee']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'


  grunt.registerTask 'default', ['coffee', 'watch']

