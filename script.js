const inputFirstNum = document.getElementById("first_number");
const inputSecondNum = document.getElementById("second_number");
const printResults = document.getElementById("results");
const btnResults = document.getElementById("btn_sumbit");

function checkInput() {
    console.log(isNaN(Number(inputFirstNum.value, 10)))
    if (isNaN(Number(inputFirstNum.value, 10))) {
        return console.log("It's not a number");
    } else console.log("It's number");
    console.log(inputFirstNum.value);
    console.log(inputSecondNum.value);
    console.log(typeof inputFirstNum.value);
    
    printResults.innerHTML = inputFirstNum.value * inputSecondNum.value;
}

btnResults.onclick = () => {
    checkInput();
};


// Угадай слово по вопросу
//тест коммита
