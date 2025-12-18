const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// find() cicla ogni elemento dell'array 'students'
const student = students.find(student => student.id === 2)
// La funzione student => student.id === 2 controlla se l'id dello studente è uguale a 2
// Restituisce il primo oggetto che soddisfa la condizione

console.log(student);

