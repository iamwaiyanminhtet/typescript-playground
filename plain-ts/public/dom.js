"use strict";
// if we are selecting by html tag, ts knows it's htmlFormTag and its type is assigned automatically
const formEl = document.querySelector('form');
// if we are selecting with class or id, ts doesnt know its type and think that it might possibly null, thus you cant use its properties or methods
const exampleInput = document.querySelector('#input');
// console.log(exampleInput.value);
// but we can tell ts, this is certain html tag, we are sure it's not null by specifying ! at the end;
const button = document.querySelector('#logButton');
const inputEl = document.querySelector('#input');
const selectEl = document.querySelector('#select');
button.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(inputEl.value)
    // console.log(selectEl.value)
});
