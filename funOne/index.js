"use strict";

const inputTaker = function (e) {
  let inputName =
    prompt("What is your name ?") || alert("Name can not be empty !");
  if (!inputName) {
    inputTaker();
    return;
  } else document.querySelector(".naam").textContent = inputName;
};

window.addEventListener("load", inputTaker);
