/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

const student = {
    nome: 'Davide',
    cognome: 'Vinciguerra',
    eta: 20,
}

const displayElement = document.getElementById('display');

for (let key in student) {
    console.log(student[key]);
    displayElement.innerText += student[key];
}

const students = [
    {
        nome: 'Davide',
        cognome: 'Vinciguerra',
        eta: 20,
    },
    {
        nome: 'Beatrice',
        cognome: 'Furegato',
        eta: 18,
    },
    {
        nome: 'Marcello',
        cognome: 'Tarallo',
        eta: 21,
    },
]

for (let i = 0; i < students.length; i++) {
    const currentStudent = students[i];

    console.log('---NOME COGNOME---')
    console.log(currentStudent.nome);
    console.log(currentStudent.cognome);
}