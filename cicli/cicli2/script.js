

// let sommaDispari = 0;
// let countDispari = 0;

// for (let i = 1; i <= 20; i++) {

//     if (i % 2 === 0) {
//         console.log(i); // numero pari
//     } else {
//         sommaDispari += i; // aggiungo i dispari
//         countDispari++;
//     }
// }

// let media = sommaDispari / countDispari;

// console.log("La media dei numeri dispari è: " + media);


let accumulatore = 0;
let counter = 0;

for(let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }else{
        accumulatore += i;
        counter++;
    }
}
let media = accumulatore / counter;
console.log("la media dei numeri dispari è:" + media);