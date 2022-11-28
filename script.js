const add = (a,b)  =>  a + b;
const subtract = (a,b)  =>  a - b;
const multiply = (a,b)  =>  a * b;
const divide = (a,b)  =>  a / b;

function res(x){
    switch (x) {
        case 'add':
             return add;
            break;
        case 'subtrack':
             return subtract;
            break;
        case 'multiply':
             return multiply;
            break;
        case 'divide':
             return divide;
            break;
    }
}
function operate(a,operator,b) {
    a = Number(a)
    b = Number(b)
    return operator(a,b)
}
//console.log(operate(5,divide,5))

const screen = document.querySelector('.content')
let value = '';
let number = '';
let num = []; 
let operat = '';

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    
    let id = `${button.id}`;
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        function calculator(){
            if(id == 'clear') {
                value = '';
                number = '';
                num = []; 
                operat = '';
                screen.textContent = value ;

            }else{
                if(id == 'multiply' ||id == 'divide' ||id == 'add' || id == 'subtrack' ||id == 'equal'){
                    if(number != '') num.push(number);
                    if(num.length == 2){
                        num[0] = operate(num[0] ,res(operat) ,num[1]);
                        num.pop();
                        if(id == 'equal'){
                            value = num[0];
                            screen.textContent = num[0];
                        }
                    }
                    number = '';
                    operat = id;
                }else{
                    number += `${button.value}`;
                }
                console.log(num);
                console.log(operat);
                if(id != 'equal' ) value += `${button.value}`;
                screen.textContent = value ;
            }
        }
        calculator();
    });
});