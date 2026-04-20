// SOC:
// html: contenuto
// css:  stile
// js:   dinamicità  -> quando


// compilati:
// interpretati:

// compilato just in time (JIT):
// 1. il codice viene compilato in bytecode (un formato intermedio)
// 2. il bytecode viene eseguito da una macchina virtuale (come V8 per JavaScript)
// 3. durante l'esecuzione, il JIT compila parti del bytecode in codice macchina nativo per migliorare le prestazioni

// alert: funzione che mostra un messaggio all'utente in una finestra di dialogo(modal), bloccando l'esecuzione del codice fino a quando l'utente chiude la finestra
alert("Ciao, mondo!")



// prompt: funzione che mostra una finestra di dialogo con un campo di input, permettendo all'utente di inserire un valore

let nome = prompt("Qual è il tuo nome?");
console.log(nome)
 

// console.log: funzione che stampa un messaggio nella console del browser, utile per il debug
console.log("Ciao, console!")



// variabili: contenitori per dati che possono essere modificati durante l'esecuzione del programma
// dichiarazione di una variabile: var, let, const
// var: ha una portata globale o di funzione, può essere riassegnata e ridefinita
// let: ha una portata di blocco, può essere riassegnata ma non ridefinita
// const: ha una portata di blocco, non può essere riassegnata né ridefinita

// tipi di dati primitivi: string, number, boolean, null, undefined, symbol
// tipi di dati complessi: object, array, function

// operatori: +, -, *, /, %, =, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !
// funzioni: blocchi di codice che eseguono un compito specifico, possono essere chiamate più volte
// dichiarazione di una funzione: function nomeFunzione() { ... }
// espressione di una funzione: const nomeFunzione = function() { ... }
// arrow function: const nomeFunzione = () => { ... }
// scope: l'ambito in cui una variabile è accessibile
// scope globale: variabili dichiarate al di fuori di qualsiasi funzione o blocco, accessibili ovunque
// scope locale: variabili dichiarate all'interno di una funzione o blocco, accessibili solo all'interno di quella funzione o blocco
// closure: una funzione che ha accesso alle variabili del suo scope esterno anche dopo che la funzione esterna ha terminato l'esecuzione
// eventi: azioni che si verificano in risposta a interazioni dell'utente o altre condizioni, come click, submit, load, ecc.
// gestione degli eventi: addEventListener, onClick, onSubmit, ecc.
// DOM (Document Object Model): rappresentazione ad albero della struttura HTML di una pagina web, che consente di manipolare gli elementi della pagina tramite JavaScript
// selezione degli elementi DOM: document.getElementById, document.querySelector, document.querySelectorAll, ecc.
// manipolazione degli elementi DOM: element.innerHTML, element.style, element.classList, ecc.



// LOCAZIONE DI MEMORIA: variabili e costanti

//variabile: contenitore per dati che possono essere modificati durante l'esecuzione del programma
// dichiarazione di una variabile: var, let, const

//---LA VARIABILE: è una locazione di memoria all'interno della quale il dato puo essere sostituito

//---LA COSTANTE: è una locazione di memoria all'interno della quale il dato non puo essere sostituito


//  1-VARIABIBILI.
//  *Dichiarazione di una variabile: var, let, const

let numero;

//Asignazione di una variabile: 
numero = 10;

//Invocazione di una variabile:
console.log(numero);

//Inizializzazione di una variabile: dichiarazione + assegnazione

let welcome= "ciao a tutti";

console.log(welcome);

console.log("CIAO, MI VEDI?");
alert("ALERT FUNZIONA");

//rassegna: è un'operazione che consiste nell'assegnare un nuovo valore a una variabile già dichiarata
welcome = "benvenuti alla rassegna";

console.log(welcome);


// var: ha una portata globale o di funzione, può essere riassegnata e ridefinita
// let: ha una portata di blocco, può essere riassegnata ma non ridefinita
// const: ha una portata di blocco, non può essere riassegnata né ridefinita