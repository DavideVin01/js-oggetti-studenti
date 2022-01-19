/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/


// # USING DOM
// const student = {
//     nome: 'Davide',
//     cognome: 'Vinciguerra',
//     eta: 20,
// }

// const displayElement = document.getElementById('display');

// for (let key in student) {
//     console.log(student[key]);
//     displayElement.innerText += student[key];
// }

// const students = [
//     {
//         nome: 'Davide',
//         cognome: 'Vinciguerra',
//         eta: 20,
//     },
//     {
//         nome: 'Beatrice',
//         cognome: 'Furegato',
//         eta: 18,
//     },
//     {
//         nome: 'Marcello',
//         cognome: 'Tarallo',
//         eta: 21,
//     },
//     {
//         nome: prompt('Inserisci il tuo nome', 'Giuseppe').trim(),
//         cognome: prompt('Inserisci il tuo cognome', 'Vinciguerra').trim(),
//         eta: parseInt(prompt('Inserisci la tua età', '23').trim()),
//     },
// ]

// for (let i = 0; i < students.length; i++) {
//     const currentStudent = students[i];

//     console.log('---NOME COGNOME---')
//     console.log(currentStudent.nome);
//     console.log(currentStudent.cognome);
// }

// console.table(students);

// ----------------------------

// # USING CONSOLE
const displayElement = document.getElementById('display');
const buttonElement = document.getElementById('button');
const displayName = document.getElementById('name');
const displaySecondName = document.getElementById('second-name');
const displayAge = document.getElementById('age');
const displayResult = document.getElementById('result');

let nameElement = displayName.value.toString();
let secondNameElement = displaySecondName.value.toString();
let ageElement = displayAge.value.toString();

const student = {
    nome: 'Davide',
    cognome: 'Vinciguerra',
    eta: 20,
}



for (let key in student) {
    console.log(student[key]);
    displayElement.innerText += student[key];
}

buttonElement.addEventListener('click', function () {
    displayName.value = '';
    displaySecondName.value = '';
    displayAge.value = '';

    const students = [
        {
            nome: 'Davide'.toString(),
            cognome: 'Vinciguerra'.toString(),
            eta: 20,
        },
        {
            nome: 'Beatrice'.toString(),
            cognome: 'Furegato'.toString(),
            eta: 18,
        },
        {
            nome: 'Marcello'.toString(),
            cognome: 'Tarallo'.toString(),
            eta: 21,
        },
        {
            nome: nameElement,
            cognome: secondNameElement,
            eta: ageElement,
        },
    ]

    for (let i = 0; i < students.length; i++) {
        const currentStudent = students[i];

        console.log('---NOME COGNOME---')
        console.log(currentStudent.nome);
        console.log(currentStudent.cognome);
    }

    console.table(students);

    displayResult.innerText = students;
})