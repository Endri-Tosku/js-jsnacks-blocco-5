const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//// METODO USANDO "filter()"
// filter() cicla tutti gli elementi dell'array e restituisce un nuovo array
const even = nums.filter(num => num % 2 === 0);// La funzione num => num % 2 === 0 ritorna true solo se il numero è pari
console.log(even);


//// METODO USANDO "for"
const evens = [];
for (const num of nums) {// Ciclo ogni numero dell'array 'nums' usando un for
  if (num % 2 === 0) {// Controllo se il numero è pari
    evens.push(num); // Se è pari, lo aggiungo all'array
  }
}
console.log(evens);

//// METODO USANDO "forEach()"
const evens2 = [];
nums.forEach(num => {// Ciclo ogni numero dell'array 'nums' usando forEach
  if (num % 2 === 0) {// Controllo se il numero è pari
    evens2.push(num);// Se è pari, lo aggiungo all'array
  }
});
console.log(evens2);
