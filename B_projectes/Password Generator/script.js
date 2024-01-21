//set
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()-=_+[]{}|;:,.<>?';

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const btn = document.getElementById("btn")

//get random data
const getRandomData = (charSet) => {
    return charSet[Math.floor(Math.random() * charSet.length)];
}

//generatePassword
const generatePassword = (password = " ") =>{

    if (upperInput.checked) {
        password += getRandomData(uppercaseChars)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowercaseChars)
    }
    if (numberInput.checked) {
        password += getRandomData(numberChars)
    }    
    if (symbolInput.checked) {
        password += getRandomData(symbolChars)
    }

    if (password.length < totalChar.value) {
        return generatePassword(password);
    }

    passBox.innerText = truncateString(password,totalChar.value);
}


//truncateString
const truncateString = (str,num)=>{
    if (str.length > num) {
        return str.slice(0,num);
    } else {
        return str
    }
}
//add Event Listener
btn.addEventListener("click",() =>{
    generatePassword();
});