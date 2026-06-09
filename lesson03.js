
//CONDIZIONI: le condizioni sono istruzioni che permettono di eseguire blocchi di codice diversi in base al verificarsi di determinate condizioni. Le principali strutture di controllo per le condizioni sono: if, else if, else, switch

//if: permette di eseguire un blocco di codice se una condizione è vera
//else: permette di eseguire un blocco di codice se la condizione dell'if è falsa

//if/else: permette di eseguire un blocco di codice se una condizione è vera, altrimenti esegue un altro blocco di codice

//contesto booleano: è un contesto in cui una condizione viene valutata come vera o falsa, ad esempio all'interno di un'istruzione if, while, ecc. In un contesto booleano, i valori vengono convertiti in true o false in base a determinate regole di conversione. Ad esempio, i valori falsy (false, 0, "", null, undefined, NaN) vengono convertiti in false, mentre tutti gli altri valori vengono convertiti in true.

// //esempio:
// let age = 18;

// if(age >= 18){
//     // blocco di codice da eseguire se la condizione è vera
//     console.log("sei maggiorenne puoi prendere la patente");
    
// }else{
//    // blocco di codice da eseguire se la condizione è falsa
//     console.log("sei minorenne non puoi prendere la patente");
// }

//esempio password:
//let password = 122;

//if(password == 123){
 //   console.log("password corretta");

//}else{
  //  console.log("password errata adesso te la corrego io");
  //  password = 123;
//}
//console.log(password)


//esempio password 2: verificare se l'utente ha inserito la password corretta


//let user_password = prompt("inserisci la password");
//let password = "ciao2023";
//variabile di appoggio per verificare se la password è corretta
//let check = false;
//fare in modo che se l'utente inserisce la password corretta, allora check diventa true, altrimenti check rimane false
//if(user_password == password){
   // check = true;
   // console.log("password corretta");
//}

//ora voglio stampare in concole password corretta se check è true, altrimenti stampare password errata
//if(check == true){
  //  console.log("password corretta");
//}else{
   // console.log("password errata");
//}


//*contesto booleano: la if scatta se la condizione è vera, se la condizione è falsa, non scatta, ma se la condizione è in un contesto booleano, allora la if scatta se la condizione è trutty, altrimenti non scatta

//operatore ternario: è un'operatore che permette di scrivere una condizione in modo più compatto, utilizzando la sintassi: condizione ? valoreSeVero : valoreSeFalso

//esempio:
//let age = 14;
//(age >= 18) ? console.log("sei maggiorenne puoi prendere la patente") : console.log("sei minorenne non puoi prendere la patente");


//if/else if/else: permette di verificare più condizioni in sequenza, eseguendo il blocco di codice corrispondente alla prima condizione vera. Se nessuna condizione è vera, viene eseguito il blocco di codice dell'else finale (se presente).

//esempio:
/* let chose_beverage = prompt("scegli una bevanda: 1 ' Acqua \n 2 ' coca-cola \n 3 ' Birra \n 4 ' Vino");

if(chose_beverage== 1){
    console.log("ecco la tua Acqua")
}
else if(chose_beverage== 2){
    console.log("ecco la tua Coca-cola")
}
else if(chose_beverage== 3){
    let age = prompt("quanti anni hai?");
    if(age >= 18){
        console.log("ecco la tua Birra")
    }else{
        console.log("spiacente non puoi bere la birra, sei minorenne")
    }
}
else if(chose_beverage== 4){
    let age = prompt("quanti anni hai?");
    if(age >= 18){
        console.log("ecco il tuo Vino")
    }else{
        console.log("spiacente non puoi bere il vino, sei minorenne")
    }
}
else{
    console.log("scelta non valida")
}
 */


// esempio: 2
/* 
let voto = 25;

if(voto < 18){
    console.log("voto insufficiente");
    }else if(voto >= 18 && voto < 25){
        console.log("voto sufficiente");
    }else if(voto >= 25){
        console.log("voto ottimo");

    }else{
        console.log("voto non valido");
    } */

//else if: permette di verificare più condizioni in sequenza, eseguendo il blocco di codice corrispondente alla prima condizione vera


//switch: permette di verificare più condizioni in base al valore di una variabile, eseguendo il blocco di codice corrispondente al valore della variabile

//Esempio di switch:
/* 
let color = 'red';

switch(color){
    //per chiudere un caso, è obligario utilizzare il break, altrimenti il codice continuerà ad eseguire anche i casi successivi, anche se non corrispondono al valore della variabile
    case 'red':
        console.log("il colore è rosso");
        break;
    case 'blue':
        console.log("il colore è blu");
        break;
    default:
        console.log("colore non riconosciuto");
} */

        //esempio switch 2:

        // let age = 18;
        
        // switch(true){
        //     case age >= 18:
        //         console.log("MAggiorenne!");
        //         break;
        //     case age < 18:
        //         console.log("Minorenne!"); 
        //         break;
        //     default:
        //         console.log("nessuno delle due ");      
        // }


//esempio 3

// let age = Number(prompt("quanti anni hai?"));

// switch(true){
//     case age >= 18:
//         console.log("sei maggiorenne");
//         break;
    
//     case  age <18 && age >= 0:
//         console.log("sei minorenne");
//         break;

//     default:
//         console.log("valore non valido")
// }

// I CICLI: un ciclo è un blocco di istruzione che si ripete N  volte finche' la condizione che gli appartiene non diventa falsa.

// Esistono tre cicli in Javascript FOR,    WHILE  DO/WHILE

//FOR: sappiamo a priori quanti eterazioni fara'

//WHILE  e DO/WHILE: non è detto che sappiamo quanti iterazioni si  ripeteranno.

//nelle parentesi tonde del ciclo FOR, si metteno 3 parametri. * il primo parametro è l'indice I (il punto di partenza).   *il secondo parametro è la condizione  *il terzo parametro è l'incremento dell'indice

//Esempio

// for(let i = 1; i <= 10; i++){
//     //blocco di istruzione
//     console.log(i);
// }

// SCOPE (spazio): esisteno 2 tipi di scope. le scope locale e lo scope globale

// SCOPE LOCALE:  rapresenta nell ciclo FOR tutto cio che  c'è tra l'inizio del ciclo e la fine del ciclo

//SCOPE GLOBALE: è tutto cio che è fuori di uno scope locale

//Voglio creare un applicativo che si permetta di far  si che dato un numero di volte che il mio utente tirera' un dado , ottera un punteggio finale

// let punteggio = 0;
// console.log(punteggio);

// let n = 5;

// for(let i = 1; i <= n; i++){
//     //voglio riassegnare ad una variabile come nuovo valore se stessa piu un numero casuale
//     punteggio = punteggio + Math.floor(Math.random() *(6 + 1 + 1) + 1);
//     console.log(`Al tiro di dado numero: ${i} il punteggio adesso vale: ${  punteggio}`);

//     //1G. punteggio = 0 + 4
//     //2G. punteggio = 4 + N casuale
//     //3G. punteggio = 6 + N casuale
// }
// console.log(punteggio);


//Esempio:2

// let punteggio = 0;
// console.log(punteggio);

// let n = 5;

// for(let i = 1; i <= n; i++){
//     //voglio riassegnare ad una variabile come nuovo valore se stessa piu un numero casuale
//     let random = Math.floor(Math.random() *(6 + 1 + 1) + 1);

//     // punteggio = punteggio + random;
//     punteggio += random

//     console.log(`Al tiro di dado numero: ${i} è uscito: ${random} il punteggio adesso vale: ${  punteggio}`);

//     //1G. punteggio = 0 + 4
//     //2G. punteggio = 4 + N casuale
//     //3G. punteggio = 6 + N casuale
// }
// console.log(punteggio);


//CICLI WHILE  DO/WHILE

let user_password = prompt("inserisci  qui la password");
let password = 'ciao2023';
let counter = 1;
while(user_password  != password){
    //blocco i istruzioni

user_password = prompt('password sbagliata! inserisci nuovamente la password:');

counter++;

if(counter == 3){
    break;
}


}
console.log(counter);

if(counter <= 2){
    console.log('password corretta');

}else{
    console.log('troppi errori, non puoi accedere');
}

//Differenza tra  WHILE e  DO/WHILE: sono fondamentalement identici. soltanto che:

//il DO/WHILE, anche se la condizione al primo giro del ciclo è immeditamente falsa , esegue il blocco di istruzioni almeno una volta.

//esempio
let nummero = 1000;

do{
    console.log('ciao');

}while(numero < 0)


