const {src,dest,watch,series,parallel}=require('gulp');

const htmlmin =require('gulp-htmlmin');
function htmlTask(){
  return src("*.html").pipe(htmlmin({collapseWhitespace:true,removeComments:true})).pipe(dest("dist"))
}
exports.html=htmlTask

var concat =require('gulp-concat');
const GulpCleanCss = require('gulp-clean-css');
function cssTask(){
  return src("css/*.css").pipe(concat("style.min.css")).pipe(GulpCleanCss()).pipe(dest('dist/assets/css'))

}
exports.css=cssTask

// image

const imagemin = require('gulp-imagemin');
function imgMinify() {
    return src('images/*').pipe(imagemin()).pipe(dest('dist/images'));
}
exports.img = imgMinify

function watchTask(){
  watch("*.html",htmlTask)
  watch("css/*.css",cssTask)
  watch("images/*",imagemin)

}
exports.default=series(parallel(htmlTask,cssTask,imgMinify),watchTask)