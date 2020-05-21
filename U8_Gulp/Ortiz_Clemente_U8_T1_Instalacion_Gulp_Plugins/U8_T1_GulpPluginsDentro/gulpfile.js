//Cargo gulp
require("gulp");
const {src,dest, serie,parallel} = require("gulp");  

//Declaro tareas
function inicio(cb) {
    console.log("Generando proyecto Cv");
    cb();
}

function final(cb) {
    console.log("Proyecto Cv generado");
    cb();
}

function pipelinecss () {
    return src("css/Cv_Blue.css").pipe(dest("dist/"));
};

function pipelinehtml () {
    return src("Cv3.html").pipe(dest("dist/"));
};


//Publico tareas
exports.inicio = inicio;
exports.final = final;
exports.default = parallel(pipelinecss, pipelinehtml);

