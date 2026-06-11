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


//NOMENCLATURA: è l'insieme di regole e convenzioni per la scelta dei nomi delle variabili, costanti, funzioni, ecc. in un linguaggio di programmazione

//NOMENCLATURA DI VARIABILE/CONSTANTE: è importante scegliere nomi significativi e descrittivi per le variabili e le costanti, in modo da rendere il codice più leggibile e comprensibile. Ad esempio, invece di chiamare una variabile "x", è meglio chiamarla "numeroDiStudenti" se contiene il numero di studenti in una classe.

//NOMENCLATURA DELLE VARIABILI/COSTANTI:

// 1-NON PUO CONTENERE SPAZI: i nomi delle variabili e delle costanti non possono contenere spazi, ma possono utilizzare il camelCase (es. numeroDiStudenti) o l'underscore (es. numero_di_studenti) per separare le parole.

// 2-NON PUO CONTENERE CARATTERI SPECIALI: i nomi delle variabili e delle costanti non possono contenere caratteri speciali come @, #, $, %, ecc., ma possono utilizzare lettere, numeri e underscore.

// 3-NON PUO INIZIARE CON UN NUMERO: i nomi delle variabili e delle costanti non possono iniziare con un numero, ma possono contenere numeri dopo la prima lettera (es. numero1).

// 4-NON PUO ESSERE UNA PAROLA RISERVATA: i nomi delle variabili e delle costanti non possono essere parole riservate del linguaggio, come var, let, const, function, ecc., ma devono essere parole che non hanno un significato speciale in JavaScript.

// 5-DEVE ESSERE DESCRITTIVO: i nomi delle variabili e delle costanti devono essere descrittivi del loro contenuto o scopo, in modo da rendere il codice più leggibile e comprensibile. Ad esempio, invece di chiamare una variabile "x", è meglio chiamarla "numeroDiStudenti" se contiene il numero di studenti in una classe.

// 6- NON PUO ESSERE UGUALE AD UN ALTRO NOME GIA USATO: i nomi delle variabili e delle costanti non possono essere uguali a quelli già utilizzati in precedenza, altrimenti si verificherà un errore di sintassi o di runtime. Ad esempio, se si dichiara una variabile "numero" e poi si tenta di dichiarare un'altra variabile con lo stesso nome, si otterrà un errore.

// 7-NON PUO CONTENERE MAIUSCOLE: i nomi delle variabili e delle costanti non possono contenere lettere maiuscole, ma possono utilizzare solo lettere minuscole, numeri e underscore. Ad esempio, invece di chiamare una variabile "NumeroDiStudenti", è meglio chiamarla "numero_di_studenti" o "numeroDiStudenti".


//COSTANT:
//Conventionalmente, i nomi delle costanti sono scritti in maiuscolo e separati da underscore (es. PI, MAX_VALUE) per distinguerli dalle variabili, ma questa è solo una convenzione e non una regola obbligatoria. In JavaScript, è possibile utilizzare lettere minuscole per i nomi delle costanti, ma è consigliabile seguire la convenzione per rendere il codice più leggibile e comprensibile.

//Il nome di una variabile/ constante NON può iniziare con un numero, non può contenere spazi, non può essere una parola riservata (come var, let, const, function, ecc.), e deve essere descrittivo del suo contenuto o scopo


// var: ha una portata globale o di funzione, può essere riassegnata e ridefinita
// let: ha una portata di blocco, può essere riassegnata ma non ridefinita
// const: ha una portata di blocco, non può essere riassegnata né ridefinita


//DIAGRAMMA DI FLUSSO:
//  è una rappresentazione grafica del flusso di esecuzione di un programma, che mostra le operazioni, le decisioni e i cicli che si verificano durante l'esecuzione del codice. I diagrammi di flusso sono utili per visualizzare la logica di un programma e identificare eventuali errori o inefficienze. I simboli comuni utilizzati nei diagrammi di flusso includono ovali (per l'inizio e la fine), rettangoli (per le operazioni), rombi (per le decisioni) e frecce (per indicare il flusso di esecuzione).

//LA CONDIZIONE DI UN CICLE, DEVE PRIMA O POI DIVENTARE FALSA, ALTRIMENTI IL CICLO DIVENTA INFINITO E BLOCCA L'ESecuzione DEL PROGRAMMA
