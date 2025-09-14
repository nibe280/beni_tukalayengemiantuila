"use strict";
// L'opérateur !
var container = document.querySelector(".container");
var user1 = {
    title: "Dev Front-End",
    description: "Développeur de sites internet.",
    salary: 30000
};
// console.log(user1?.description);
// Optional Parameter
function message(msg) {
    if (msg) {
        console.log(msg);
    }
    else {
        console.log("No message provided");
    }
}
var house1 = {
    room: 4,
    price: 300000
};
// ?? opérateur
var data = "";
var display = data !== null && data !== void 0 ? data : "Hello World";
console.log(display);
// Never
function alertUser(msg) {
    throw msg;
}
alertUser("Alerte, comportement dangereux");
