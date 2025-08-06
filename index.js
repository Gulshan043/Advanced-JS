// Here are examples of some concepts that we are learning you use code runner extention of vs code to run the following code directly

//#region Scope In Js

// // 1) Block Scope
// let i = 10;
// if (i > 0) {
//     let a = 'i is greater then zero'
//     console.log(a)
// }
// console.log(i)
// // console.log(a) // a will get not defined beacause it is inside if block

// // 2) Fucntion Scope
// let a = 'this a is outside of following function'
// console.log('line number 14: ', a)
// function abcd() {
//     let a = 'this a is inside this funtion'
//     console.log('line number 17: ', a)
// }
// abcd()

// // 3) Global Scope
// let b = 'this variable is not inside of any funtion or any block({}) and it is accesible globally'
// console.log(b)

//#endregion Scope In Js

//#region Execution Context
// // Global Execution Context starts here
// var name = "World";  // Memory allocated, initially undefined → then "World"

// // Function Declaration (hoisted with full definition)
// function greet() {
//     // New Function Execution Context is created when this runs
//     console.log("Hello " + name);  // Accesses `name` from the outer/global scope
// }

// // Function Execution Context created on this line
// greet();  // Output: Hello World

//#endregion Execution Context

//#region Lexical Scope In Js
// const val = 'outside of lexical'
// console.log(val)
// function lexical() {
//     const val = 'inside lexical function'
//     function innerLexical() {
//         console.log(val)
//     }
//     innerLexical()
// }

// lexical()
// as we know JavaScript uses lexical scoping so we cannot write dynamic scoping example in JS

//#region Closures In JS
const outer = () => {
    const val = 'outer fucntion variable'
    const inner = () => {
        const val2 = `I am inner funtion variable accessing my ${val}`
        console.log(val)
        console.log(val2)
    }
    inner()
}

outer()