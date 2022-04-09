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




