'use strict';

module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: {
                src: [
                    'gruntfile.js',
                    'wwwroot/App/**/*.js'
                ],
                options: {
                    jshintrc: true,
                    ignores: ['node_modules/*.js', 'wwwroot/App/lib/**/*.js', 'wwwroot/App/Themes/**/*.js']
                }
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            all: {
                src: ['wwwroot/App/Modules/**/Css/*.css', 'wwwroot/Content/login.css']
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: [
                    {
                        expand: true,
                        src: ['**/Css/*.less', 'wwwroot/Content/*.less'],
                        dest: '',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            clientViews: {
                files: ['App/Modules/**/Views/*.html'],
                options: {
                    livereload: true
                }
            },
            clientJS: {
                files: ['App/*.js', 'App/Modules/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            clientLESS: {
                files: ['App/**/Css/*.less', 'Content/*.less'],
                tasks: ['less:development']
            },
            clientCSS: {
                files: ['App/**/Css/*.css', 'Content/*.css'],
                tasks: ['csslint'],
                options: {
                    livereload: true
                }
            }
        },
        shell: {
            start_web: {
                command: 'k web',
                options: {
                    stderr: false
                }
            }
        },
        concurrent: {
            tasks: ['watch', 'shell:start_web'],
            options: {
                logConcurrentOutput: true
            }
        },
        karma: {
            integration: {
                configFile: 'karma.conf.js'
            }
        }
    });

    // Load NPM tasks
    require('load-grunt-tasks')(grunt);

    // Making grunt default to force in order not to break the project.
    //grunt.option('force', true);

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'csslint', 'concurrent']);

    // Lint task(s).
    grunt.registerTask('lint', ['jshint', 'csslint']);

    grunt.registerTask('compile-less', ['less:development']);

    grunt.registerTask('test', ['karma:integration']);
};
