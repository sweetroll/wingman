'use strict';

let gulp = require('gulp');
let path = require('path');

module.exports = function($, options) {
    return function() {
        gulp.src(path.join(options.src.stylesDir, options.src.stylesFile))
            .pipe($.plumber(options.plumber))
            .pipe($.sass(options.sass))
            .pipe($.autoprefixer(options.autoprefixer))
            .pipe($.minifyCss(options.minifyCss))
            .pipe(gulp.dest(options.dist.stylesDir));
    };
};
