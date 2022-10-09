const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+"


//selectors
const result = document.getElementById("result")
const totalChar = document.getElementById("length")
const upperInput = document.getElementById("uppercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const clipboard = document.getElementById("copy");


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}


const generatePassword = (password = "") => {
    if(upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value) {
        return generatePassword(password)
    }

    result.innerText = truncateString(password, totalChar.value);
}

generatePassword();


document.getElementById("generate").addEventListener(
    "click", function() {
        generatePassword();
    }
)


clipboard.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const pswd = result.innerText;

    if(!pswd) {
        return;
    }

    textarea.value = pswd;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});


function truncateString(str, num) {
    if(str,length > num) {
        let subStr = str.subString(0, num);
        return subStr;
    } else {
        return str;
    }
}

