const add = (a,b)  =>  a + b;
const subtract = (a,b)  =>  a - b;
const multiply = (a,b)  =>  a * b;
const divide = (a,b)  =>  a / b;



function operate(a,operator,b) {
    return operator(a,b)
}
console.log(operate(5,divide,5))