// //Primitive Datatypes string, number(int, float, bigInt), boolean(true/false), null, undefined

// // Composite Datatypes- objects{} and arrays[]

// // truthy or falsy should not be mistaken for true/false


// // truthy datatypes = number, string, true, {name: Ekpa}, [1, "Ekpa", true]


// // var, let, const

// // declaration and assignment

// // var aNewVariable // this is a declaration 
// // let aNewVariable // this is a declaration
// // const aNewVariable // this is a declaration

// // aNewVariable = 2 // this is an assignment

// // console.log("new variadble:",aNewVariable)


// // console.log("new variadble:",aNewVariable)

// var aNewVariable = 4 // this is a declaration and assignment
// let anotherVariable = 6 // this is a declaration and assignment
// anotherVariable = 8 // this is a declaration and assignment
// const finalBoss = 1 // immutability

// // console.log("anything:",finalBoss)

// //Composite DataTypes 
// //Arrays []

// const testArray = [1, "Ekpa", 1.4, true, { name: "Ekpa" }] //only immutable at assignment level;but composite datatypes can be modified
// // Items in an array are identified by index positions starting from 0
// // console.log("Initial form: ", testArray)
// // console.log("Item at index 3: ", testArray[3])

// // Objects {}

// const testObject = { // objects store their properties in key:value pairs
//     name: "Ekpa"  //const name = "Ekpa" | variable declaration and assignment
// }

// // const acctHolder = {
// //     name: "",
// //     address: "",
// //     bvn: 252663,
// //     nin: 244363
// // }

// // const allAccounts = [
// //     {
// //         name: "Ekpa",
// //         address: "",
// //         bvn: 252663,
// //         nin: 244363,
// //         userAccounts: [
// //             {
// //                 number: 546736,
// //                 type: "Savings"
// //             }
// //         ]
// //     },
// //     {
// //         name: "Kingsley",
// //         acctNum: 3445667,
// //         address: "",
// //         bvn: 252663,
// //         nin: 244363
// //     }
// // ]
// // console.log("Accounts: ", allAccounts[0].userAccounts[0].number)
//  //logical operators  logical OR || and logical AND && and NOT ! and logical euqals ==

//  // logical OR || checks for the first true condition

// //  console.log(false || true)
// console.log("works")

// // logical AND && checks that both conditions are the same
// // console.log(0 && false) // 

// // const testVariable = 2
// // const testVariableTwo = 4


// // logical NOT !
// // console.log(!!false) exclamation precedes the value(truthy || falsy) you want the variable not to be
// // console.log(!0)

// // Logical equals == or ===




// // if(testVariable > testVariableTwo && testVariableTwo == 4) {
// //     console.log("holds true")
// // }

// //Next class: 
// // conditional statements
// // methods

// //Read through logical operators

// console.log("something")

// conditional statements if, else, else if

// conditional if
// const a = 2
// const b = 4
// if ((a && b) && (0 || a)) { // (a && b) = truthy / (0 || a) = truthy  --> truthy && truthy --> truthy
//     console.log("Condition Holds True")
// } else if (a) {
//     console.log("Second")
// } else {
//     console.log("Hooray")
// }

// // loops, for, while, do while
// const arrayToLoop = [1, 2, 3, 4, 5]
// let num = 5
// //debugger
// // for loop
//  for(let counter = 0; counter < arrayToLoop.length; counter++){
// //debugger
//     // console.log(arrayToLoop[counter])
//  }


 // while loop
// function testWhile () {
//     while(num < 4) {
//         debugger
//         num += 1
//         console.log("num: ", num)
//     }
// }
// testWhile()

// do...while

// do { 
//    num = num + 1
//    // num++
//     console.log("num from do...while: ", num)
// } while (num < 4)

// let newNum = 0
// newNum += 1 // add and assign
// console.log("new num: ", newNum)


// functions
// function declaration in javascript

 function asstA() { // function declaration with function keyword
    return "asst A"
 }

 function asstB () {
  console.log("asst B")
 }


function asstD (money, list, item) {  // function that takes parameters  
  return money+list+item
}
asstD(2, 5, 7) // invoked with arguments

//console.log(assistantD(2, 6, 7))
const testMethods = { //properties in objescts are stored in key:value pairs
    methodOne: function () { return "I am method one"},//methodOne = function () { return "I am method one"}
    nestedMethod: {
    nestedmethodone: function () { return "I am method one"}
  }
  //name: "Ekpa",
}
console.log()
testMethods.nestedMethod.nestedmethodone() // method invocation


//arrays
const testArray = [
  {
  methodOne: function () { return "I am the first one"},//methodOne = function () { return "I am method one"}
  nestedMethod1: {
  nestedmethodone1: function () { return "The first nested one"}}
  },

  {
  methodOne: function () { return "I am method one"},//methodOne = function () { return "I am method one"}
  nestedMethod: {
  nestedmethodone: function () { return "I am method one"}}
  },
]

const driveArray = [
  {
  methodOne: function () { return "I am the first one"},//methodOne = function () { return "I am method one"}
  nestedMethod1: {
  nestedmethodone1: function () { return "The first nested one"}}
  },

  {
  methodOne: function () { return "I am method one"},//methodOne = function () { return "I am method one"}
  nestedMethod: {
  nestedmethodone: function () { return "I am method one"}}
  },
]
//console.log(testArray[1].nestedMethod.nestedmethodone())
 // method invocation

//console.log("I am method one")

//console.log(testArray[7]) // function invocation



 const sum = () => 2+2 // arrow functions
//  anything()

const difference = () => {
  let num = 4
  let numToo = 5
  return num - numToo
}



function functionWithArguments (num1, num2) { // num1 and num2 are called parameters
    return num1 + num2
}

  // functionWithArguments(3, 5) // at the point of invocation 3 and 5 are called arguments

//  aNewFunction() // function invocation/execution // functions evaluate to their return value
 
const functionExpression = function (num) { // function expression
  return num + 2
}

let argumentNum = 26
let argumentNumToo = 39


// higher order functions - a higher order function is a function that takes another function as its parameter/argument
// a callback function is a function passed as an argument to another function

function matron(a, b) {
  a()
  b()
  return b()
}




// function hoc(func, aNum, anotherNum) {
//   return func(4, 7)
// }

// function hoc(func, aNum, anotherNum) {
//   const evaluated = func(aNum, anotherNum)
//   return evaluated
// }

// console.log(hoc(functionWithArguments, argumentNum, argumentNumToo))

// const evaluatedFunction = hoc(functionWithArguments, argumentNum, argumentNumToo)





// array methods
// what is a method? - A method is a function that is owned by an object
// Most array methods are higher order function


function highOrderFunction(func) { // a higher order function is a function that takes another function as its argument and returns the invocation of that function
  return func()
}

// highOrderFunction(testCallBack)
// what is a callback? - 
// const instanceOfArray = new Array()
// const anotherInstanceOfArray = [] 

// console.log("object: ", instanceOfArray)
// console.log("object 2: ", anotherInstanceOfArray)

const aNewArray = [
  {
    name: "Kingsley",
    accts: ["Access", "GTBS"]
  }, 
  {
    name: "Ekpa",
    accts: ["Access", "GTB"]
  }, 
  
]

function testCallBack(boss) { 
  return boss.accts[1] == "GTB"
}

const returnOfFind = aNewArray.find(testCallBack).accts.map(item => item +"s").concat("Fidelity")
// console.log(returnOfFind)

const concatVsPush = ["A"]
const newconcatVsPush =  concatVsPush.concat("B")
// console.log(concatVsPush)
// console.log(newconcatVsPush)

// const returnOfFind = aNewArray.find(testCallBack)
// const accts = returnOfFind.accts
// const newaccts = accts.map(acct => acct + "s")
// console.log(newaccts)


// instanceOfArray.find()
// // const filteredArray = aNewArray.filter((item, index) => typeof(item) != "string")
// // const filteredArray = aNewArray.filter((item)=>{
// //   if(typeof(item) != "string") {
// //     return item
// //   } else  {
// //     return
// //   }
// // })

// // const concatArray = aNewArray.concat(7,7)
// // const spreadArray = [...aNewArray, 8, 9, 10]

// const spreadArrow = (...args) => { //You can only spread arguments in an arrow function
//   console.log("first arg: ", args[2])
// } 

// // spreadArrow(4, "Ekpa", [])

// aNewArray.unshift("first")
// // console.log(filteredArray)
// // console.log(aNewArray)
// // console.log(concatArray)
// // console.log(spreadArray)




// // console.log(typeof("Ekpa")) // "string"

// // what is 'this' ?
// // the 'this' keyword is a self referencing variable that is used to point at the object in whose method it is called
// // the 'this' can be bound in 4 ways 

// // method 1: window binding/default binding
// console.log("what is this: ", this) // example of window binding
// // console.log("hoc: ", window.hoc)

// // method 2: implicit binding. in implicit binding, the 'this' has to be referenced in a method
// // const name="window"

function returnThis() {
  console.log("from return this: ", this)
}


const aTestObject = {
  name: "aTestObject",
  stack: "Frontend",
  aTestObjectThis: function(){
    return this
  },
  age: 30
}

// console.log(returnThis())
// console.log(aTestObject.aTestObjectThis())

// const manipulatedThis = {
//   a: "A",
//   b: "B",
//   c: "C"
// }

// function binder(arg1, arg2) {
//   console.log("this: ", this)
//   console.log("args: ", arg1, arg2)
// }


// binder("Arg1", "Arg2")
// aTestObject.age("Arg1", "Arg2")


// //New keyword binding using constructors
function NewConstructor(name, stack, age) { // Constructors are functions that are used to build instances of an object
  this.name = name // const name = name
  this.stack = stack
  this.age = age
}

function Carconstructor(name, model, color) {
  this.name = name
  this.model = model
  this.year = color
}

const car1 = new Carconstructor("Toyota", "Camry", 2019)
const car2 = new Carconstructor("Mercedes", "E-class", 2019)
// console.log("constructor: ", car1)
// console.log("constructor: ", car2)



// const kingsley = new NewConstructor("Kingsley")
// const ekpa = new NewConstructor("Ekpa")

// // console.log(kingsley.n)
// // console.log(ekpa)


// // explicit binding call, bind, apply
// returnThis()
// returnThis.call("This is the new this") // explicit binding manipulates the this to whatever we want it to be



function useCallMethod(name, title) {
  console.log("Name: ", name, "title: ", title, "This: ", this)
}

const objectToTestCall = {
  name: "Ekpa",
  method: function () {
    console.log(this)
  },
  nestedObject: {
    nested: {
      furtherNested: {
        finalNested: "Final"
      }
    }
  }
}

// console.log(objectToTestCall.nestedObject.nested.furtherNested)



// objectToTestCall.method()
// objectToTestCall.method.call("My This")
// objectToTestCall.method()



// useCallMethod.call("The new This", "Ekpa", "Mister") // call explicit binding
// useCallMethod.apply("The new This", ["Ekpa", "Mister"]) // apply explicit binding
const boundThis = useCallMethod.bind("Bound This", "Ekpa", "Mister") // bind explicit binding



// // aTestObject.age.call(manipulatedThis, "explicit binding", "call")
// // aTestObject.age.apply(manipulatedThis, ["explicit binding", "apply"])



// // subclassing
function Dad(name, age) {
  // debugger
  this.name = name
  this.age = age
}


Dad.prototype.greet = function (){
  return "hey I'm "+this.name
}

const dad1 = new Dad("Michael", 50)
// console.log(dad1)




// const dad2 = new Dad("Peter", 56)

function Child(name, age, favouriteToy){  
  // debugger
  Dad.call(this, name, age)
  this.favouriteToy = favouriteToy
}
Child.prototype = Object.create(Dad.prototype)

// console.log("object created: ", Object.create(Dad.prototype))


const child1 = new Child("John", 10, "Trains")
console.log(child1)
// const child2 = new Child("Sarah", 12, "MedKit")
// const child3 = new Child("Peter", 14, "Airplanes")
// console.log(dad1)
// console.log(child1.greet())


// // create an animal constructor that takes 3 arguments (name, gender, location)
// // subclass this constructor with two categories of animals - can fly and cannot fly
// // create a function canFly() on the Animal constructor that returns the either of the following "Animal can fly"/"Animal cannot fly" depending on whether the animal can fly

// function Animal(name, gender, location){
//   this.name = name
//   this.gender = gender
//   this.location = location
// }

// function CanFly(name, gender, location, fly=true){
//   Animal.call(this, name, gender, location)
//   this.fly = fly
// }

// function CannotFly(name, gender, location, fly=false){
//   Animal.call(this, name, gender, location)
//   this.fly = fly
// }

// const eagle = new CanFly("Eagle", "male", "mountain")
// const deer = new CannotFly("Deer", "male", "Forest")

// // eagle.canFly() // Animal can fly
// // deer.canFly() // Animal cannot fly

// console.log(eagle)

// // es6 classes
// class Animal2 {
//   constructor (name, gender, location){
//     this.name = name
//     this.gender = gender
//     this.location = location
//   }  

//   roar() {
//     return "I can roar"
//   }
//   intro() {
//     return "I am a "+this.gender+" "+this.name
//   }

//   fly(flyStatus) {
//     debugger
//     if(flyStatus) {
//       debugger
//       return "Animal can Fly"
//     }
//     return "Animal cannot Fly"
//   }
// }

// // console.log(lion.intro())

// // subclassing es6
// class SingleAnimal extends Animal2 {
//   constructor (name, gender, location, canFly=false) { //
//     super(name, gender, location)
//     this.canFly = canFly
//   }
  
// }

// const lion = new SingleAnimal("Lion", "Male", "Africa")
// const falcon = new SingleAnimal("Falcon", "Male", "Africa", true)

// console.log(falcon.fly(falcon.canFly))
