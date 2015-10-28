'use strict';

let gulp = require('gulp');
let babelify = require('babelify');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let path = require('path');
let buffer = require('vinyl-buffer');

module.exports = function ($, options) {
    return function() {
        browserify(path.join(options.src.scriptsDir, options.src.scriptsFile))
            .transform(babelify)
            .bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source(options.dist.scriptsFile))
            .pipe(buffer())
            .pipe($.uglify(options.uglify))
            .pipe(gulp.dest(options.dist.scriptsDir));
    };
};
