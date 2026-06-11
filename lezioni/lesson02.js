//console.log("ciao")

//I TIPI DI DATO

//PRIMITIVI: immutabile e leggeri

// NON PRIMIVITI O STRUTTURALI: Mutabili e pesanti


//Elenco Primitivi: Number, String, Boolean, undefined, Null

//Elenco Strutturali: Object


//NUMBER:

//let a = 5;
//let b = 10;
//let somma = a + b;
//console.log(somma);

//let differenze  = a - b
//console.log(differenze);

//let multiplicazione = a * b;
//console.log(multiplicazione);

//let divisione = a / b
//console.log(divisione)

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


// .tofixed(): arrotondare il numero alla cifra decimale che voglio. Ma mi trasforma il dato da un numero a striga.

//Dog syntax
//let number = 5.564;
//console.log( number.toFixed(2))
//console.log(typeof number .toFixed (2))

//String: tutto cio che abbraciato , vrappato da degli apici in programmazione, è una stringa

//quanti tipi di apici esistono in js: 3   '' "" ``backtick
// per fare la backtick:  Alt + 96

//let name = "matteo";
//console.log('ciao a tutti mi chiamo ' + name);

let name = "pippo"
console.log(`ciao a tutti mi chiamo ${name}  `);
 
//console.log(typeof"ciao");

//Concatenazione tra stringhe

// bec slesh n :    /n per mandare a capo una stringa

//let nome = "pippo"
//console.log('ciao a tutti mi chiamo \n' + nome);

//console.log(`mi chiamo ${name}  `);
//let name = "matteo"
//let str = ' ciao a tutti mi chiamo '
//let saluto = str + name;
//console.log(saluto);

//Type cohertion: js si accorgersi che sono due dati diversi, non per questo va in errore ma cerca di andare avanti  e converte uno dei due dati nel tipo dell'altro
//console.log(  '5' + 5)    se invece converto 5 in ciao.  ('ciao- 5) --> il resultato sara NAN, Not a Number, valore assorbente, qualsiasi operazione con NAN ci restituisce sempre NAN

//NAN  Not a Number, valore assorbente


//Bool: true e false
//let check = true;
//console.log(typeof check);

//Undefined: rappresenta un assenza di valore
//let  a = undefined ;
//console.log(typeof a);

//Null rappresenta l'assenza INTENZIONALE di un oggetto , viene definito la primitiva strutturale (object)
//let b = null;

//Operatarori

//Operatori unari: typeof, incremento e decremento
//Operatori Binari: matematici, confronto, logici
//Operatori Ternario: condizioni

// Incremento: ++
// Decremento: --
//let a = 5;
//a++

//console.log(a);

// Confronto: mi restituisce SEMPRE un valore booliano

// Uguaglianza: == non tiene in considerazione il tipo di dato, ma fa scattare la type cohertion
//console.log( 5 == '5');

// Stretta uguaglianza : === il triplo uguale, (===) non fa scattare la type cohertion

// Maggiore > 
// Minore  <
// Maggiore-uguale >=
// Minore-uguale   <=
//console.log( 1 < 2 < 3);

// 1 < 2 < 3
// true < 3
// 1 < 3
// false -> 0

//console.log(3 > 2 > 1);

// 3 > 2 : true
// true > 1
// 1 > 1 

//console.log( 5 !== '5' );

//Operatori logici:  &&  ||

// contesto Booleano: è particolare tipo di contesto all'interno della quale tutti tipi di dato qualunque siano, assumano un significato booleano:  Trytty  o Falsy

//Trutty: numeri > 0, le stringhe non vuote, tutti gli oggetti, true

//Falsy:  numeri: <= 0, le stringhe vuote, null, undefined  NAN ,false

// &&: ci restitusce il primo valore falsy che trova, se non ne trova, ci restituisce  l'ultimo valore Trutty

// ||: ci restituisce il primo valore trutty, ne non  ne tova  retituisce il primo valore falsy

//console.log( 5 && 5 < 18);
//let voto = 19;
//console.log( voto > 0 && voto <= 18);
//console.log("ciao" > 0 && 100 <= 100 || 100);

//OPeratore Overloading: +

//let number = 5.523;
//console.log( number.toFixed(2) );

//convertire una stringa in nemero

//console.log( typeof +('5') );
// console.log( +true)= 1
console.log( +false);


