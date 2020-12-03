// Start and Question variables
var startButton = document.getElementById("start-container");
var questionContainer = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
var answersEl = document.getElementById("answer");
var correct = document.getElementById("correct-answer");
var wrong = document.getElementById("wrong-answer");
var currentQuestion = 0;
// Time variables
var score = 0;
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
	}
];