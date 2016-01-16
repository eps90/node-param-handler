module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            test: {
                src: ['lib/**/*.ts', 'test/**/*.ts'],
                outDir: 'build',
                options: {
                    target: 'es5',
                    module: 'commonjs'
                }
            }
        },
        clean: {
            test: {
                src: ['build']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'progress'
                },
                src: ['dist/test/**/*.js']
            }
        }
    });

    grunt.registerTask('test', ['clean:test', 'ts:test', 'mochaTest:test']);
};
