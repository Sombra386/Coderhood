function invertirFrase(n) {
    let frase = "";
    for (let i = n.length - 1; i >= 0; i--) {
    frase += n[i];
    }
    return frase;
    }
    console.log(invertirFrase("buenas tardes")); //sedrat saneub