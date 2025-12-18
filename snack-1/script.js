const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// Uso "map()" per creare un nuovo array in cui ogni nome è racchiuso tra virgolette singole
const quotedNames = names.map(name => `'${name}'`); 

// Uso join() per unire tutti gli elementi dell'array in una singola stringa separata da virgola e spazio
const result = quotedNames.join(', ');

console.log(result); 

//// Versione compattata ////
console.log(names.map(name => `'${name}'`).join(', '));

