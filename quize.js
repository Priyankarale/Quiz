const quizeDB=[
    {
        question:"Q1:what is the full form ofHTML?",
        a:"hello to my Land",
        b:"hey text markup",
        c:"Hypetext Markup Language",
        d: "hupertext mark language",
        ans:"ans3"
    },
    {
        question:"Q2:what is the full form of CSS?",
        a:"Cascading style sheets",
        b:"Cascading style sheep",
        c:"Cascading style sheet",
        d: "Cascading super sheets",
        ans:"ans1"
    },

    {
        question:"Q3:What is the full form of SQL",
        a:"Structured Query Language",
        b:"Structured Query List",
        c:"Simple Query Language",
        d: "None of these",
        ans:"ans1"
    },
    {
        question:"Q4:Which type of JavaScript language is",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d: "High-level",
        ans:"ans2"
    },


    {
        question:"Q5:Junk e-mail is also called ",
        a:"Spam",
        b:"Spoof",
        c:"jSpool",
        d: "Sniffer script",
        ans:"ans1"
    }

];

const question =document.querySelector('.question');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const submit =document.querySelector('#submit');

const showScore=document.querySelector('#showScore');

const answers=document.querySelectorAll('.answer');


let questionCount=0;
let score=0;
const loadQuestion= () =>
{
    const questionList  = quizeDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();


const getCheckanswer= ()=>
{
    let answer;
    answers.forEach((answerEle) => {
        if(answerEle.checked)
        {
            answer=answerEle.id;
        }
        
    });
    return answer;


};
const deselect=() =>
{
    answers.forEach((curEle)=>curEle.checked=false);
}

submit.addEventListener('click', () => 
{
    const ckeckAnswer=getCheckanswer()
    console.log(ckeckAnswer);

    if(ckeckAnswer===quizeDB[questionCount].ans)
    {
        score++;
    };
    questionCount++;
    
    deselect();


    if(questionCount < quizeDB.length)
    {
        loadQuestion();
    }

    else
    {
        showScore.innerHTML=` <h3>You Scored ${score}/${quizeDB.length} </h3>

        <button class="btn" onclick="location.reload()">Play Again</button>`;

        showScore.classList.remove('ShowArea');
        
    }
   

});