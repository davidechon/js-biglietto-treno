// flowchart TD
//  A[INIZIO] --> B[alert>Inserisci il numero di km che vuoi percorrere] 
//   B -->|salva il valore di B nella variabile kmStimati| C[kmstimati * const 0.21]
//   C -->|salva il valore di C nella variabile totCostoKm| D{alert>Quanti anni hai?}
//   D -->|salva il valore di D nella variabile eta| E[18<eta<65]
//   D -->|se minore o uguale a 18 applica il 20% di sconto| F[<=18]
//   D -->|se maggiore o uguale a 65 applica il 40% di sconto| G[>=65]
//   E -->|salva il valore di E nella variabile bigliettoIntero| H[promt>B+E]
//   F -->|salva il valore di F nella variabile under18| I[promt>B-F]
//   G -->|salva il valore di G nella variabile over65| L[promt>B-G]
//   H -->|salva il valore di H nella variabile totale| M[promt>Il prezzo del biglietto ammoanta a € H]
//   I -->|salva il valore di I nella variabile totale| M[promt>Il prezzo del biglietto ammoanta a € I]
//   L -->|salva il valore di L nella variabile totale| M[promt>Il prezzo del biglietto ammoanta a € L]
//   M -->N[FINE]

// alert("Hello World!");

const costoKm = 0.21;
const under18 = 20%;
const bigliettoIntero = 100%;
const over65 = 40%;

let kmStimati = ;
let totCostoKm = ;
let eta = ;
let totale = ;
