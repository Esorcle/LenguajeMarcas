//He puesto interrogaciones en lo que no sé porque no funciona o me  ha surgido algo

//Cargo gulp
require('gulp');
const {
  watch,
  src,
  dest,
  series,
  parallel //Para tareas que no dependan unas de otras
} = require('gulp');
const sassdoc = require('sassdoc');
const pleeease = require('gulp-pleeease');
//const sass = require('gulp-dart-sass'); //Ejecuta sass directamente, compilar
const sass = require('gulp-dart-scss'); //Ejecuta sass directamente, compilar. Usar este plugin mejor

const rename = require('gulp-rename');
const processhtml = require('gulp-processhtml');
//const del = require('delete');


//Declaro tareas

                                      //Función para eliminar. No me funciona y no sé porqué ??
//function del(cb) {
//del('dist/*');
//cb();
//}

/*Función hecha por mi para documentar proyecto.        ¿¿No sé porqué no funciona??
function generate_docs() {
  return src('scss/Cv.scss')
    .pipe(sassdoc(dest('dist/docs')));
}
*/

//Función para documentar
function docs() {
  var doc_options = { //Se usa una variable, con 2 campos, 1 destino, y otro que te da más información mientras se realiza la función, aunque éste puede ser suprimible 
    dest : "dist/docs",
    verbose: true 
  }
  return src('scss/*.scss')
  .pipe(sassdoc(doc_options)); //si no coloco la var aquí me generará el sassdoc en una carpeta. 
                                    // ¿¿ Lo que no te pregunté es el contenido de docs generado....lo de que te haga carpetas y el index.html ??  Eso es la documentación??
}


//Función para generar css desde scss
function generate_css() {
  return src('scss/Cv.scss') //Cogo el archivo base
    .pipe(sass()) //Lo proceso
      .pipe(pleeease()) //Esto minimiza, pero no es necesario
      .pipe(
        rename({
        basename: "Cv_Blue", //Renombro
        //suffix: ".min",
        extname: ".css"
      }))
    .pipe(dest('dist/css/')); //Lo coloco en la carpte destino
}

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

/*Funcion para mover js.
function move_js() {
  return src('js/*')
  .pipe(dest('dist/js'))
}*/

//Función para mover las fuentes a otra carpeta
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
                  parallel(move_html,move_fonts));

//exports.default = function() {
 // watch('./scss/*.scss,build_css');
//}
                  

          //¿¿ Por cierto, yo uso fontawesome en el cv, pero lo uso mediante link en el html. ¿¿Cómo puedo ponerlo para poder usar un @import "fontawesome.scss" como partial en el cvBase?? 
          // ¿Y así podría quitar el link no??