// Gulpfile.js

"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    minifyCSS = require("gulp-minify-css"),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    del = require('del');

gulp.task("sass", function (cb) {
    gulp.src("src/scss/bootstrap-dialog.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(rename("bootstrap-dialog.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest("dist/css"))
        .pipe(notify({
            message: "SASS task completed."
        }));

    cb();
});

gulp.task("js", function (cb) {
    gulp.src(["src/js/bootstrap-dialog.js"])
        .pipe(gulp.dest("dist/js"))
        .pipe(rename("bootstrap-dialog.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(notify({
            message: "JS task completed."
        }));

    cb();
});

gulp.task("clean", function (cb) {
    del([
        "dist/css/**",
        "dist/js/**"
    ]);
    cb();
});

gulp.task("default", gulp.series("clean", gulp.parallel("js", "sass")));