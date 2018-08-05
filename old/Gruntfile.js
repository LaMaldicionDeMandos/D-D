/**
 * Created by boot on 01/08/2018.
 */
module.exports = function(grunt) {
  'use strict';

  let vendorDir = 'src/_public/vendors', nodeDir = 'node_modules';
  grunt.initConfig({
    clean: { vendors: [ vendorDir ]},
    copy: {
      main: {
        files: [
          {expand: true,
            src: [`${nodeDir}/bootstrap/dist/*/*.min.js`, `${nodeDir}/bootstrap/dist/*/*.min.css`],
            dest: `${vendorDir}/bootstrap`, flatten: true
          },
          {expand: true,
            src: [`${nodeDir}/vue/dist/*.min.js`],
            dest: `${vendorDir}/vue`, flatten: true
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('cp', ['copy']);

};