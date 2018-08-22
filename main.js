const num1 = document.getElementById("num1");
console.log(num1);

const input = document.getElementById("num-input");

const backspaceButton = document.getElementById('backspace')
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

const numButtons = document.getElementsByClassName('num-button')

for (let i = 0; i < numButtons.length; i++) {
    const button = numButtons[i];
    const num = button.textContent;
    button.onclick = () => {
        enterNumber(num)
    }
}


// DOM- DOCUMENT OBJECT MODEL
// BOM Browser Object Model
