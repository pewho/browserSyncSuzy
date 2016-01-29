var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var gulpif      = require('gulp-if');
var gulpautoprefix = require('gulp-autoprefixer');
var reload      = browserSync.reload;

var src = {
    scss: 'app/scss/*.scss',
    css:  'app/css',
    html: 'app/*.html'
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync({
        server: "./app"
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.init()))
        .pipe(
            sass({
                includePaths: ['node_modules/susy/sass', 'app/scss']
                }
            ).on('error', sass.logError)
        )
        .pipe(gulpautoprefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.write('maps')))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['serve']);