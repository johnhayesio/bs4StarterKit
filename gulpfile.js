const gulp = require('gulp'),
  images = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  rename = require('gulp-rename'),
  browserSync = require('browser-sync').create();


// Compiles all SASS files
gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(rename({
      basename: 'main',
      suffix: '.min',
    }))

    .pipe(gulp.dest('dist/css'));
});

// Minify all images
gulp.task('images', () => {
  return gulp.src('src/img/**/*')
    .pipe(images())
    .pipe(gulp.dest('dist/img'));
});

// Watch for changes
gulp.task('watch', () => {

  // Serve files
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: false,
    notify: false,
  });

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch(['dist/*.html', 'dist/css/*.css']).on('change', browserSync.reload);
});

// Use default task to launch Browsersync
gulp.task('default', ['sass', 'images', 'watch'], () => {});