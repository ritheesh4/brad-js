/*This is a game which has auto hanging man if the letters inputs are wrong with the 
hidden word. The hidden words list can be presettend and selection of the word will be
executed randomly.*/

const word = document.getElementById('word');
const wrongLettersList = document.getElementById('wrong');
const play = document.getElementById('play');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification');
const message = document.getElementById('message');
const bodyPart = document.querySelectorAll('.body-part');

const words = ['electronics', 'computer', 'registers'];
let chosenWord = words[Math.floor(Math.random() * words.length)];
const correctedLetters = [];
const wrongLetters = [];

// Here in this funciton is used to display the hidden word
function showWord() {
    word.innerHTML = `
    ${chosenWord
            .split('')
            .map(
                letter => `
            <span class = "letter">
                ${correctedLetters.includes(letter) ? letter : ''}
            </span>
          `
            ).join('')
        }`;

    const result = word.innerText.replace(/\n/g, '');
    if (result === chosenWord) {
        message.innerText = 'Congratulations! You won! 😁';
        popup.style.display = 'flex';
    }
    console.log(word.innerText, result);
}

// This function is used to update the wrong letters
function wrongLettersfunc() {
    wrongLettersList.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    bodyPart.forEach((part, index) => {
        const errors = wrongLetters.length;
        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none'
        }
    })

    if (wrongLetters.length === bodyPart.length) {
        message.innerText = 'Unfortunatley you lost.😓 ';
        popup.style.display = 'flex';
    }
}

// Keydown letter press
window.addEventListener('keydown', e => {
    if ((e.keyCode >= 65) && (e.keyCode <= 90)) {
        const letter = e.key;
        if (chosenWord.includes(letter)) {
            if (!correctedLetters.includes(letter)) {
                correctedLetters.push(letter);

                showWord();
            } else {
                notifications();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                wrongLettersfunc();
            } else {
                notifications();
            }
        }
    }
});

// This function shows the notification
function notifications() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// This function is used to play again once the game ended
play.addEventListener('click', () => {
    correctedLetters.splice(0);
    wrongLetters.splice(0);
    chosenWord = words[Math.floor(Math.random() * words.length)];
    showWord();
    wrongLettersfunc();
    popup.style.display = 'none'
});

showWord();
