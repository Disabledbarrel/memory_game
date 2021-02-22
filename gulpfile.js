// Installations
const { src, dest, watch, series, parallel } = require ("gulp"); // Methods used
const concat = require ("gulp-concat");
const uglify = require ("gulp-uglify-es").default;
const browserSync = require('browser-sync').create();
const del = require('del');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

// Paths - an object with paths used
const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    imgPath: "src/img/*", // includes all file types
    sassPath: "src/scss/*.scss"
}

// Task: copy HTMLfiles
const copyHTML = () => {
    return src(files.htmlPath)
        .pipe(dest('pub'))
        .pipe(browserSync.stream());
}

// Task: concate and minify js-files
const jsTask = () => {
    return src(files.jsPath)
        .pipe(concat('main.js')) // concat all js files to one file
        .pipe(uglify()) // minifying the js file
        .pipe(dest('pub/js'))
        .pipe(browserSync.stream());
}

// Task: Sass compiler
const sassTask = () => {
    return src(files.sassPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('pub/css'))
        .pipe(browserSync.stream());
}

// Task: Copy images
const copyImg = () => {
    return src(files.imgPath)
        .pipe(dest('pub/img'))
        .pipe(browserSync.stream());
}

// Task: wipe pub directory
const delTask = () => {
    return del(['pub/**']);
}

// Task: Watcher for automatization
const watchTask = () => {
    browserSync.init({
        server: {
            baseDir: 'pub/'
        }
    });

    watch([files.htmlPath, files.jsPath, files.sassPath, files.imgPath],
        parallel(copyHTML, jsTask, sassTask, copyImg)
    ).on('change', browserSync.reload);
}

// Export tasks in one default task
exports.default = series(
    delTask,
    parallel(copyHTML, jsTask, sassTask, copyImg),
    watchTask
);