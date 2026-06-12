

let t = Number(prompt("Inserisci la temperatura:"));

if (isNaN(t)) {
    console.log("valore non valido");
} else if (t < -10) {
    console.log("copriti…ancora ti raffreddi");
} else if (t < 0) {
    console.log("non è tanto il freddo quanto l’umidità");
} else if (t < 20) {
    console.log("non ci sono più le mezze stagioni");
} else if (t < 30) {
    console.log("mi dia una peroni sudata");
} else {
    console.log("lu mare, lu sole, lu ientu");
}