// start Button 
var startbtn = document.querySelector(".start-btn");
startbtn.addEventListener("click", function() {
    var homePage = document.getElementById("home");
    homePage.style.display = "none";
    var quizPage = document.querySelector(".hide");
    quizPage.style.display = "flex";
})


var Quiz = [
    {
        question: "What is the largest planet in the solar system?",
        a: 'Earth',
        b: 'Mars',
        c: 'Jupiter',
        d: 'Saturn',
        correct: "c"
    },
    {
        question: "What is the fastest land animal?",
        a: 'cheetah',
        b: 'monkey',
        c: 'Dog',
        d: 'Cat',
        correct: "a"
    },
    {
        question: "What is the largest organ on the human body?",
        a: 'Liver',
        b: 'Brain',
        c: 'Heart',
        d: 'Skin',
        correct: "d"
    },
    {
        question: "How many planets are in the solar system?",
        a: '10',
        b: '8',
        c: '11',
        d: '9',
        correct: "b"
    },
];

var currentQ = 0;
var score = 0;
const submitform = document.querySelector(".endgame");
const questionEl = document.querySelector(".text");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const btn = document.querySelector(".submit");
const numQ = document.querySelector(".numQ");
const answerEls = document.querySelectorAll(".input-css");
const timer = document.querySelector(".time");
var timeleft = 30;
function countdown() {
    

    var timeInterval = setInterval(function(){
        if(currentQ < Quiz.length && timeleft >= 0){
            timer.textContent = timeleft;
            timeleft--;
        }
        else{
            clearInterval(timeInterval);

        }
        return timeleft;
        
    }, 1000)
}

var loadQuiz = function(){
    clear();
    const currentQD = Quiz[currentQ];
    const index = currentQ + 1;
    numQ.textContent = index;
    questionEl.textContent = currentQD.question;
    a_text.textContent = currentQD.a;
    b_text.textContent = currentQD.b;
    c_text.textContent = currentQD.c;
    d_text.textContent = currentQD.d;
    
    
}
loadQuiz();

var getSelected = function(){
    var answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer =  answerEl.id;
        }
    })
    return answer;
}

function clear(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


btn.addEventListener("click", function() {
    const ans = getSelected();
    
    if(ans){  
        if(ans === Quiz[currentQ].correct){
            score++;
            
        }
        
        currentQ++;
        if(currentQ < Quiz.length){
            loadQuiz();
        }
        else{
            alert("You've done it with a score of " +  score + " with a " + timeleft + " left")
        }
    }
    
})


startbtn.onclick = countdown;



