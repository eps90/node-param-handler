module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'progress'
                },
                src: ['dist/test/**/*.js']
            }
        }
    });

    grunt.registerTask('test', ['mochaTest:test']);
};
