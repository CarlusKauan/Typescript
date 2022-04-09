// tipos básicos: string, bollean, number
let myname:string = "Carlos";
let myheight:number = 1.60;
let happy:boolean = true;

// inferencia x annotation
let y = 12
let z:number = 14

// String != string
console.log(typeof(myname) + "->" + typeof(myheight) + "->" + typeof(happy))

// object
const myNumbers: number[] = [10,20,30,50]
const myNumberJs = [10,20,30]
myNumberJs.push(100)

console.log(myNumberJs)
console.log("Qtde: " + myNumberJs.length)
console.log(myNumbers)
console.log("Qtde: " + myNumbers.length)

// console.log()
console.log("Meu nome é: " + myname + " Minha altura "  + myheight + " Estou feliz? " + happy);

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a","b","c"]]
console.log(myTuple)

// objects literais => {prop: values}

const user: {name: string, age: number} = {
    name: "Carlos",
    age: 18
}

console.log(user.name)
console.log(user.age)

//any
let a: any = 0
a = "teste"
a = true
a = []

//union type
let id: number | string = "10"
id = 200
//type alias
// criar tipo !
type myIdType = number | string;
const userId: myIdType = 10

// enum
enum Size{
    P = "Pequeno",
    M  = "Medio",
    G = "Grande"
}


const camisa = {
    name : "Camisa Furia",
    size: Size.M
}
console.log(camisa.name + " " + camisa.size)

//literal types
let teste: "Carlos"

// funções
function sum(num:number, num2:number){
    return num + num2
}
console.log(sum(10,10))
// retorna tipo da função
function sayHello(name: string): string{
    return `Hello ${name}`
}
console.log(sayHello("Carlos"))
// função sem retorno
function logger(msg: string): void{
    console.log(msg)
}
logger("Teste !")
// null os parametros
function greeting(name:string, status?:string){
    if(status){
        console.log( `${name} is ${status}`)
    }
    else{
        console.log(`Iae ${name}`)
    }

}
greeting("Carlos", "Happy")

//interfaces
interface MathFunctionParams {
    n1:number, 
    n2:number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumbers({ n1: 1, n2: 10}))

function multiple(nums: MathFunctionParams){
    return nums.n1 * nums.n2
}

console.log("Resultado " + multiple({ n1: 1, n2: 20}))

//narrowing
// checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number"){
        return console.log(`O número é ${info}`)
    }
    else{
        return console.log("Não foi passado com o número")
    }
}

doSomething(true)

// generics
function showArrays<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["Carlos", "Laura", "Kauan"]

showArrays(a1)
showArrays(a2)

// classes

class User {
    name
    ager
    height

    constructor(name: string, ager: number, height: number){
        this.name = name;
        this.ager = ager;
        this.height = height;
    }

    HelloName(): void{
        console.log(`O meu nome é ${this.name}`)
    }
}

const pessoa = new User("Carlos", 18, 1.60)
pessoa.HelloName()

//interfaces diz como a classe vai se comportar !
interface IVehicle {
    brand: string;
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`Andando no meu carrinho ! ${this.brand}`)
    }

}

const carro = new Car("Celta", 4)
carro.showBrand()

// herança
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine
    }
}

const car = new SuperCar("Audi", 4, 2)
console.log(car)
car.showBrand()

//constructor decorators
function BaseParamters(){
    return function <T extends {new (...args: any[]):{}}>(constructor: T){
        return class extends constructor {
            id = Math.random();
            createDate = new Date();
        }
    }
}

@BaseParamters()
class Persons {
    name
    constructor(name: string){
        this.name = name
    }
}

const sam = new Persons("Sam")
console.log(sam)