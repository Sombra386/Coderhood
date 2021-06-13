// Sea una variable numerica entera y positiva "limite":
// Recorrer desde 0 hasta limite
// Imprimir al final del programa la cantidad de numeros impares
// Imprimir al final del programa la cantidad de numeros menores de limite/2

var limite = 14;

for (var i = 0; i <= limite; i++){
    if(i%2 != 0){
        console.log(i);
    }
}
for (var i = 0; i <= limite; i++){
    if(i < limite/2)
    console.log("numeros menores:", i)
}