const startButton = document.getElementById("start-btn")
let shuffledQuestion, currectQuestion
const questionElement = document.getElementById('question')
const answerBtn = document.querySelector("#answer-buttons")
const questionContainer = document.getElementById('question-container')
const nextBtn = document.querySelector("#next-btn")

startButton.addEventListener('click', startGame)
nextBtn.addEventListener("click", () => {
    currectQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log("Started")
    startButton.classList.add('hide')
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    currectQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()


}

function setNextQuestion() {
    shuffledQuestion(shuffledQuestion[currectQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtn.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextBtn.classList.add("hide")
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(buttoccn, button.dataset.correct)
    })
    if (shoffledQuestion.lenght > currectQuestionIndex + 1) {
        nextBtn.classList.remove('hide')

    }
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: ' What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: ' What is 2 * 8?',
        answers: [
            { text: '4', correct: true },
            { text: '16', correct: false }
        ]
    },
    {
        question: ' What is 8 + 2?',
        answers: [
            { text: '10', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: ' What is 7 * 4?',
        answers: [
            { text: '56', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: ' What is 91 - 9?',
        answers: [
            { text: '82', correct: true },
            { text: '22', correct: false }
        ]
    },
]