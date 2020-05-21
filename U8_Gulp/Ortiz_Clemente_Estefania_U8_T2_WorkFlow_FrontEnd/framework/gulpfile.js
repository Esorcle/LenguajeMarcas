//Cargo gulp
require('gulp');
const {
  watch,
  src,
  dest,
  series,
  parallel
} = require('gulp');
const sassdoc = require('sassdoc');
const pleeease = require('gulp-pleeease');
const sass = require('gulp-dart-sass'); 
const rename = require('gulp-rename');
const processhtml = require('gulp-processhtml');
//const del = require('delete');


//Declaro tareas

//Función para eliminar 
//function del(cb) {
//del('dist/*');
//cb();
//}

/*Función para documentar proyecto. Sassdoc
function generate_docs() {
  return src('scss/Cv.scss')
    .pipe(sassdoc(dest('dist/docs', true)));
}
*/

//Otra función para documentar. Es la que pone JD, pero no se como funciona
function docs() {
  var doc_options = { //¿Porqué usas var?
    dest : "dist/docs",
    verbose: true //¿Esto qué es?
  }
  return src('scss/*.scss')
  .pipe(sassdoc(doc_options));
}


//Función para generar css desde scss
function generate_css() {
  return src('scss/Cv.scss') //Cogo el archivo base
    .pipe(sass()) //Lo proceso
      .pipe(pleeease()) //¿Esto para qué sirve?
      .pipe(
        rename({
        basename: "Cv_Blue", //Renombro
        //suffix: ".min",
        extname: ".css"
      }))
    .pipe(dest('dist/css/')); //Lo coloco en la carpte destino
}

//Función para generar css desde scss copiado de gulp. No sé si sirve
//gulp.task('sass', function () {
// return gulp.src('./sass/**/*.scss')
//  .pipe(sass().on('error', sass.logError))
//  .pipe(gulp.dest('./css'));
//});

//Observa archivos y realiza una acción cuando se modifica un archivo
//gulp.task('sass:watch', function () {
//gulp.watch('./sass/**/*.scss', ['sass']);
//});


//Función para mover imgénes a otra carpeta
function move_img() {
  return src('img/*').pipe(dest('dist/img/'));
}

//Función para mover html a otra carpeta
function move_html() {
  return src('Cv.html')
  .pipe(processhtml()) //Cambia la ruta del html al css
  .pipe(dest('dist'));
}

//Funcion para mover js. No tengo nada pero me generará la carpeta js
function move_js() {
  return src('js/*')
  .pipe(dest('dist/js'))
}

//Función para mover las fuentes
function move_fonts(){
  return src('fonts/*')
  .pipe(dest('dist/fonts'))
}

//Publico tareas
//exports.del = del;
exports.generate_css = generate_css;
//exports.generate_docs = generate_docs;
exports.docs = docs;
exports.move_img = move_img;
exports.move_fonts = move_fonts;
exports.move_html = move_html;
exports.move_js = move_js;
exports.default = series(
                  parallel(docs, generate_css, move_img),
                  parallel(move_html,move_fonts, move_js));

//exports.default = function() {
 // watch('./scss/*.scss,build_css');
//}
                  