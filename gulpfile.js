// Include gulp
var gulp = require('gulp'),
jshint = require('gulp-jshint'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
watch = require('gulp-watch'),
clean = require('gulp-clean')
server = require('gulp-express'),
iconfont = require('gulp-iconfont'),
consolidate = require('gulp-consolidate');

var config = {
  build: 'build',
  source: 'source'
};

gulp.task('iconfont', function(){
  gulp.src([ config.source + '/assets/icons/*.svg' ])
    .pipe(iconfont({ fontName: 'dyson-icons' }))
    .on('codepoints', function(codepoints, options) {
      gulp.src(config.source + '/assets/styles/template/_icon-font-template.scss')
        .pipe(consolidate('lodash', {
          glyphs: codepoints,
          fontName: 'dyson-icons',
          fontPath: '/assets/styles/fonts/',
          className: 'dyson-icon'
        }))
        .pipe(rename('_generated-icon-font.scss'))
        .pipe(gulp.dest(config.source + '/assets/styles/'));
    })
    .pipe(gulp.dest(config.source + '/assets/styles/fonts'));
});

gulp.task('server', function () {
  // Start the server at the beginning of the task
  server.run({
      file: 'server.js'
  });

  // Restart the server when file changes
  // gulp.watch([config.source + '/assets/**/*.html'], server.notify);
  gulp.watch([
    config.source + '/assets/styles/**/*.scss',
    config.source + '/assets/scripts/**/*.scss'
  ], ['styles']);


  //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]);
  //Event object won't pass down to gulp.watch's callback if there's more than one of them.
  //So the correct way to use server.notify is as following:
  // gulp.watch([config.source + '/assets/styles/**/*.css'], function(){
  //     server.notify(event);
  // });
  // gulp.watch([config.source + '/assets/images/**/*'], server.notify);

});

gulp.task('clean', function () {
  return gulp.src([
      config.build
    ], { read: false })
    .pipe(clean({ force: true }));
});


// Copy templates over to build
// Replace build blocks with production resource references
gulp.task('scripts', function () {

  gulp.src([
    config.source + '/assets/scripts/**/*.js',
    config.source + '/assets/scripts/**/*.js.map'
  ])
  .pipe(gulp.dest(config.build + '/assets/scripts'));

});

// Lint Task
gulp.task('lint', function() {
  return gulp.src([
    config.source + '/assets/scripts/**/*.js',
    '!' + config.source + '/assets/scripts/vendor/**/*.js',
  ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('images', function() {
  return gulp.src(config.source + '/assets/images/**/*')
    .pipe(gulp.dest(config.build + '/assets/images'));
});

// Compile Our Sass
gulp.task('styles', function() {

  gulp.src(config.source + '/assets/styles/fonts/*')
    .pipe(gulp.dest(config.build + '/assets/styles/fonts'));

  return gulp.src(config.source + '/assets/styles/styles.scss')
    .pipe(sass())
    // .pipe(minifyCSS({ keepBreaks: true }))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest(config.source + '/assets/styles'))
    .pipe(gulp.dest(config.build + '/assets/styles'));
});

gulp.task('pages', function() {
  return gulp.src(config.source + '/**/*.html')
      .pipe(gulp.dest(config.build));
});

// gulp.task('watch', function() {

//   gulp.watch([
//     config.source + '/assets/styles/**/*.scss'
//   ], ['styles']);

//   gulp.watch([
//     config.source + '/assets/scripts/**/*.js'
//   ], ['scripts']);

// });

gulp.task('default', ['iconfont', 'lint', 'scripts', 'styles', 'images', 'pages']);
