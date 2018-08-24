const num1 = document.getElementById("num1");
console.log(num1);

const input = document.getElementById("num-input");

const backspaceButton = document.getElementById('backspace');
backspaceButton.onclick = () => {
    if (input.value.length === 1) {
        input.value = '0';
    }
    else {
        input.value = input.value.slice(0, -1);
        num = 0;
    }
};


//
// const num2 = document.getElementById("num2");
//
// num2.onclick = () => {
//     enterNumber(2)
// };




const numButtons = document.getElementsByClassName('num-button');

for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}


const dotButton = document.getElementById('dotButton');

dotButton.onclick = () => {
    const n = input.value.length;
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i] === '.') {
            return;
        }
    }
    input.value += '.'
};

let num = 0;
let p= false;
let lop=null;
const plusButton = document.getElementById('plusButton');
plusButton.onclick = () => {
    if (num == null) {
        op = '+';
        console.log('+');
        return
    }
};


const enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        if (p) {
            num = parseFloat(input.value);
            input.value = (n);
            p = false;
        } else {
            input.value = input.value + n;
        }
    }
};

const dispatchOperation = (operation) => {
    if (lop) {
        if (!p) {
            num = processOperation(lop, num, parseFloat(input.value));
            input.value = num;
        }
    }


    p = true;
    lop = operation;
};


const processOperation = (operation, argument1, argument2) => {
    switch (operation) {
        case '+':
            return argument1 + argument2;
        case '-':
            return argument1 - argument2;
        case 'X':
            return argument1 * argument2;
        case '/':
            return argument1 / argument2;


    }

};


const operationButtons = document.getElementsByClassName('operation-button');
[].forEach.call(operationButtons, (button) => {
    button.onclick = () => {
        dispatchOperation(button.textContent);
    }
});










// DOM- DOCUMENT OBJECT MODEL
// BOM Browser Object Model
