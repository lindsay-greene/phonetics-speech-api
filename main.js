"use strict";

// Lookup table matching each ID to its pronunciation 
const pronunciation = {
  //fix: f, th2
  "p": "pa",
  "b": "buh",
  "m": "muh",
  "f": "fa",
  "v": "vuh",
  "t": "ta",
  "th1": "thuh",
  "th2": "thuh",
  "s": "sis",
  "d": "duh",
  "z": "ziz",
  "n": "in",
  "l": "ull",
  "r": "ar",
  "sh": "shuh",
  "ch": "chuh",
  "dg": "juh",
  "y": "yuh",
  "k": "kah",
  "g": "guh",
  "w": "wuh",
  "ng": "ing",
  "h": "huh"
};

// Initiate speech synthesis 
var synth = window.speechSynthesis;

// Add event listener to each button when page loads 
window.onload = () => {
    const buttons = document.querySelectorAll("button");
    for(const button of buttons) {
        button.addEventListener("click", speak );
    }
}

// Pronounce the desired sound based on the button's id 
function speak(event) {
    const target = event.target;
    const id = target.id;
    const pronounce = pronunciation[id];
    var utterance = new SpeechSynthesisUtterance(pronounce);
    utterance.pitch = 1.2;
    utterance.rate = 1.1;
    synth.speak(utterance);
}