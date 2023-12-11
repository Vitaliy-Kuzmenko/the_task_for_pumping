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
    const currentQs = qs //Временный массив вопросов
    const currentAn = an //Временный массив ответов
    const indexArr = getRandomInRange(0, currentQs.length-1) //случайный выбор вопроса из длины массива
    
    divQuestion.innerHTML = currentQs[indexArr] //вывод вопроса

    btnCheckAnswer.onclick = ()=>{
       
        //проверка на пустую строку, либо число
        if (inpAnswer.value == ''|| +inpAnswer.value){
            alert("ОШИБОЧКА! Пустая строка или число")
        }else console.log('всё норм')

        const lowerCase = inpAnswer.value.toLowerCase() // перевод введённого ответа в нижний регистр
        
        //проверка ответа
        if (currentAn[indexArr] === lowerCase){
            divQuestion.innerHTML = 'ВСЁ ВЕРНО!'
            currentAn.splice(indexArr, 1) //удаление ответа если он был правильный
            currentQs.splice(indexArr,1) // удаление вопроса если ответ правильный
            console.log(currentQs)
            console.log(currentAn)
        } else  divQuestion.innerHTML = `${'ОШИБОЧКА! Вопрос был...'}<p>${currentQs[indexArr]}</p> `
    }
    //показ правильного ответа
    btnShowAnswer.onclick = ()=>{
        divQuestion.innerHTML = `${'Эх ты... Всё было очень просто'}<p>${currentAn[indexArr]}</p> `
    }
    if(currentQs.length === 0){
        console.log('Пусто')
    } else {
        console.log("Осталось вопросов" + currentAn.length )
    }
}

btnStartGame.onclick = () =>{
    fnGame(arrQstions, arrAnswers)
}

