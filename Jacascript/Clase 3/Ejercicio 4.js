// Sea una variable numerica entera y positiva "limite"
// Recorrer desde 0 hasta "limite"
// Imprimir tantos terminos de la secuencia como repeticiones de 0 hasta limite (secuencia de Fibonacci)

let limite = 10;
let a = 0;
let b = 1;
let c = 1;
console.log(a,b); // para mostrar los 2 primeros numeros
for(i = 0; i <= limite; i++){
  d = a + b;
  c = c + d;
  a = b;
  b = d;
  console.log(d);
}
