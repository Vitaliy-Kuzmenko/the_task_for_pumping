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
const btnStartGame = document.getElementById('btn_show_question')
const btnCheckAnswer = document.getElementById('btn_check_answer')
const btnShowAnswer = document.getElementById('btn_show_answer')
const inpAnswer = document.getElementById('answer')
const divQuestion = document.getElementById('question')

const arrQstions = ['Цифра 1', 'Цифра 2','Цифра 3']
const arrAnswers = [1, 2, 3]

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const fnGame = (qs,an) =>{
    const indexArr = getRandomInRange(0, 3)
    divQuestion.innerHTML = arrQstions[indexArr]   
    console.log(indexArr)
   
}

btnStartGame.onclick = () =>{
    fnGame()
}


