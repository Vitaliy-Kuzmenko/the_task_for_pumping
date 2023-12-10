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

const arrQstions = ['Собака говорит', 'Кошка говорит','Корова говорит']
const arrAnswers = ["гав", 'мяу', 'му']

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const fnGame = (qs,an) =>{
    const indexArr = getRandomInRange(0, 2)
    
    divQuestion.innerHTML = arrQstions[indexArr]

    btnCheckAnswer.onclick = ()=>{
        if (inpAnswer.value == ''|| +inpAnswer.value){
            alert("ОШИБОЧКА! Пустая строка или число")
        }else console.log('всё норм')

        const lowerCase = inpAnswer.value.toLowerCase()
        if (arrAnswers[indexArr] === lowerCase){
            divQuestion.innerHTML = 'ВСЁ ВЕРНО!'
        } else  divQuestion.innerHTML = `${'ОШИБОЧКА! Вопрос был...'}<p>${arrQstions[indexArr]}</p> `
    }
    btnShowAnswer.onclick = ()=>{
        divQuestion.innerHTML = `${'Эх ты... Всё было очень просто'}<p>${arrAnswers[indexArr]}</p> `
    }
}

btnStartGame.onclick = () =>{
    fnGame()
}

