const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const questionContainerElement=document.getElementById
('question-container')
const questionElement=document.getElementById
('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestion,currentQuestionIndex
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=> {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText=question.question
question.answers.forEach(answer=> {
    const button=document.createElement('button')
    button.innerText=answer.text
    button.classList.add('btn')
    if (answer.correct){
       button.dataset.correct=answer.correct 
    }
    button.addEventListener('click', selectAnswer) 
    answerButtonsElement.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button=> {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length>currentQuestionIndex+1) {

    
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false },
        { text: '4242', correct: false },
        { text: '31', correct: false }
      ]
    },
    {
      question: 'What is the capital of Finland?',
      answers: [
        { text: 'Helsinki', correct: true },
        { text: 'Dubai', correct: false },
        { text: 'Stockholm', correct: false },
        { text: 'Amsterdam', correct: false }
      ]
    },
{
    question: 'In which European city would you find Orly airport?',
    answers: [
      { text: 'Helsinki', correct: false},
      { text: 'Paris', correct: true},
      { text: 'Stockholm', correct: false },
      { text: 'Amsterdam', correct: false }
    ]
  },
  {
    question: 'In the United Kingdom, what is the day after Christmas known as?',
    answers: [
      { text: 'Easter', correct: false},
      { text: 'Wrestling Day', correct: false},
      { text: 'Boxing Day', correct: true },
      { text: 'Unboxing Day', correct: false }
    ]
  },
  {
    question: 'How many ribs are in a human body?',
    answers: [
      { text: '32', correct: false},
      { text: '22', correct: false},
      { text: '17', correct: false},
      { text: '24', correct: true }
    ]
  },
  {
    question: 'What does “www” stand for in a website browser?',
    answers: [
      { text: 'World Wide Web', correct: true},
      { text: 'World Web window', correct: false},
      { text: 'Wild wild west', correct: false},
      { text: 'Worldwide Washington Web', correct: false }
    ]
  },
  {
    question: 'What is "cynophobia"?',
    answers: [
      { text: 'Fear of Cinema', correct: false},
      { text: 'Fear of Frogs', correct: false},
      { text: 'Fear of Fear', correct: false},
      { text: 'Fear of Dogs', correct: true }
    ]
  }]
  
  
    
  