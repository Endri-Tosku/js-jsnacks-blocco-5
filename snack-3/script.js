const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Uso map() per creare un nuovo array in cui ogni numero è incrementato di 1
const increased = numbers.map((x) => x + 1);// La funzione (x) => x + 1 prende ogni numero x e restituisce x + 1

console.log(increased);
