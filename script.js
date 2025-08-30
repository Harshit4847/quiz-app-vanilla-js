let i = 0;
let score = 0;
let countdown;
let timeleft = 30;

const quizdata = {
    "questions": [
        {
            "question": "Duniya ka sabse bada desert kaun sa hai?",
            "options": ["Sahara", "Gobi", "Arabian", "Antarctic"],
            "correctAns": "Sahara"
        },
        {
            "question": "Bharat ki rajdhani kya hai?",
            "options": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
            "correctAns": "Delhi"
        },
        {
            "question": "World Wide Web (WWW) kisne invent kiya?",
            "options": ["Tim Berners-Lee", "Charles Babbage", "Alan Turing", "Bill Gates"],
            "correctAns": "Tim Berners-Lee"
        },
        {
            "question": "Human body me sabse bada organ kaunsa hai?",
            "options": ["Heart", "Lungs", "Skin", "Liver"],
            "correctAns": "Skin"
        },
        {
            "question": "HTML ka full form kya hai?",
            "options": ["Hyper Text Markup Language", "High Transfer Machine Language", "Hyper Transfer Markup Language", "Hyperlinks Text Markup Language"],
            "correctAns": "Hyper Text Markup Language"
        },
        {
            "question": "Bharat ka Rashtriya Pashu kaunsa hai?",
            "options": ["Lion", "Elephant", "Tiger", "Leopard"],
            "correctAns": "Tiger"
        },
        {
            "question": "Google kis year me banaya gaya tha?",
            "options": ["1995", "1998", "2001", "2004"],
            "correctAns": "1998"
        },
        {
            "question": "CPU ka full form kya hai?",
            "options": ["Central Processing Unit", "Computer Personal Unit", "Central Performance Utility", "Control Processing Unit"],
            "correctAns": "Central Processing Unit"
        },
        {
            "question": "Taj Mahal kisne banwaya tha?",
            "options": ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"],
            "correctAns": "Shah Jahan"
        },
        {
            "question": "Bharat ka National Game kaunsa hai?",
            "options": ["Hockey", "Cricket", "Kabaddi", "Football"],
            "correctAns": "Hockey"
        }
    ]
};

const optionBtn = document.querySelectorAll(".options-btn");
let timer;

function quize() {

    clearTimeout(timer);
    clearInterval(countdown);

    if (i < quizdata.questions.length) {

        let question = document.getElementById("que")
        question.textContent = quizdata.questions[i].question;


        optionBtn.forEach((btn, index) => {

            btn.textContent = quizdata.questions[i].options[index];
        });
    startTimer();

    } else {

        showScore(score, quizdata.questions.length);
    }
     
    
}


optionBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
         
        clearTimeout(timer);
        clearInterval(countdown);

        if (btn.textContent == quizdata.questions[i].correctAns) {
            btn.classList.add("correct");
            score++;
        } else {
            btn.classList.add("wrong");
        }

        setTimeout(() => {

            optionBtn.forEach(b => b.classList.remove("correct", "wrong"));

            i++;
            quize();

        }, 2000);

    });

});



quize();

// score diplay page

let quizediv = document.getElementById("quiz");
let scoreDiv = document.getElementById("score");
let finalscore = document.getElementById("scoredisply");
let retryBtn = document.getElementById("retry");

function showScore(score, total) {

    quizediv.style.display = "none";
    scoreDiv.style.display = "block";
    finalscore.textContent = `Your score: ${score} / ${total}`;
}

retryBtn.addEventListener("click", () => {

    clearTimeout(timer);
    clearInterval(countdown);

    scoreDiv.style.display = "none";
    quizediv.style.display = "block";

    i = 0;
    score = 0;

    quize();
});

//timer logic


function startTimer() {
    timeleft = 30;
    document.getElementById("timer").textContent = timeleft;

    countdown = setInterval(() => {
        timeleft--;
        document.getElementById("timer").textContent = timeleft;

        if (timeleft <= 0) {
            clearInterval(countdown);
            clearTimeout(timer);   // ye zaruri hai
            i++;
            quize();
        }
    }, 1000);

    timer = setTimeout(() => {
        clearInterval(countdown);  // ye bhi zaruri hai
        i++;
        quize();
    }, 30000);
}
