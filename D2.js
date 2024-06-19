/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const num1= 5
const num2= 17
if (num1>num2) {
  console.log("il numero più grande è:",num1)
} else if (num1<num2) {
  console.log("il numero più grande è:",num2)
} else {
  console.log("i numeri sono uguali")
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (num1!==5) {
  console.log("not equal")
} else{
  console.log("il numero è 5")
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (num1%5===0) {
  console.log(num1+" divisibile per 5")
}else{
  console.log(num1+" non è divisibile per 5")
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (num1===8||num2===8) {
  console.log("uno dei due numeri è 8")
}else if (num1 + num2 ===8||num2 + num1 ===8) {
  console.log("la somma dei due numeri è 8")
}else if (num1 - num2 ===8||num2 - num1===8) {
  console.log("la sottrazione dei due numeri è 8")
}else{
  console.log("il risultato di un operazione tra i due numeri è diversa da 8")
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart=70
const spedizione=10
if (totalShoppingCart>50) {
  console.log("spedizione gratuita")
}else if (totalShoppingCart<=50) {
  console.log("costo spedizione 10€",(totalShoppingCart+spedizione))
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const blackFriday=totalShoppingCart*0.8
if (blackFriday>50) {
  console.log("spedizione gratuita, con lo sconto paghi solo",blackFriday)
}else if (blackFriday<=50) {
  console.log("costo spedizione 10€, totale da pagare con lo sconto",(blackFriday+spedizione))
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const a=7
const b=15
const c=10
if (a>b&&a>c) {
  if (b>c) {
    console.log(a,b,c)
  }else {
    console.log(a,c,b)
  }} else if (b>a&&b>c) {
    if (a>c) {
      console.log(b,a,c)
    }else{
      console.log(b,c,a)
    }
  }else if (c>a) {
    console.log(c,a,b)
  }else{
    console.log(c,b,a)
  }


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const valoreFornito=7
if (typeof valoreFornito==="number") {
  console.log(valoreFornito, "è un numero")
}else {
  console.log(valoreFornito,"no è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const number=10
if (number%2===0) {
  console.log("numero pari")
}else{
  console.log("numero dispari")
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 3
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city= "toronto"
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const array=[]
array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.push(6)
array.push(7)
array.push(8)
array.push(9)
array.push(10)
console.log(array)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
array[9]=100
console.log(array)
