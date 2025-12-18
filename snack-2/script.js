const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Uso map() per creare un nuovo array contenente solo i nomi
const onlyName = people.map((persone) => {
  return persone.name
})// Trasformiamo ogni oggetto in una stringa con il nome della persona

console.log(onlyName);
