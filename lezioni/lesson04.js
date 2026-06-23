

//FUNZIONE: è un blocco di codice  che puo  essere scritto ma che non viene immedatamente eseguito e che puo essere richiamato cambiando i parametri. una funzione puo avere un qualunque numero di parametri che (input) ma un UN SOLO OUTPUT. tutte le funzioni senza la keyword restituiscono endefined,

/* 
//ESEMPIO
for(let i = 1; i<= 5; i++){
    console.log(i)

}
console.log("ciao") */

//per utilizzare una funzione, servono 2 passaggi:

/* 1 - Creare la funzione: nelle tonde  si inseriscono i paramertri.
una funzione  puo avere un qualunque  numero di parametri, da 0 a n */

/* 2 - Invocazione /richiamo di una funzione.
per richiamare una funzione, basta scrivere il suo nome seguito dalle parentesi tonde () */


//PARAMETRI DI FUNZIONE

// 1 -PARAMETRI FORMALI:creazione della funzione . Generici

// 2 -PARAMATRE REALI: Invocazione di una 


// function saluta(nome){
//     //blocco di istruzione
//     console.log(`ciao a tutti mi chiamo  ${nome}`);
    
// }
// saluta(`matteo`);


// function conta(numero){
//     for(let i = 1; i<= numero; i++){
//     console.log(i);

// }

// }

// conta(100);



// // FUNZIONI con SIDE-AFFECT

// function sommaDueNumeri(numero1, numero2){
//     /*scope locale*/
//     let somma = numero1 + numero2;

//     return somma;
// }

// let somma = sommaDueNumeri(5, 10);//15
// let somma2 = sommaDueNumeri(20,30);//50
// let somma3 = sommaDueNumeri(100, 1000);//1100

// console.log(somma, somma2,somma3);



// SINTASSI CON ARROW FUNCTION
//se e solo se il return è immediato

// let sommaDueNumeri = (numero1, numero2)=> {

//    /* let somma = numero1 + numero2; */
//     return numero1 + numero2;
    
// };

// let somma = sommaDueNumeri(5, 10);//15

// let  media = somma / 2;

// console.log(somma);

// console.log(media);

// /*funzione anonima*/

//Questa funzione mi deve dire se un numero è pari o dispari

/* let number = prompt('inseridci qui il tuo numero') */
function pariODispari(numero){
    if(numero % 2 == 0){
        return 'Numero pari';
        
    }else{
        return 'Numero dispari';
    }
}
console.log(     pariODispari(Number));

//scope

//locale: a queto scope riesco a vedere nello scope globale.

//globale: da questo scope, NON riesco a vedere nella scope locale


//ARRAY: tipo di dato  chi rappresenta una lista  CORDINARTA  di elementi il cui ordinamento è garantito da un indice che inozia sempre da 0

// let numbers  = [1, 2, 3, 4, 5, 6];

// let names = ['Matteo. Davide, Ossama, Giada'];

// c/* onsole.log(names)

// let arr = [1,'ciao', true, undefined, null, NAN, 1 ,1 ,1 ,1 ,1 ]
//  */
// console.log(numbers);
/* 
let names = ['Matteo', 'Dvide', 'Ossama', 'alisson', 'Giada'];

let numbers =  [1, 2, 3];

console.log(numbers);

numbers[1] = 1000;
console.log(numbers);
 */
//passaggio del dato
//passaggio per  VALORI: primitivi
//passaggio per RIFERIMENTO:


// let a = 5;

// let b = a;

// a++
//  console.log(a, b);

//  let arr1 = [1, 2, 3];

//  let arr2 = arr1;

//  arr1[0] = 'ciao';

//  console.log(arr1);
//  console.log(arr2);


/* let numbers = [1, 2, 3, 4, 5]; */


//Dot syntax
//Length

// numbers.length

// console.log(numbers[100]);

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i] * 2;

//     console.log(numbers);
// }


// METODI DEGLI ARRAY

/* 1 - .PUSH(): mi permette di aggiungere un elemento in code all'array*/
// numbers.push(6, 7, 8, 9);

// console.log(numbers);



/* 2 - .POP(): rimuove  l'ultimo elemento dell'array*/

/* numbers.pop();  */

// let lastElemente = numbers.pop();

// console.log(numbers);

// console.log(lastElemente)


/* 3 - .SHIFT(): rimuove il primo elemento di un array*/

// let firstElement = numbers.shift();

// console.log(numbers);

// console.log(firstElement);


/* 4 - .UNSHIFT():aggiunge uno o piu elementi all'inizio di un'array*/

// numbers.unshift('ciao', 'pippo', 'matteo',);

//  console.log(numbers);


 /* 5 - .REVERSE(): capovolge un'array*/
//  numbers.reverse();

//  console.log(numbers);


 /* 6 - .SPLICE(): mi permette di rimuovere un o piu elementi a un'array con un qualunque indice. e mi permette anche  di aggiungere un o piu elementi a partire da un qualunque indice. richiede da uno a n parametri.
 
 * il  primo parametro rappresenta l'indice da cui partire.
 
  numbers.splice(2)

  console.log(numbers);
 
 * il secondo parametro rappresenta quanti elementi voglio ELIMINARE*/

// numbers.splice(2, 1);

// console.log(numbers);

/* dal terzo parametro in poi, indico quali elementi voglio inserire a partire dall'indice scelto */ 

// numbers.splice(2, 1, 1000);

// console.log(numbers)

/* 7 - .SORT(): ordina gli elementi di un'array  in ordine alfabetico

- funzioni di ordine superiore. mi permette  di richiamare al suo interno una callback*/

// let names = ['matteo', 'boris', 'arina', 'carmine', 'michaele'];


// names.sort();
// /* names.reverse(); */

// console.log(names);


/* 8 - CALLBACK ()=> : funzioni anonime richiamate  all'interno di altri funzioni*/

let numbers = [100, 45, 12, 9, 87];

numbers.sort(  (a, b)=> a - b );

console.log(numbers);