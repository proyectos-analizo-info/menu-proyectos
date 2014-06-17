function verInfo() {
    if (isDefined("instrucciones"))
        desactivar(instrucciones, textoInstrucciones);
    if (isDefined("resultados"))
        desactivar(resultados, textoResultados);
    if (isDefined("procesado"))
        desactivar(procesado, textoProcesado);
    if (isDefined("info"))
        activar(info, textoInfo);
}
function verInstrucciones() {
    if (isDefined("info"))
        desactivar(info, textoInfo);
    if (isDefined("resultados"))
        desactivar(resultados, textoResultados);
    if (isDefined("procesado"))
        desactivar(procesado, textoProcesado);
    if (isDefined("instrucciones"))
        activar(instrucciones, textoInstrucciones);
}
function verResultados() {
    if (isDefined("info"))
        desactivar(info, textoInfo);
    if (isDefined("instrucciones"))
        desactivar(instrucciones, textoInstrucciones);
    if (isDefined("procesado"))
        desactivar(procesado, textoProcesado);
    if (isDefined("resultados"))
        activar(resultados, textoResultados);
}
function verProcesado() {
    if (isDefined("info"))
        desactivar(info, textoInfo);
    if (isDefined("instrucciones"))
        desactivar(instrucciones, textoInstrucciones);
    if (isDefined("resultados"))
        desactivar(resultados, textoResultados);
    if (isDefined("procesado"))
        activar(procesado, textoProcesado);
}
/* common */
function isDefined(id) {
    return document.getElementById(id) == undefined ? false : true;
}
function activar(menu, div) {
    div.style.display = "block";
    menu.style.backgroundColor = "#1A1A1A";
    style(menu);
}
function desactivar(menu, div) {
    div.style.display = "none";
    menu.style.backgroundColor = "initial";
    style(menu);
}
function style(e) {
    e.style.color = "#7DB903";
    e.style.padding = "3px";
}