// flowchart TD
//  A[INIZIO] --> B[alert>Inserisci il numero di km che vuoi percorrere] 
//   B -->|salva il valore di B nella variabile kmStimati| C[kmstimati * const 0.21]

//   C -->|salva il valore di C nella variabile totCostoKm| D{alert>Quanti anni hai?}

//   D -->|salva il valore di D nella variabile eta| E[18<eta<65]

//   D -->|se minore o uguale a 18 applica il 20% di sconto| F[<=18]

//   D -->|se maggiore o uguale a 65 applica il 40% di sconto| G[>=65]

//   E -->|salva il valore di E nella variabile bigliettoIntero| H[promt>C+E]
//   F -->|salva il valore di F nella variabile under18| I[promt>C-F]
//   G -->|salva il valore di G nella variabile over65| L[promt>C-G]
//   H -->|salva il valore di H nella variabile totale| M[promt>Il prezzo del biglietto ammoanta a € H]
//   I -->|salva il valore di I nella variabile totale| M[promt>Il prezzo del biglietto ammoanta a € I]
//   L -->|salva il valore di L nella variabile totale| M[promt>Il prezzo del biglietto ammoanta a € L]
//   M -->N[FINE]

// alert("Hello World!");

const costoKm = 0.21;
const under18 = 0.20;
const bigliettoIntero = 1;
const over65 = 0.40;

// let kmStimati = ;
// let totCostoKm = ;
// let eta = ;
// let totale = ;

let kmStimati = prompt('Inserisci il numero di km che vuoi percorrere');
console.log("Kilometri stimati: ", kmStimati);
let totCostoKm = kmStimati * costoKm;
console.log("Totale costo kilometrico: ", totCostoKm);

let eta = prompt('Quanti anni hai?');
console.log("Età in anni:",eta);

// if(eta<=18&&eta<=65){
//   console.log("Biglietto ridotto");
// } else{
//   console.log("Biglietto intero");
// }

if(eta<=18){
  console.log("Biglietto ridotto. Il prezzo del biglietto è:", totCostoKm*under18);
} else if(eta>=65){
  console.log("Biglietto ridotto. Il prezzo del biglietto è:", totCostoKm*over65);
} else{
  console.log("Biglietto intero. Il prezzo del biglietto è:", totCostoKm);
}