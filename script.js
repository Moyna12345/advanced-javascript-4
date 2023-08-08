const questions = [
    {
        question: "Who was the first president of Bangladesh?",
        answers: [
            { text: "Mohammad Abdul Hamid", correct: false},
            { text: "Sheikh Mujibur Rahman", correct: true},
            { text: "Shahabuddin Ahmed", correct: false},
            { text: "Mohammad Shahabuddin", correct: false},
        ]
    },
    {
        question: "What is the job of Bangladesh Minister?",
        answers: [
            { text: "Improves the people of the country", correct: true},
            { text: "Live the country", correct: false},
            { text: "He wants to harm the country", correct: false},
            { text: "Harms the people of the country", correct: false},
        ]  
    },
    {
        question: "Who is the first prime minister of Bangladesh?",
        answers: [
            { text: "Mohammad Abdul Hamid", correct: false},
            { text: "Sheikh Hasina", correct:  false},
            { text: "Sheikh Mujibur Rahman", correct: false},
            { text: "Tajuddin Ahmed", correct: true},
        ]
    },
    {
        question: "Who is the education minister of Bangladesh?",
        answers: [
            { text: "Hasina", correct: false},
            { text: "Dr. Deepu Moni", correct: true},
            { text: "Live the country", correct: false},
            { text: "Tajuddin Ahmed", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scorod 4 out of 4!'; 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();