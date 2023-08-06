var gulp = require('gulp');
var browserSync = require('browser-sync');
const server = browserSync.create();
var pug = require('gulp-pug');

const imagemin = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const mozjpeg = require('imagemin-mozjpeg');

const changed = require('gulp-changed');
const cache = require('gulp-cached');
const pugInheritance = require('gulp-pug-inheritance');
const gulpif = require('gulp-if');

const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackDevConfig = require("./webpack.dev.config");
const webpackProdConfig = require("./webpack.prod.config");

const sass = require('gulp-sass')(require('sass'));
const fibers = require('fibers');
const postcss = require('gulp-postcss');
const sassGlob = require("gulp-sass-glob");

const del = require('del');

const isProd = process.env.NODE_ENV === "production" ? true : false;
const isDev = process.env.NODE_ENV === "development" ? true : false;

// imagemin
gulp.task("imagemin", () => {
  return gulp.src("./source/img/**/*")
    .pipe(imagemin([
      pngquant({
        quality: [.85, .9],
        speed: 1
      }),
      mozjpeg({
        quality: 95,
        progressive: true
      }),
      imagemin.gifsicle({ interlaced: true }),
      imagemin.svgo({ plugins: [{ removeViewBox: true }] })
    ]))
    .pipe(gulp.dest("./public/img"))
});

// webpack
gulp.task('webpack', function () {
  return webpackStream(webpackDevConfig, webpack)
    .pipe(gulp.dest("public/"));
});
gulp.task('webpack:prod', function () {
  return webpackStream(webpackProdConfig, webpack)
    .pipe(gulp.dest("public/"));
});

gulp.task('js-watch', function () {
  gulp.watch('./source/js/**/*.js', gulp.task('webpack'));
});

// server
gulp.task('serve', function (done) {
  server.init({
    server: {
      baseDir: 'public'
    },
    port: 3000,
    notify: false
  });
  done();
});

gulp.task("copy:image", function () {
  return gulp.src("./source/img/**/*.*").pipe(gulp.dest("./public/img"));
});

gulp.task("copy:statics", function () {
  return gulp.src("./source/statics/**/*.*").pipe(gulp.dest("./public"));
});

gulp.task('image-watch', function () {
  gulp.watch('./source/img/**/*.*', gulp.task('copy:image'));
});

// pug
gulp.task('pug', function () {
  return gulp.src(['./source/pug/**/*.pug', '!./source/pug/layouts/*', '!./source/pug/partial/**/*'])
    .pipe(changed('./public/', { extension: ".html" }))
    .pipe(gulpif(global.isWatching, cache('pug')))
    .pipe(pugInheritance({ basedir: './source/pug/' }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(
      gulp.dest('./public/')
    );

});

// pug
gulp.task('pug:build', function () {
  return gulp.src(['./source/pug/**/*.pug', '!./source/pug/layouts/*.pug', '!./source/pug/partial/**/*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public/'));
});

gulp.task("pug-watch", function () {
  return gulp.watch("./source/pug/**/*.pug", gulp.task("pug"));
});

gulp.task("watch", function () {
  return gulp.watch("./public/**/*", gulp.task("reload"));
});

gulp.task('reload', function (done) {
  server.reload();
  done();
});

// copy
gulp.task("copy", () => {
  return gulp.src("./public/**/*").pipe(gulp.dest("./dist"))
});

gulp.task('sass', () => {
  return gulp.src('./source/sass/*.scss')
    .pipe(sassGlob())
    .pipe(sass({
      fiber: fibers,
      style: 'expanded'
    }).on('error', sass.logError))
    .pipe(postcss([
      require('autoprefixer')({
        grid: "autoplace",
        cascade: false
      }),
      require("postcss-sorting"),
      require("csswring"),
      require('css-mqpacker')
    ]))
    .pipe(gulp.dest('./public//css/'))
});

gulp.task('sass-watch', () => {
  gulp.watch('./source/sass/**/*.scss', gulp.task('sass'));
});

gulp.task('clean', function (done) {
  del(['public/**', '!public/system/**', '!public/index.php', '!public/.htaccess', '!public/LandingPage']);
  done();
});
gulp.task('default', gulp.parallel("pug-watch", "sass-watch", "js-watch", "copy:image", "copy:statics", "image-watch", 'serve', "watch"));
