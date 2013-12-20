module.exports = function(grunt) {
    var buildConfig = grunt.file.readJSON('build.json');

    // Concat config
    var concatConfig = {
        options: {
            seperator: ';'
        }
    };
    for(widget in buildConfig) {
        concatConfig[widget] = {
            files: buildConfig[widget].files
        };
    }

    // qiwoobuild config
    buildConfig.options = {
        buildpath: 'build/qiwoo/',
        root: 'module/'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 生成外链版
        concat: concatConfig,

        // 生成模块加载版
        qiwoobuild: buildConfig,

        module_transfer: buildConfig
        
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-qiwoobuild');
}
