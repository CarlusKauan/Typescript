"use strict";
// tipos básicos: string, bollean, number
let myname = "Carlos";
let myheight = 1.60;
let happy = true;
// inferencia x annotation
let y = 12;
let z = 14;
// String != string
console.log(typeof (myname) + "->" + typeof (myheight) + "->" + typeof (happy));
// object
const myNumbers = [10, 20, 30, 50];
const myNumberJs = [10, 20, 30];
myNumberJs.push(100);
console.log(myNumberJs);
console.log("Qtde: " + myNumberJs.length);
console.log(myNumbers);
console.log("Qtde: " + myNumbers.length);
// console.log()
console.log("Meu nome é: " + myname + " Minha altura " + myheight + " Estou feliz? " + happy);
