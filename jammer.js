"use strict";

let chordButton = document.getElementById('chord-button');
let undoButton = document.getElementById('undo-button');
let resetButton = document.getElementById('reset-button');

let keySelector = document.getElementById('chord-key')
let chordField = document.getElementById('chord-field');
let chordArray = [];


chordButton.addEventListener('click', function(){addChord();});
undoButton.addEventListener('click', function(){undoChord()});
resetButton.addEventListener('click', function(){resetChords()});

function addChord() {

    chordArray.push(chords["Chromatic"][randomInteger(0, 6)] + extensions[randomInteger(0, extensions.length-1)]);
    //TODO legge inn duplicate protection
    chordField.textContent = printChords(chordArray);
};

function undoChord() {
    chordArray.pop();
    chordField.textContent = printChords(chordArray);
};

function resetChords() {
    chordArray = [];
    chordField.textContent ="";
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

console.log('javascript loaded');