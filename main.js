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
    }
};


//
// const num2 = document.getElementById("num2");
//
// num2.onclick = () => {
//     enterNumber(2)
// };


enterNumber = (n) => {
    if (input.value === '0') {
        input.value = n;
    } else {
        input.value = input.value + n;
    }
};

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
const n = input.value.length ;
for (let i = 0; i < input.value.length; i++){
    if (input.value[i]==='.'){
        return;
    }
}
input.value+='.'
};

let num =null;
let op =null;
const plusButton = document.getElementById('plusButton');
plusButton.onclick = () => {
    if(num==null){
        op='+';console.log('+');
        return
    }

};





// DOM- DOCUMENT OBJECT MODEL
// BOM Browser Object Model
