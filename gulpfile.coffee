gulp    = require 'gulp'
jshint  = require 'gulp-jshint'
stylish = require 'jshint-stylish'

gulp.task 'hint', () ->
    return gulp.src './index.js'
    .pipe jshint()
    .pipe jshint.reporter(stylish)

gulp.task 'default', ['hint']
