import gulp from 'gulp';
import babel from 'gulp-babel';
import connect from 'gulp-connect';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import gutil from 'gulp-util';
import watch from 'gulp-watch';
import runSequence from 'gulp-run-sequence';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync'
browserSync.create();

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'assets'
    },
  });
});


let htmlSources = ['./src/html/*.html'],
scssSources = ['./src/styles/*.scss'],
jsSources = ['./src/scripts/*.js'],
indexSources = ['./src/*.html']

gulp.task('es6', () => {
  return gulp.src('./src/scripts/*.js')
  .pipe(babel())
  .pipe(gulp.dest('babel'))
});

gulp.task('images', () =>{
  return gulp.src('src/img/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./assets/img'))
    .pipe(browserSync.stream())
})

//sass works
gulp.task('sass', () => {
  return gulp.src(scssSources)
  .pipe(sass({outputStyle: 'compressed'}))
    .on('error', gutil.log)
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(sourcemaps.write('./map s'))
  .pipe(gulp.dest('./assets/css'))
  .pipe(browserSync.stream())
});

gulp.task('html', () =>{
  return gulp.src(htmlSources)
  .pipe(gulp.dest('assets/html'))
  .pipe(browserSync.stream())
})

gulp.task('index', () =>{
  return gulp.src(indexSources)
  .pipe(gulp.dest('assets'))
  .pipe(browserSync.stream())
})

gulp.task('js', () => {
  return gulp.src('babel/*.js')
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest('assets/js'))
  .pipe(browserSync.stream())
});

gulp.task('jsEs6',(done)=>{
  runSequence('es6','js',() => {
  done();
  })
})


gulp.task('watch', ['browserSync', 'sass', 'jsEs6'], () =>{
  gulp.watch(jsSources,['jsEs6']);
  gulp.watch(scssSources,['sass']);
  gulp.watch(htmlSources, ['html']);
  gulp.watch(indexSources, ['index']);
})

gulp.task('connect',()=>{
  connect.server({
    root:'.',
    livereload:true
  });
});


//babel compile
gulp.task('default', ['html', 'index','jsEs6','images', 'sass','connect', 'watch']);


//functions but you may want to rebuild later with only the necessary dependancies
