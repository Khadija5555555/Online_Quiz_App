
const quizData =[
    {
        question: "Am I beautiful?",
        a:"yes",
        b:"no",
        c:"maybe",
        d:"more than beauty",
        correct:"a",
    },
    {
        question: "Am I nice",
        a:"yes",
        b:"no",
        c:"maybe",
        d:"Hell yeah",
        correct:"b",
    },
    {
        question: "Am I good",
        a:"yes",
        b:"no",
        c:"maybe",
        d:"OFC",
        correct:"a",
    },

];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a_test');
const b_text = document.getElementById('b_test');
const c_text = document.getElementById('c_test');
const d_text = document.getElementById('d_test');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
function loadQuiz()
{
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEls.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
loadQuiz();


function deselectAnswers()
{
    answerEls.forEach(answerE => answerE.checked = false)
}
function getSelected()
{
   let answer;
   answerEls.forEach(answerE => {
       if(answerE.checked)
       {
           answer = answerE.id;
       }
   })
   return answer;
}

   submit.addEventListener('click', ()=>{
      const answer  = getSelected();
      //matching with the correct answer 
      if(answer)
      {
          if(answer === quizData[currentQuiz].correct)
          {
              score++;
          }
          currentQuiz++;
          if(currentQuiz < quizData.length)
          {
              loadQuiz();

          }else{
              quiz.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2>
              <button onclick = "location.reload()">
              `
          }
      }
   })




