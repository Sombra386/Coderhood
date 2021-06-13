// Una tienda de ropa desea tener un programa que le permita calcular
// los aumentos a sus prendas, para eso se tienen los datos:
// preciosDePrenda (que ronda entre los 1500 y 3000 pesos)
// porcentajeDeAumento (que ronda entre el 25-100%)
// precioFinal (precioDePrenda con el aumento agregado)
// Implementar: *El programa debe informar en pantalla el precio final
// *El programa debe informar en pantalla "Precio excedido" cuando el precio final supere los $4000.

var precioDePrenda1 = 1500;
var porcentajeDeAumento1 = 25;
var precioFinal1 = (precioDePrenda1 * porcentajeDeAumento1)/100 + precioDePrenda1;
var precioDePrenda2 = 3000;
var porcentajeDeAumento2 = 100;
var precioFinal2 = (precioDePrenda2 * porcentajeDeAumento2)/100 + precioDePrenda2;

if ( precioFinal1 < 4000 ){
    console.log("El precio final de la primera prenda es:", precioFinal1);
}
else {
    console.log("Precio Excedido");
}

if ( precioFinal2 < 4000 ){
    console.log("El precio final de la segunda prenda es:", precioFinal2);
}
else {
    console.log("Precio Excedido");
}
