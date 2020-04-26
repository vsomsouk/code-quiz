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
let currentQuestion = 0;
let score = 0;


//Show questions
function displayQuestion() {
    let quizQuestion = questions[currentQuestion];
    question.innerHTML = quizQuestion.question;
    firstanswer.innerHTML = quizQuestion.firstanswer;
    secondanswer.innerHTML = quizQuestion.secondanswer;
    thirdanswer.innerHTML = quizQuestion.thirdanswer;
    fourthanswer.innerHTML = quizQuestion.fourthanswer;
}

//Timer once quiz starts
function startQuiz() {
    console.log('whee this started');
    start.style.display = "none"
    quiz.style.display = "block";
    displayQuestion();
    displayTimeLeft ();
    timer = setInterval (displayTimeLeft, 1000);
}
// User selects an answer
//If answer is correct, increase time on timer (5 seconds)

//If answer is incorrect, decrease time on timer (5 seconds)


// Quiz is over, high score page will show 

//Submit name and add to high score page

