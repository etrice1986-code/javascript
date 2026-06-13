

let scelta;

while (true) {
    let input = prompt("Scegli una bevanda: 1 = acqua, 2 = coca cola, 3 = birra");

    let valore = input.trim().toLowerCase();

    if (valore === "1" || valore === "acqua") {
        console.log("È stata selezionata l'acqua");
        break;
    }

    if (valore === "2" || valore === "coca cola" || valore === "cocacola") {
        console.log("È stata selezionata coca cola");
        break;
    }

    if (valore === "3" || valore === "birra") {
        console.log("È stata selezionata birra");
        break;
    }

    console.log("Scelta non valida, riprova.");
}
