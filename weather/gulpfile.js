var gulp = require('gulp');
// create new instance of BrowserSync
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', function() {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('watch', function(gulpCallback) {
  browserSync.init({
    // serve out of app/
    server: '.',
    // launch default browser as soon as server is up
    open: true
  }, function callback() {
    // (server is now up)

    // set up watch to reload browsers when source changes
    gulp.watch(['index.html', 'css/*'], browserSync.reload);

    // notify gulp that this task is done
    gulpCallback();
  });
});
