const quizData=[
    {
        question:'How old is flourin?',
           a:'10',
           b:'17',
           c:'26',
           d:'110',
           correct:'c'
    },{
        question:'what is the best pogramming language in 2019?',
        a:'java',
        b:'C',
        c:'python',
        d:'JavaScript',
        correct:'d',
    
    },{
        question:'who is the resident of us?',
        a:'Floria POP',
        b:'Donald Trump',
        c:'John saldano',
        d:'Mihal Andrei',
        correct:'b',
    },
    {
        question:'what does HTML stand for?',
        a:'Hypertext Markup Language',
        b:'Donald Trump',
        c:'Cascading Stylesheet',
        d:'JSON object Notaion',
        correct:'a',
    },

    {
        question:'whatyear was Javascript?',
        a:'1996',
        b:'2019',
        c:'2018',
        d:'none',
        correct:'d',
    }


]
const questionE1=documwnt.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


let currentQuiz=0;
loadQuiz();

function loadQuiz(){
const currentQuizDate=quizData(currentquiz);
questionE1.innerText=currentQuizData.question;
a_text.innnerText=currentQuizData.a;
b_text.innnerText=currentQuizData.b;
c_text.innnerText=currentQuizData.c;
d_text.innnerText=currentQuizData.d;
}

submitBtn.addEventListener('click',()=>{
currentQuiz++;

if(currentQuiz<quizData.length){
    loadQuiz();
}
else{
alert('You Finished get yourself an orange lemonde');
}


})                                      

