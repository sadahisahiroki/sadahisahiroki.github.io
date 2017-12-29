const gulp = require('gulp');
const sync = require('browser-sync');
const spritesmith = require('gulp.spritesmith');
const pug = require('gulp-pug');
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rev  = require('gulp-rev');
const revReplace = require("gulp-rev-replace");
const imagemin = require("gulp-imagemin");
const sitemap = require('gulp-sitemap');
// const connectPhp = require("gulp-connect-php");

// php build in server
// gulp.task('connectPhp', function() {
//   return connectPhp.server({
//     base: 'public/',
//     port: 8000
//   });
// });

// gulp.task('server', ['connectPhp'], function() {
//   return sync({
//     proxy: 'localhost:8000',
//     port: 8000,
//     open: 'external'
//   });
// });

// imagemin
gulp.task("imagemin", () => {
  gulp.src("./source/img/**/*")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 7}),
      imagemin.svgo({plugins: [{removeViewBox: true}]})
    ]))
    .pipe(gulp.dest("./source/img"))
});

// imagemin
gulp.task("copy:image", () => {
  gulp.src("./source/img/**/*").pipe(gulp.dest("./public/img"))
});

// sprite
gulp.task('sprite', function() {
  var spriteData;
  spriteData = gulp.src('./source/img/sprite/_source/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '/img/sprite/sprite.png',
    cssFormat: 'scss',
    cssVarMap: function(sprite) {
      sprite.name = sprite.name;
    }
  }));
  spriteData.img.pipe(gulp.dest('./source/img/sprite'));
  return spriteData.css.pipe(gulp.dest('./source/sass'));
});

// server
gulp.task('server', function() {
  return sync({
    server: {
      baseDir: './public'
    },
    port: 3000
  });
});

// minify:js
gulp.task("minify:js", function() {
  return gulp.src("./public/js/*.js").pipe(uglify({
    preserveComments: "license"
  })).pipe(gulp.dest("./public/js"));
});

// concat
gulp.task("concat:js", function() {
  return gulp.src("source/js/libs/*.js").pipe(concat("libs.js")).pipe(gulp.dest("./public/js"));
});

// pug
gulp.task('pug', function() {
  return gulp.src(['./source/pug/**/*.pug', '!./source/pug/layouts/*.pug', '!./source/pug/partial/**/*.pug']).pipe(pug({
    pretty: true
  })).pipe(gulp.dest('./public/'));
});

gulp.task("pug-watch", function() {
  return gulp.watch("./source/pug/**/*.pug", ["pug"]);
});

gulp.task('reload', function() {
  return sync.reload();
});

gulp.task("rev", () => {
  gulp.src("./public/**/*.+(js|css|png|gif|jpg|jpeg|svg|woff)")
    .pipe(rev())
    .pipe(gulp.dest("./public"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("./public"));
});

gulp.task("rev:replace", () => {
  const manifest = gulp.src("./public/rev-manifest.json");
  gulp.src("./public/**/*.+(html|css|js)")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest("./public/"))
});

// sitemap
gulp.task('sitemap', function () {
  gulp.src('public/**/*.(html|php)', {
        read: false
    })
    .pipe(sitemap({
        siteUrl: 'http://www.example.com/',
        priority: 1.0
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['server', "pug", "pug-watch", "copy:image"], function() {
  return gulp.watch('public/**/*', ['reload']);
});
