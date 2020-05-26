//Cargo 
require('gulp');
const {
    watch,
    src,
    dest,
    series,
    parallel //Para tareas que no dependan unas de otras
  } = require('gulp');
  const pleeease = require('gulp-pleeease');
  const sass = require('gulp-dart-scss');
  const processhtml = require('gulp-processhtml');
  const rename = require('gulp-rename');

//Declaro tareas

//Función para generar css desde scss
function generate_css() {
    return src('scss/bootstrap.scss') //Cogo el archivo base
      .pipe(sass()) //Lo proceso
        .pipe(pleeease()) //Minimizo
        .pipe(
          rename({
          basename: "styles", //Renombro
          //suffix: ".min",
          extname: ".css"
        }))
      .pipe(dest('css/')); //Lo coloco en la carpte destino
  }

  
//Función para generar css desde scss
function generate_css_min() {
  return src('scss/bootstrap.scss') //Cogo el archivo base
    .pipe(sass()) //Lo proceso
      .pipe(pleeease()) //Minimizo
      .pipe(
        rename({
        basename: "bootstrap", //Renombro
        suffix: ".min",
        extname: ".css"
      }))
    .pipe(dest('css/')); //Lo coloco en la carpte destino
}

  //Publico tareas

  exports.generate_css = generate_css;
  exports.generate_css_min = generate_css_min;
  exports.default = parallel(generate_css_min,generate_css);