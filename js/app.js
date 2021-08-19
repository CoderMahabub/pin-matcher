function getPin() {
    const pin = Math.round(Math.random() * 10000);
    // Generate 4 digits pin and hide less than 4 digits pin
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log('3 digits');
        return getPin();
    }
};

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    console.log(pin);
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failedMessage = document.getElementById('notify-failed');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
    } else {

        failedMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
}