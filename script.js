// Variables
var quiz = document.getElementById("quiz");
var start = document.getElementById("start");
var counter = document.getElementById("counter");
var question = document.getElementById("question");
var questionTime = 75;
let timeLeft = 75;
let currentQuestion = 0;
let score = 0;




//Event listener for start button
counter.addEventListener("click", startQuiz) 

//Show questions
function displayQuestion() {
    let quizQuesion = questions[currentQuestion];
    question.innerHTML = quizQuestion.question;
    firstanswer.innerHTML = quizQuestion.firstanswer;
    secondanswer.innerHTML = quizQuestion.secondanswer;
    thirdanswer.innerHTML = quizQuestion.thirdanswer;
    fourthanswer.innerHTML = quizQuestion.fourthanswer;

}

//Timer once quiz starts
function startQuiz() {
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

