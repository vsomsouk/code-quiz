// Variables
var quiz = document.getElementById("quiz");
var counter = document.getElementById("counter");
var start = document.getElementById('start');
var question = document.getElementById("question");
var firstanswer = document.getElementById("firstanswer");
var secondanswer = document.getElementById("secondanswer");
var thirdanswer= document.getElementById("thirdanswer");
var fourthanswer= document.getElementById("fourthanswer");
var questionTime = 75;
let timeLeft = 75;
let currentQuestionPosition = 0;
let score = 0;
let result = document.getElementById("result");


//Show questions
function displayQuestion() {
    let currentQuestion = questions[currentQuestionPosition];
    question.innerHTML = currentQuestion.question;
    firstanswer.innerHTML = currentQuestion.firstanswer;
    secondanswer.innerHTML = currentQuestion.secondanswer;
    thirdanswer.innerHTML = currentQuestion.thirdanswer;
    fourthanswer.innerHTML = currentQuestion.fourthanswer;
}

//Timer once quiz starts
function startQuiz() {
    start.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
    setInterval (displayTimeLeft, 1000);
}
function displayTimeLeft() {
    counter.innerHTML = timeLeft
    timeLeft = timeLeft - 1;
}

// User selects an answer
//If answer is correct, increase time on timer (5 seconds)
function checkAnswer(answerPosition) {
    // answerPosition: 'fourthanswer'
    // currentQuestion.correct: 'fourthanswer'
    //if.. answer is correct, score + time goes up 
    let currentQuestion = questions[currentQuestionPosition];
    let noQuestionsLeft = !currentQuestion;
    if(noQuestionsLeft) {
        return endGame();
    }
    let isCorrect = answerPosition === currentQuestion.correct;
    if (isCorrect) {
        score = score + 10;
        timeLeft = timeLeft + 5;
    }
    // else..answer is wrong, lose time (10 seconds)
    else {
        timeLeft = timeLeft - 10;
    }

    // go to next question
    currentQuestionPosition = currentQuestionPosition + 1;
    displayQuestion()
}

function endGame() {
    // hide game
    quiz.style.display = "none";
    clearInterval(timeLeft);

    // show score
    result.innerHTML = score
    // alert('Congrats! your score is: ' + score);
}



