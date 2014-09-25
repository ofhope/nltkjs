/**
 * Created by alexis.hope on 26/03/14.
 */
module.exports = function(grunt) {
    //Configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json') ,

        // watch
        watch: {
            js: {
                files: ['src/*.js'],
                tasks: ['concat', 'uglify']
            }
        },

        // compress
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/<%= pkg.name %>.js', 'src/*.js'],
                dest: 'dist/<%= pkg.name %>.js',
            }
        },

        // ugly, exporting to min
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'
                }
            }
        },

        jsdoc: {
            dist: {
                src: ['src/*.js'],
                options: {
                    destination: 'docs'
                }
            }
        }

    });

    //Dependencies
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');

    //Tasks
    grunt.registerTask('default', ['watch']);

};
