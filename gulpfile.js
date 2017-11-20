let gulp = require('gulp')
let sass = require('gulp-sass')
let browserSync = require('browser-sync')

gulp.task('sass', () => {
    return gulp.src('app/assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({
            stream:true
        }))
})

gulp.task('browserSync', () => {
    browserSync({
        server:{
            baseDir: 'app'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('app/assets/scss/**/*.scss', ['sass'])
    gulp.watch('app/*.html', browserSync.reload)
    gulp.watch('app/assets/js/**/*js', browserSync.reload)
})
