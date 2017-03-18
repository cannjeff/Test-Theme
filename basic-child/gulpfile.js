var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('sass', function () {
  return gulp.src('./src/*.scss')
    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', sass.logError) )
    .pipe( postcss([ autoprefixer, cssnano({ discardComments:false }) ]) )
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('./') );
});

gulp.task('default', [ 'sass' ]);
