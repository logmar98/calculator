const add = (a,b)  =>  a + b;
const subtract = (a,b)  =>  a - b;
const multiply = (a,b)  =>  a * b;
const divide = (a,b)  =>  a / b;

function operate(a,operator,b) {
    return operator(a,b)
}
console.log(operate(5,divide,5))

const screen = document.querySelector('.content')

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    screen.textcontent = `${button.id}`;
    console.log(button.id);
  });
});