var gulp = require('gulp');
var browserSync = require('browser-sync');
const server = browserSync.create();
// var spritesmith = require('gulp.spritesmith');
var pug = require('gulp-pug');

const changed = require('gulp-changed');
const cache = require('gulp-cached');
const pugInheritance = require('gulp-pug-inheritance');
const gulpif = require('gulp-if');

const webpackStream = require("webpack-stream");
const webpack = require("webpack");

// webpackの設定ファイルの読み込み
const webpackDevConfig = require("./webpack.dev");
const webpackProdConfig = require("./webpack.prod");

// const php = require("gulp-connect-php")

// webpack
gulp.task('webpack', function() {
  return webpackStream(webpackDevConfig, webpack)
    .pipe(gulp.dest("./docs/"));
});
gulp.task('webpack:prod', function() {
  return webpackStream(webpackProdConfig, webpack)
    .pipe(gulp.dest("./docs/"));
});

gulp.task('watch:js', function(){
    gulp.watch('./source/js/**/*.js', gulp.task('webpack'));
});

// // sprite
// gulp.task('sprite', function() {
//   var spriteData;
//   spriteData = gulp.src('./source/img/sprite/_source/*.png').pipe(spritesmith({
//     imgName: 'sprite.png',
//     cssName: '_sprite.scss',
//     imgPath: '/img/sprite/sprite.png',
//     cssFormat: 'scss',
//     cssVarMap: function(sprite) {
//       sprite.name = sprite.name;
//     }
//   }));
//   spriteData.img.pipe(gulp.dest('./source/img/sprite'));
//   return spriteData.css.pipe(gulp.dest('./source/sass'));
// });

// server
gulp.task('serve', function(done) {
  return server.init({
    server: "./docs",
    notify: false
  });
  done();
});

// pug
gulp.task('pug', function() {
  return gulp.src(['./source/pug/**/*.pug', '!./source/pug/layouts/*.pug', '!./source/pug/partial/**/*.pug'])
    .pipe(changed('./', {extension: ".html"}))
    .pipe(gulpif(global.isWatching, cache('pug')))
    .pipe(pugInheritance({ basedir: './source/pug/'}))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
});

// pug
gulp.task('pug:build', function() {
  return gulp.src(['./source/pug/**/*.pug', '!./source/pug/layouts/*.pug', '!./source/pug/partial/**/*.pug'])
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
});

gulp.task("pug-watch", function() {
  return gulp.watch("./source/pug/**/*.pug", gulp.task("pug"));
});

gulp.task("watch", function() {
  return gulp.watch("./source/**/*", gulp.task("reload"));
});

gulp.task('reload', function(done) {
  server.reload();
  done();
});

gulp.task('default', gulp.parallel("pug-watch", 'serve', "watch"));
