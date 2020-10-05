"use strict";

let chordButton = document.getElementById('chord-button');
let undoButton = document.getElementById('undo-button');
let resetButton = document.getElementById('reset-button');

let keySelector = document.getElementById('chord-key')
let chordField = document.getElementById('chord-field');

let specialButton = document.getElementById('special-button');
let specialCards = document.getElementById('special-cards');

//data structures
let chordArray = [];

//listeners
chordButton.addEventListener('click', function () { addChord(); });
undoButton.addEventListener('click', function () { undoChord() });
resetButton.addEventListener('click', function () { resetChords() });
specialButton.addEventListener('click', function () { addSpecialCard(); });

//methods
function addChord() {

    chordArray.push(chords["Chromatic"][randomInteger(0, 6)] + extensions[randomInteger(0, extensions.length - 1)]);
    //TODO legge inn duplicate protection
    chordField.textContent = printChords(chordArray);
};

function undoChord() {
    chordArray.pop();
    chordField.textContent = printChords(chordArray);
};

function resetChords() {
    chordArray = [];
    chordField.textContent = "";
};

function printChords(array) {
    let result = "";
    array.forEach(element => {
        result += element + ' ';
    });
    return result;
};

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function addSpecialCard() {
    //create card
    let card = document.createElement("div");
    card.className += "card";
    card.style = "width: 18rem; display:inline-block;";
    //create card body
    let cardBody = document.createElement("div");
    cardBody.className += "card-body";
    card.appendChild(cardBody);
    //create card title
    let cardTitle = document.createElement("h5");
    cardTitle.className += "card-title";
    cardBody.appendChild(cardTitle);
    //Create card text
    let cardText = document.createElement("p");
    cardText.className += "card-text";
    cardBody.appendChild(cardText);

    //fylle elementet med content 
    cardTitle.textContent = "Tittel";
    cardText.textContent = "Text bla bla bla bla bla bla bla";

    //add to DOM
    specialCards.appendChild(card);
    let closeButton = document.createElement("button");
    closeButton.className += "close";
    //closeButton.textContent = "Remove";
    cardBody.appendChild(closeButton);

    let closeIcon = document.createElement("span");
    closeIcon.textContent = "&times;";
    closeButton.appendChild(closeIcon);
    closeButton.addEventListener("click", function () {
        closeButton.closest('.card').fadeOut();
    });
}
console.log('javascript loaded');