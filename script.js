const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const result = document.getElementById("result")
const totalChar = document.getElementById("length")
const upperInput = document.getElementById("uppercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    result.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("generate").addEventListener(
    "click",
    function() {
        generatePassword();
    }

)


function truncateString(str, num) {
<<<<<<< HEAD
    if (str.length > num) {
        let subStr = str.substring(0, num);
=======
    if(str.length > num) {
        let subStr = str.subString(0, num);
>>>>>>> cbd8774a911767263a9434e94a598f5f20461e66
        return subStr;
    } else {
        return str;
    }
}