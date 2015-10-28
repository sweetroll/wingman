module.exports = {
    dist: {
        dir: 'dist',
        stylesDir: 'dist/styles',
        scriptsDir: 'dist/scripts',
        scriptsFile: 'bundle.js'
    },
    src: {
        dir: 'src/',
        stylesDir: 'src/styles',
        stylesFile: 'app.scss',
        scriptsDir: 'src/scripts',
        scriptsFile: 'app.js'
    },
    // Styles
    sass: {
        outputStyle: 'expanded'
    },
    autoprefixer: {},
    minifyCss: {
        enabled: false
    },
    plumber: {},
    uglify: {
        enabled: false
    },
    util: {}
};
