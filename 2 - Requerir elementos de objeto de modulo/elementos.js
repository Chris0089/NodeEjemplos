const MSJ_NO_ELEMENTOS = "No hay elementos en el arreglo";
const TAMANO_TABLA = 10;
const TABLA_DE_MULTIPLICAR = 8;

var calcularTabla = function(numero_multiplicador){
    var i;
    var resultado = new Array();
    for(i=0; i<=TAMANO_TABLA; i++){
        resultado.push(i*numero_multiplicador)
    }
    
    return resultado;
}
var imprimirTabla = function(arreglo_a_imprimir){
    var i;
    if(arreglo_a_imprimir.length>0){
        for(i=0; i<arreglo_a_imprimir.length; i++){
            console.log(arreglo_a_imprimir[i]);
        }
    }else{
        console.log(MSJ_NO_ELEMENTOS);
    }
    
}
exports.calculo = calcularTabla;
exports.imprimir = imprimirTabla;
exports.tabla = TABLA_DE_MULTIPLICAR;