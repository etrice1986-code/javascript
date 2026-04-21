console.log("ciao")

//I TIPI DI DATO

//PRIMITIVI: immutabile e lrgeri

// NON PRIMIVITI O STRUTTURALI: Mutabili e pesanti


//Elenco Primitivi: Number, String, Boolean, undefined, Null

//Elenco Strutturali: Object


//NUMBER:

let a = 5;
let b = 10;
let somma = a + b;
console.log(somma);

let differenze  = a - b
console.log(differenze);

let multiplicazione = a * b;
console.log(multiplicazione);

let divisione = a / b
console.log(divisione)

//OPERATORI MATEMATICI: + - * /  %(modulo)

// % ci restituisce il RESTO di una divisione

//MATH:(Oggetto)

//Math.max(): ci restituisce il numero piu grande da un elenco

//Math.min(): ci restituisce il numero piu piccolo da un elenco

//Math.round(): ci permette di arrotondare un numero per accesso se il primo numero dopo il . è >=5. altimenti si arrotonda per diffetto

//Math.floor(): arrotonda sempre per diffetto 

//Math.ceil(): arrotonda sempre per eccesso

//Math.random(): genera un numero casuale compreso tra 0 e 1, MA esclude l'1

//Math.floor(Math.random) = (max-min+1) + min);


// .tofixed(): arrotondare il numero alla cifra decimale che voglio. MI trasformo il dato da un numero a striga.

//Dog syntax
let number = 5.564;
//console.log( number.toFixed(2))
console.log(typeof number .toFixed (2))

//String: tutto cio che abbraciato , vrappato da degli apici in programmazione, è una stringa

//quanti tipi di apici esistono in js: 3   '' "" ``backtick
// per fare la backtick:  Alt + 96
 
console.log(typeof"ciao");

//Concatenazione tra stringhe
// bec slesh n :    /n per mandare a capo una stringa
//let nome = "pippo"
//console.log('ciao a tutti mi chiamo \n' + nome);

//console.log(`mi chiamo ${name}  `);
let name = "matteo"
let str = ' ciao a tutti mi chiamo '
let saluto = str + name;
console.log(saluto);

//Type cohertion: js si accorgersi che sono due dati diversi, non per questo va in errore ma cerca di andare avanti  e converte uno dei due dati nel tipo dell'altro
console.log(  '5' + 5)

//NAN  Not a Number, valore assorbente


//Bool: true e false
let check = true;
console.log(typeof check);

//Undefined: rappresenta un assenza di valore
let  a = undefined ;
console.log(typeof a);

//Null rappresenta l'assenza INTENZIONALE di un oggetto , viene definito la primitiva strutturale (object)
let b = null;

//Operatarori

//Operatori unari: typeof
//Operatori Binari: matematici, confronto, logici
//Operatori Ternario: condizioni

// Incremento: ++
let a = 5;
a++

console.log(a);

//Decremento --
