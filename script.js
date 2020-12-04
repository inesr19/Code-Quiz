// Variables
var startButton = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
var answersEl = document.getElementById("answer");
var correct = document.getElementById("correct-answer");
var wrong = document.getElementById("wrong-answer");
var currentQuestion = 0;
// Time variables
var score = 0;
// Question and answers object
var questionsEl = [
	{
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
		answer: 1
 
	},
	{
		question: "String values must be enclosed within _____ when being assigned to variables.",
		answers: ['Commas','Curly brackets','Quotations','Parentheses'],
		answer: 2
    },
    {
		question: "Commonly used data types DO NOT include:",
		answers: ['Strings, Booleans, Alerts, Numbers'],
		answer: 2
    },
    {
		question: "The condition in an if / else statement is enclosed within _____.",
		answers: ['Quotes, Curly brackets, Parentheses, Square brackets'],
		answer: 1
    },
    {
		question: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answers: ['JavaScript, Terminal/bash, For loops, Console log'],
		answer: 3
    },
    
];

//Start container function (tried to hide the dispaly of this container using css)
function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    showQuestion(currentQuestion);
   }

// Timer function
document.getElementById("start-button").addEventListener("click", function(){
var timeLeft = 76;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=timeLeft;
  timeLeft--;
  if (timeLeft === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    document.getElementById('count').innerHTML= 'Times up!';
  }
}, 1000);
nextQuestion();
});

// displays question and answers within the buttons and apporpriate id.
function showQuestion(index) {
    questionTitle.textContent = questionsEl[index].question;
    for (var i=0; i < questionsEl[0].choices.length; i++){
        var answer = document.getElementById("answer" + (i + 1))
        answer.textContent = questionsEl[0].choices[i];
    }
} 

// Tried to make this function check if the user chose the right answer and display correct or incorrect text.
// Adding or subtracting time for answer chosen.
function checkQuestion() {
    if(this.value !== questionsEl[index].answer) {
        timeLeft -= 10;
        wrong.textContent = "Incorrect!"
        console.log("correct")
    } else if(this.value === questionsEl[index].answer){
        timeLeft += 10;
        correct.textContent = "Correct!"
    }
    currentQuestion ++

    setTimeout(function(){
        nextQuestion();
    }, 1000)
}

// Event Listener
startButton.addEventListener("click", startQuiz)
answersEl.addEventListener("click", showQuestion)



// Entry point
showQuestion(currentQuestion);