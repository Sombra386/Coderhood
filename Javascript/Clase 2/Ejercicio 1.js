// Emanuel quiere cocinar galletiras y quiere un programa que lo ayude a saber que debe comprar
// y en caso de que cuenta con todos los ingredientes, informar que puede cocinar las galletas.
// La receta pide los siguientes ingredientes: 3 huevos, 1 barra de chocolate, 0.5 kilos de harina
// y 5 cucharadas de azucar.
// Los ingredientes que tiene Ema tienen que ser ariables al inicio del programa
// que sean faciles de editar.

// Ingredientes necesarios
var huevos = 3;
var barradechocolate = 1;
var harina = 1/2;
var azucar = 5;

if ( huevos < 3 ){
    console.log("comprar huevos");
}
else {
    console.log("ya tienes huevos");
}
if ( barradechocolate < 1){
    console.log("comprar barra de chocolate");
}
else {
    console.log("ya tienes la barra de chocolate");
}
if ( harina < 1/2 ){
    console.log("comprar harina");
}
else {
    console.log("ya tienes harina");
}
if ( azucar < 5 ){
    console.log("comprar azucar");
}
else {
    console.log("ya tienes azucar");
}
if ( huevos == 3 && barradechocolate == 1 && harina == 1/2 && azucar == 5){
    console.log("ya puedes hacer galletas!");
}
else {
    console.log("debes comprar los ingredientes faltantes");
}