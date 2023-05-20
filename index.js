// // 1.Prototypal inheritance
// const animal = {
//     "head": true,
//     "leg": true,
//     "hand": true,
//     "walk": "yes"
// }

// const human = {
//     __proto__: animal,
//     "hand": "2"
// }

// console.log(human.hand);//2
// console.log(human.head);//true

// console.log(`----------------------------------------------------------------------------------------------------------------`)


// //2. advance working with javascript
// //1) rest parameter --- it creates a array to store no. of parameter

// function print(...args) {
//     console.log(args)
// };

// print(1, "atul", true, null); //[ 1, 'atul', true, null ]

// console.log(`----------------------------------------------------------------------------------------------------------------`)

// //2) spread operator --- it is used to access all values of array,Map,set & turns array into a list of arguments

// const array = [1, "atul", true, null];
// const array2 = [99.999, false, ...array]
// console.log(array2)
// console.log(`----------------------------------------------------------------------------------------------------------------`)
// //3) clouser --- inner funtion can access outer functions variable

// function variable() {
//     let a = "In clouser inner function can access outer function's variable";
//     const func = function variable2() {
//         console.log(a)
//     }
//     return func()
// }

// variable();
// console.log(`----------------------------------------------------------------------------------------------------------------`)
// //4) function object --- function is typeof object, so it has object methods like name,length

// console.log(typeof variable)
// console.log(variable.name)
// console.log(variable.length)

// console.log(`----------------------------------------------------------------------------------------------------------------`)

// //5) Name function expression 

// const func = function func() {
//     console.log("NFE or name function expression")
// }

// func()
// console.log(`----------------------------------------------------------------------------------------------------------------`)

// //6) new function syntax

// const newFunction = new Function('...param', 'return param')
// console.log(newFunction(1, 2, 3))

// //7) setTimeout and setInterval ---- it takes time in miliseconds

// setTimeout(() => {
//     console.log("set time out")
// }, 1000)

// // setInterval(()=>{console.log('set time interval')},2000)

// //8) decorators --- it wraps a function in another function

//example 1
// let sum=(...args)=>{
//     return [...args].reduce((curr,next)=>{return curr + next}
//     )
// }

// const callCounter=(func)=>{
//     let count =0;

//     return (...args)=>{
//         console.log(`call ${count+=1} times`)
//         return func(...args)
//     }
// }

// hello = callCounter(sum);
// // console.log(sum)
// hello(175,50,25);


// //example 2
// let rectangleArea = (l, w) => {
//     return l * w;
// }

// const valid = (func) => {
//     return (...params) => {
//         params.forEach(param=>{
//             if(!Number.isInteger(param)){
//                 throw new TypeError (`the parameters are not integer`);
//             }
//         });
//         return func(...params);
//     }
// }

// rectangleArea = valid(rectangleArea);
// console.log(rectangleArea(2, 2))


//9) call/apply/bind --- the methods applies on objects

// const detailsPerson ={
//     firstname:"ARUN",
//     lastname:"PAL",
//     fullname: function(city,country){
//         return `${this.firstname} ${this.lastname} ${city} ${country}`
//     }
// };

// const person1 = {
//     firstname : "ATUL",
//     lastname:"PAL"
// };

// console.log(detailsPerson.fullname.bind(person1)())//it does not takes parameters
// console.log(detailsPerson.fullname.apply(person1,['mumbai','INDIA']));//it takes context and array
// console.log(detailsPerson.fullname.call(person1,'Dehli'));//it takes list of items

// 3. classes

// class Clock {
//     constructor({template}) {
//         this.template = template
//     }
//     render() {
//         let date = new Date();
//         let hours =date.getHours();
//         let min =date.getMinutes();
//         let seconds = date.getSeconds();
//         let output = this.template.replace('h',hours).replace('m',min).replace('s', seconds);
//         console.log(output)
//     }

//     start() {
//         this.render();
//         setInterval(() => this.render(), 1000);
//     }
// }


// // let clock = new Clock({ template: 'h:m:s' });
// // clock.start()


// // class inheritance

// class Whatstime extends Clock{

//     time(){
//         console.log(clock.start())
//     }

//     start() {
//         super.render();
//         setInterval(() => super.render(), 2000);
//     }
// }

// let tellTime =new Whatstime({template:'h:m:s'});
// tellTime.start()

//static method

// class Human{
//     static name='atul'
// }

// console.log(Human.name)

// protected methods denoted with _protectedMethod and it can be created using getter and setter methods
//private methods are created using #PrivateMethod


//data types --- Map() & set()

// const map = new Map();
// map.set(1,"Atul");
// map.set(2,"Arun");
// map.set(3,'suraj');
// let output =map.get(3);
// let check = map.has(1) //it only checks key not value
// let deteleItem =map.delete(2);
// // let clearMap = map.clear()
// let mapSize = map.size
// console.log(mapSize)



// const set =new Set();
// let setResult=set.add(['suraj',1,true,12.56e4]);
// console.log(setResult)

//objects

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// console.log(Object.entries(salaries))
// console.log(Object.keys(salaries))

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let value of Object.values(salaries)) {
//         sum+=value;
//     }
//     return `$${sum}`
// }
// console.log(sumSalaries(salaries)); // 650


//currying

// function curry(func){
//     return function(a){
//         return function(b){
//             return func(a,b)
//         }
//     } 
// }

// function sum(a,b){
//     return a+ b
// }

// let curriedSum=curry(sum);
// console.log(curriedSum(2)(3))

// //promise,async ,await

// function delay(ms) {
//     return new Promise((resolve)=>{setTimeout(resolve,ms);})
//   }
  
//   delay(3000).then(() => console.log('runs after 3 seconds')).catch((e)=>console.log(e))



async function getPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    return data;
  }

  getPokemonData(1)
    .then(pokemonData => {
      const pokemonName = pokemonData.name;
      console.log('Pokémon Name:', pokemonName);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  