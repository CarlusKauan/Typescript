"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let myname = "Carlos";
let myheight = 1.60;
let happy = true;
let y = 12;
let z = 14;
console.log(typeof (myname) + "->" + typeof (myheight) + "->" + typeof (happy));
const myNumbers = [10, 20, 30, 50];
const myNumberJs = [10, 20, 30];
myNumberJs.push(100);
console.log(myNumberJs);
console.log("Qtde: " + myNumberJs.length);
console.log(myNumbers);
console.log("Qtde: " + myNumbers.length);
console.log("Meu nome é: " + myname + " Minha altura " + myheight + " Estou feliz? " + happy);
let myTuple;
myTuple = [5, "teste", ["a", "b", "c"]];
console.log(myTuple);
const livros = {
    nome: "A biblia do meu dia a dia",
    lançamento: 2002,
    author: "Padre Jonas Habib"
};
console.log("Nome do livro: " + livros.nome);
console.log("Lançamento do livro: " + livros.lançamento);
const user = {
    name: "Carlos",
    age: 18
};
console.log(user.name);
console.log(user.age);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Furia",
    size: Size.M
};
console.log(camisa.name + " " + camisa.size);
let teste;
function sum(num, num2) {
    return num + num2;
}
console.log(sum(10, 10));
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Carlos"));
function logger(msg) {
    console.log(msg);
}
logger("Teste !");
function greeting(name, status) {
    if (status) {
        console.log(`${name} is ${status}`);
    }
    else {
        console.log(`Iae ${name}`);
    }
}
greeting("Carlos", "Happy");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 10 }));
function multiple(nums) {
    return nums.n1 * nums.n2;
}
console.log("Resultado " + multiple({ n1: 1, n2: 20 }));
function doSomething(info) {
    if (typeof info === "number") {
        return console.log(`O número é ${info}`);
    }
    else {
        return console.log("Não foi passado com o número");
    }
}
doSomething(true);
function showArrays(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["Carlos", "Laura", "Kauan"];
showArrays(a1);
showArrays(a2);
class User {
    constructor(name, ager, height) {
        this.name = name;
        this.ager = ager;
        this.height = height;
    }
    HelloName() {
        console.log(`O meu nome é ${this.name}`);
    }
}
const pessoa = new User("Carlos", 18, 1.60);
pessoa.HelloName();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`Andando no meu carrinho ! ${this.brand}`);
    }
}
const carro = new Car("Celta", 4);
carro.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const car = new SuperCar("Audi", 4, 2);
console.log(car);
car.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createDate = new Date();
            }
        };
    };
}
let Persons = class Persons {
    constructor(name) {
        this.name = name;
    }
};
Persons = __decorate([
    BaseParamters()
], Persons);
const sam = new Persons("Sam");
console.log(sam);
