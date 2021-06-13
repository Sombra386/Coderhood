// vida = 4;
// pocionesdevida = 2;
// si (vida == 0) {
    // si (posiconesdevida > 0) {
        // vida= vida + 1;
        // pocionesdevida = pocionesdevida - 1;
    // }
    // sino {
        // informar ("perdiste!");
    // }
// }

var vida = 0;
var pocionesdevida = 2;

if (vida == 0) {
    if (pocionesdevida > 1) {
        vida = vida + 1;
        pocionesdevida = pocionesdevida - 1;
        console.log(`zafaste`);
        console.log(`vida restante:`, vida);
    } 
    else {
        console.log(`perdiste!`);
    }
}