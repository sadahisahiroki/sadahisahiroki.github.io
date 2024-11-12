import gulp from 'gulp';
import pug from 'gulp-pug';
import changed from 'gulp-changed';
import cached from 'gulp-cached';
import remember from 'gulp-remember';
import pugLinter from 'gulp-pug-linter';
const { parallel } = gulp;
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import gifsicle from 'imagemin-gifsicle';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { deleteAsync } from 'del';

const pugFiles = [
  './source/pug/**/*.pug',
  '!./source/pug/{layouts,partial}/**/*.pug'
];

const sassCompiler = gulpSass(sass);

// webpack設定ファイルのインポート
import webpackDevConfig from './webpack.dev.config.js';
import webpackProdConfig from './webpack.prod.config.js';

const server = browserSync.create();

// クリーンタスク
export const clean = () => deleteAsync(['public', 'dist']);

// 画像最適化タスク
export const optimizeImages = () => {
  return gulp.src('./source/img/**/*')
    .pipe(imagemin([
      gifsicle(),
      mozjpeg({
        quality: 95,
        progressive: true
      }),
      optipng({
        optimizationLevel: 5
      }),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          }
        ]
      })
    ]))
    .pipe(gulp.dest('./public/img'));
};

// Webpackタスク
export const buildJs = () => {
  return gulp.src('./source/js/common.js')
    .pipe(webpackStream(webpackDevConfig, webpack))
    .pipe(gulp.dest('public/'));
};

export const buildJsProd = () => {
  return gulp.src('./source/js/common.js')
    .pipe(webpackStream(webpackProdConfig, webpack))
    .pipe(gulp.dest('public/'));
};

// Pugタスク
const compilePug = () => {
  return gulp.src(pugFiles)
    .pipe(changed('./public/', { extension: '.html' }))
    .pipe(cached('pug'))
    .pipe(pugLinter({ reporter: 'default' }))
    .pipe(pug({ pretty: true }))
    .pipe(remember('pug'))
    .pipe(gulp.dest('./public/'));
};

export const buildPug = parallel(compilePug);
// Sassタスク
export const compileSass = () => {
  return gulp.src('./source/sass/*.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest('./public/css'));
};

// 静的ファイルのコピータスク
export const copyStatics = () => {
  return gulp.src('./source/statics/**/*')
    .pipe(gulp.dest('./public/'));
};

// サーバー起動タスク
export const serve = (done) => {
  server.init({
    server: { baseDir: 'public' },
    port: 3000,
    notify: false
  });
  done();
};

// リロードタスク
export const reload = (done) => {
  server.reload();
  done();
};

// 監視タスク
export const watch = () => {
  gulp.watch('./source/js/**/*.js', gulp.series(buildJs, reload));
  gulp.watch('./source/pug/**/*.pug', gulp.series(compilePug, reload));
  gulp.watch('./source/sass/**/*.scss', gulp.series(compileSass, reload));
  gulp.watch('./source/img/**/*', gulp.series(optimizeImages, reload));
  gulp.watch('./source/statics/**/*', gulp.series(copyStatics, reload));
};

// デフォルトタスク
export default gulp.series(
  clean,
  gulp.parallel(optimizeImages, buildJs, compilePug, compileSass, copyStatics),
  serve,
  watch
);

// ビルドタスク
export const build = gulp.series(
  clean,
  gulp.parallel(optimizeImages, buildJsProd, compilePug, compileSass, copyStatics)
);

// コピータスク（build:dist用）
export const copy = () => {
  return gulp.src('./public/**/*')
    .pipe(gulp.dest('./dist'));
};
