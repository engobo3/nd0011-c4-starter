import gulp from 'gulp';
import shell from 'gulp-shell';
gulp.task('parcel', shell.task('parcel index.html --dist-dir dist'));
gulp.task('default', gulp.series('parcel'));
gulp.task('test', shell.task('mocha test/shuffle.js'));
gulp.task('cypress', shell.task('npx cypress run'));
