  alert('Hello World!');
  var numero = parseInt(prompt('inserisci il numero di chilometri'));
  console.log(numero);
  var eta = parseInt(prompt('inserisci la tua eta'));
  console.log(eta);
  var prezzo = numero * 0.21;
  console.log(prezzo);
  var prezzoMinorenni = (prezzo -(prezzo * 20) / 100);
  console.log(prezzoMinorenni);
  var prezzoOver = (prezzo -(prezzo * 40) / 100);
  console.log(prezzoOver);
 if (eta > 18) {
console.log('pari');
  var risultatoPariDispari = 'pari';
} else {
  var risultatoPariDispari = 'dispari';
 }








// Il programma dovrà chiedere all’utente il numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
