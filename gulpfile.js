let gulp = require('gulp');
// Requires the gulp-sass plugin
let sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('./css/'));
});

//watch task
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['sass']);
});
