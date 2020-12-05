const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const title = document.getElementById('start-container')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')
const questionContainerEl = document.getElementById('question-container')
var score = 0
const questions = [
    {
        question: 'Arrays in JavaScript can be used to store _____.',
        answers: [
            {text: 'Numbers and strings', correct: false},
            {text: 'Other arrays', correct: true},
            {text: 'Booleans', correct: false},
            {text: 'All of the above', correct: false}
        ]
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables.',
        answers: [
            {text: 'Commas', correct: false},
            {text: 'Curly brackets', correct: false},
            {text: 'Quotations', correct: true},
            {text: 'Parentheses', correct: false}
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'Strings', correct: false},
            {text: 'Booleans', correct: false},
            {text: 'Alerts', correct: true},
            {text: 'Numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within _____.',
        answers: [
            {text: 'Quotes', correct: false},
            {text: 'Curly brackets', correct: true},
            {text: 'Parentheses', correct: false},
            {text: 'Square brackets', correct: false}
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
            {text: 'JavaScript', correct: false},
            {text: 'Terminal/bash', correct: false},
            {text: 'For loops', correct: false},
            {text: 'Console log', correct: true}
        ]
    },
]

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

document.getElementById("start-btn").addEventListener("click", function(){
    var timeLeft = 76;
    var interval = setInterval(function(){
      document.getElementById('count').innerHTML=timeLeft;
      timeLeft--;
      if (timeLeft === 0){
        clearInterval(interval);
        document.getElementById('count').innerHTML='Done';
        document.getElementById('count').innerHTML= 'Times up!';
      } 
    }, 1000);
    });

function startGame() {
  console.log('started')
  title.classList.add('hide')
  startBtn.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionEl.innerText = question.question;
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
})
}

function resetState() {
    nextBtn.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.lenght > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        console.log(restart)
        startBtn.classList.remove('hide')
    }
}

 function setStatusClass(element, correct) {
     clearStatusClass(element)
     if (correct) {
     alert("Correct!")
     } else {
     this.timeLeft -= 10;
     alert("Incorrect!")
     }
  }

 function clearStatusClass(element) {
      element.classList.remove('Correct!')
      element.classList.remove('Incorrect!')
  }