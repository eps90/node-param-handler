module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');

    grunt.initConfig({
        ts: {
            test: {
                src: ['lib/**/*.ts', 'test/**/*.ts'],
                outDir: 'build',
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    comments: false,
                    sourceMap: false
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
                src: ['build/test/**/*.js']
            }
        },
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            test: {
                src: ["test/**/*.ts"]
            },
            lib: {
                src: ['lib/**/*.ts']
            }
        }
    });

    grunt.registerTask('test', ['clean:test', 'tslint:test', 'tslint:lib', 'ts:test', 'mochaTest:test']);
};
