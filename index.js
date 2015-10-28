'use strict';

let gulp = require('gulp');
let extend = require('node.extend');
let through = require('through2');
let defaultConfig = require('./config');

module.exports = function(gulp, userConfig) {
    let config = extend(true, {}, defaultConfig, userConfig);

    let plugins = require('gulp-load-plugins')({
        lazy: false
    });

    let isPluginEnabled = function(name) {
        return config[name] && config[name].enabled !== false;
    };

    for (let plugin in plugins) {
        if (plugins.hasOwnProperty(plugin)) {
            if (!isPluginEnabled(plugin)) {
                plugins[plugin] = through.obj;
            }
        }
    }

    let getTask = function(task) {
        return require('./tasks/' + task)(plugins, config);
    };

    gulp.task('scripts', getTask('scripts'));
    gulp.task('styles', getTask('styles'));

    gulp.task('default', ['scripts', 'styles'], function () {
        gulp.watch('src/scripts/**/*.js', ['scripts']);
        gulp.watch('src/styles/**/*.{sass,scss}', ['styles']);
    });
};
