// QUESTIONS AND ANSWERS

const quest = [
    {
        qst: 'You have a match, a candle, a fireplace, and a gas stove. What do you light first?',
        ans: ["Candle", "Fireplace", "Gas stove", "Match"],
        crct: "Match"
    },
    {
        qst: "If a plane crashes on the border of the U.S. and Canada, where do they bury the survivors?",
        ans: ["U.S.", "Canada", "in the country where the crash occurred", "Nowhere"],
        crct: "Nowhere"
    },
    {
        qst: "You see a house with two doors. One door leads to certain death, and the other to freedom. There are two guards. One always tells the truth, and the other always lies. You can ask only one question. What do you ask to find the door to freedom?",
        ans: ["Which door will lead me to freedom?", "If I were to ask the other guard which door leads to freedom, what would they say?", "Which door is the truth-teller guarding?", "What’s the best way out of here?"],
        crct: "If I were to ask the other guard which door leads to freedom, what would they say?"
    },
    {
        qst: "If you have 6 eggs and you break 2, fry 2, and eat 2, how many eggs are left?",
        ans: ["0", "2", "4", "6"],
        crct: "2"
    },
    {
        qst: "The more you take, the more you leave behind. What am I?",
        ans: ["Footsteps", "Time", "Money", "Knowledge"],
        crct: "Footsteps"
    },
    {
        qst:"A farmer had 17 sheep, and all but 9 ran away. How many sheep does the farmer have left?",
        ans:["8","9","17","none"],
        crct:"9"
    },
    {
        qst:"If 5 cats can catch 5 mice in 5 minutes, how long will it take 100 cats to catch 100 mice?",
        ans:["5 minutes","100 minutes","50 minutes","1 minute"],
        crct:"5 minutes"
    },
    {
        qst:"What comes at the end of everything?",
        ans:["Death","The letter G"," A conclusion","Time"],
        crct:"The letter G"
    },
    {
        qst:"Divide 30 by half and add 10. What do you get?",
        ans:["15","20", "70","50"],
        crct:"70"
    },
    {
        qst:"You buy a shirt for $97. You pay $100 and get $3 change. Later, you sell the shirt for $100. How much profit did you make?",
        ans:["$3","$97", "$100","$6"],
        crct:"$3"
    }


]





const instrbtn = document.getElementById('instrbtn')
let n = 0

instrbtn.addEventListener('click', () => {
    const instrpage = document.getElementById('instrpage')
    instrpage.style.display = 'none'

    const quizarea = document.getElementById('quizarea')
    quizarea.style.display = 'block'


    changeinner(n)


})

window.addEventListener('beforeunload', (event) => {
    // Clear quiz state
    localStorage.removeItem('quizState'); // or sessionStorage
    // Optionally, show a confirmation (not all browsers allow this anymore)
    event.preventDefault();
    event.returnValue = ''; // Required for Chrome and some other browsers
});
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        alert('You switched tabs! Returning to the quiz will reset your progress.');
        // Reset the quiz or deduct points
        resetQuiz();
    }
});

function resetQuiz() {
    localStorage.removeItem('quizState'); // Clear saved quiz state
    location.reload(); // Reload the page to reset the quiz
}

function nextchoice() {
    if (n < quest.length - 1) {
        n++;
        console.log(n);
        
        changeinner(n)
    } else {
        const quizarea = document.getElementById('quizarea')
    quizarea.style.display = 'none'

    const score = document.getElementById('scores')
    score.style.display = 'block'
    score.innerHTML =  `<div class="screboard">
        <div class="jishnu">
          <h1>CONGRATULATIONS</h1>
          <div class="round">
                  <h4 class="text-center">YOUR SCORE <br> <span class="scorespan text-center">${sco}</span></h4>

          </div>
        <div>
          <a href="./index.html"><button id="tryagain">Try Again</button></a>
          
        </div>
        <p class="noone">send me the screenshot!</p>
        <div class="loginicons">
            
            <a href="https://www.instagram.com/jishnuu.m_?igsh=YXlwc3hzbG9leG1n"><i class="bi bi-instagram text-black"></i></a>
            <a href="https://www.linkedin.com/in/jishnu-m-a9700a324?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BxsVtQEATaGupTyXsYmWsw%3D%3D" target="_blank"> <i class="bi bi-linkedin text-black"></i></a>
            <a href="https://wa.me/+918590973413"><i class="bi bi-whatsapp text-black"></i></a>

          </div>

        </div>
        
      </div>
      `

 
    }
}

function changeinner(num) {
    const quizareaafter = `<div class="quizareabox">
        <div class="questions">
          <p>${quest[num].qst}</p>
        </div>
        <div class="answers" >
          <p class="answerss">${quest[num].ans[0]}</p>
          <p class="answerss">${quest[num].ans[1]}</p>
          <p class="answerss">${quest[num].ans[2]}</p>
          <p class="answerss">${quest[num].ans[3]}</p>
        </div>
        <div class="number">
          <p class="text-start jis text-center">    question ${num + 1} : ${quest.length}</p>
          <button id="nextbtn">Next</button>

        </div>

      </div>`


    quizarea.innerHTML = quizareaafter

    const answersss = document.querySelectorAll('.answerss')
    answersss.forEach((choice) => {

        choice.addEventListener('click', () => handleChoiceClick(choice, quest[num].crct))
    });
    const nxtbtn = document.getElementById('nextbtn')
    nxtbtn.addEventListener('click', nextchoice)

}
let sco = 0;

function handleChoiceClick(choices, correctAnswer) {
    const answersss = document.querySelectorAll('.answerss');

    // Disable all answers to prevent multiple selections
    answersss.forEach((choice) => {
        choice.style.pointerEvents = 'none';
    });
   


    if (choices.innerText === correctAnswer) {
        sco++;
        choices.style.backgroundColor = 'green';

    } else {
        choices.style.backgroundColor = 'red';
    }

}
