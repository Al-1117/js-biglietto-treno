
// Chiedo all'utente le informazioni necessarie.
var age = parseInt( prompt("Quanti anni hai?"));
var km = parseInt(prompt("Quanti chilometri percorrerai?"));
console.log(age);
console.log(km);

// chilometri percorsi
var ticketPrice = km * 0.21;
console.log(ticketPrice);

// sconto in base all'eta

var discountYoung = ticketPrice * 20 / 100;

var discountOlder = ticketPrice * 40 / 100;

console.log (discountYoung)

console.log(discountOlder);


// Elaborazione prezzo finale

var finalPrice

if (age <= 17) {

  finalPrice = ticketPrice - discountYoung;

}

else if (age >= 65) {

  finalPrice = ticketPrice - discountOlder;

}

else ((age >= 18) || (age <= 64)) {

  finalPrice = ticketPrice - 0;
}

console.log(finalPrice);



document.getElementById('totalPrice').innerHTML = Math.ceil(finalPrice) + " euro";






// sconti
