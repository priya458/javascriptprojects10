const quizData=[
    {
        question:'How old is flourin?',
           a:'10',
           b:'17',
           c:'26',
           d:'110',
           correct:'c'
    },
    {
        question:'what is the best pogramming language in 2019?',
        a:'java',
        b:'C',
        c:'python',
        d:'JavaScript',
        correct:'d'
    
    },
    {
        question:'who is the resident of us?',
        a:'Floria POP',
        b:'Donald Trump',
        c:'John saldano',
        d:'Mihal Andrei',
        correct:'b'
    },
    {
        question:'what does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Donald Trump',
        c:'Cascading Stylesheet',
        d:'JSON object Notaion',
        correct:'a'
    },

    {
        question:'whatyear was Javascript?',
        a:'1996',
        b:'2019',
        c:'2018',
        d:'none',
        correct:'d'
    }


];
const questionE1 = document.getElementById("question");
const a_text=document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const  addBtn = document.getElementById("addBtn");

const answers=document.querySelectorAll(".answer");
const showScore=document.querySelector("#showScore");
let currentQuiz=0;
let score=0;


const loadQuiz=()=>{

    const currentQuizData=quizData[currentQuiz];

questionE1.innerText=currentQuizData.question;

a_text.innerText=currentQuizData.a;
b_text.innerText=currentQuizData.b;
c_text.innerText=currentQuizData.c;
d_text.innerText=currentQuizData.d;

}

loadQuiz();

const getCheckAnswer=()=>{
 
 let answer;
    answers.forEach((currAnsElm) =>{
        if(currAnsElm.checked){
        answer=currAnsElm.id;
        }
        
    });
    return answer;
};
const disSelectAll=()=>{
    answers.forEach((currAnsElm)=>currAnsElm.checked=false);
}

addBtn.addEventListener('click',()=>{
 const  checkedanswer=getCheckAnswer();
 console.log(checkedanswer);

 if( checkedanswer===quizData[currentQuiz].correct){
    score++;
}

currentQuiz++;
disSelectAll();

if(currentQuiz<quizData.length){
    loadQuiz();
}
else{
      showScore.innerHTML=`
      <h3>You scored ${score}/${quizData.length}</h3>
      <button class="btn" onclick="location.reload()">play again</button>`;

      showScore.classList.remove('scorearea');
}


}) ;                                     

