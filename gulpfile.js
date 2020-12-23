const browserSync = require('browser-sync');
const gulp = require('gulp');

gulp.task('default', () => {
    browserSync.init({
        server: {
            base: './'
        }
    })
});