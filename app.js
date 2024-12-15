
var mainPage = document.getElementById('SectionMainpage')
var LoginForm = document.getElementById('LoginForm')
var SignUp = document.getElementById('SignUp')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var loginEmail = document.getElementById('loginEmail')
var loginPassword = document.getElementById('loginPassword')
var question = document.getElementById('question')
var loginUsername = document.getElementById('loginUsername')
var uservalue = document.getElementById('userName')
var signemail;
var signpass;
var signuser;


var htmlQuiz = {
 
  
  webandapp: [
    {
      question: "Which language is used for web development on the frontend?",
      option1: "Python",
      option2: "JavaScript",
      option3: "Java",
      option4: "SQL",
      answer: "JavaScript",
    },
    {
      question: "What does responsive design mean?",
      option1: "Static layout",
      option2: "Different designs for different devices",
      option3: "Dynamic adjustment to screen size",
      option4: "Fixed pixel dimensions",
      answer: "Dynamic adjustment to screen size",
    },
    {
      question: "Which HTTP method is used to update existing data?",
      option1: "GET",
      option2: "PUT",
      option3: "DELETE",
      option4: "OPTIONS",
      answer: "PUT",
    },

    {
      question: "Which of the following is not a web development language?",
      option1: "HTML",
      option2: "CSS",
      option3: "Python",
      option4: "Photoshop",
      answer: "Photoshop",
    }
  ],
  module1: [
    {
      question: "What does HTML stand for?",
      option1: "HyperText Markup Language",
      option2: "HighText Machine Language",
      option3: "HyperText Markdown Language",
      option4: "Home Tool Markup Language",
      answer: "HyperText Markup Language",
    },
    {
      question: "Which tag is used for the largest heading in HTML?",
      option1: "<h6>",
      option2: "<h1>",
      option3: "<head>",
      option4: "<title>",
      answer: "<h1>",
    },
    {
      question: "What is the purpose of CSS?",
      option1: "Structure content",
      option2: "Style web pages",
      option3: "Add interactivity",
      option4: "Store data",
      answer: "Style web pages",
    },

    {
      question: "Which attribute is used to specify a unique identifier for an HTML element?",
      option1: "class",
      option2: "id",
      option3: "name",
      option4: "style",
      answer: "id",
    }
    
  ],

  python: [
    {
      question: "What type of language is Python?",
      option1: "Markup",
      option2: "Programming",
      option3: "Scripting",
      option4: "Styling",
      answer: "Programming",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      option1: "func",
      option2: "define",
      option3: "def",
      option4: "function",
      answer: "def",
    },
    {
      question: "How do you create a comment in Python?",
      option1: "//",
      option2: "#",
      option3: "/* */",
      option4: "/",
      answer: "#",
    },

    {
      question: "How do you import a module named 'math' in Python?",
      option1: "import math",
      option2: "use math",
      option3: "require math",
      option4: "math import",
      answer: "import math",
    }
    
  ]
};



function SectionDisplay(){

    mainPage.classList.add('d-none')
    LoginForm.classList.remove('d-none')
}


function SectionDisplay2(){

    mainPage.classList.add('d-none')
    SignUp.classList.remove('d-none')

}


function displayLogin(){
    signupEmail.value
    signupPassword.value
    uservalue.value

    localStorage.setItem('Signupemail',signupEmail.value)
    localStorage.setItem('signupPassword',signupPassword.value)
    localStorage.setItem("userName", uservalue.value)



     signemail = localStorage.getItem('Signupemail')
     signpass = localStorage.getItem('signupPassword')
     signuser = localStorage.getItem('userName')

     console.log(signemail)
     console.log(signpass)
     console.log(signuser)


    localStorage.setItem('quizCompleted',"false") 

    if ( !signemail && !signpass && ! signuser){

        Swal.fire({
            icon: "error",
            title: "Empty Field !",
          });
    }
    else{
    SignUp.classList.add('d-none')
    LoginForm.classList.remove('d-none')
    }

    

}

var questionUSer = document.getElementById('questionUSer')
var User = document.getElementById('User')
var myname = document.getElementById('myname')
localStorage.getItem('userName')

if (  User && myname){

  myname.textContent = localStorage.getItem('userName')
User.textContent = myname.textContent
}

 if (questionUSer){
  questionUSer.textContent = localStorage.getItem('userName')
}



var quizdetailusername = document.getElementById('quizdetailusername')
if(quizdetailusername){
  quizdetailusername.textContent = localStorage.getItem('userName')
}

var resultUser = document.getElementById('resultUser')

if(resultUser){
  resultUser.textContent = localStorage.getItem('userName') 
}


var loginUsername =document.getElementById('loginUsername')

function loginNewpage(){

   loginUsername.value
    loginEmail.value
    loginPassword.value

    
    signemail = localStorage.getItem('Signupemail')
     signpass = localStorage.getItem('signupPassword')
     signuser = localStorage.getItem('userName')


    localStorage.setItem('myloginUsername',loginUsername.value)
    localStorage.setItem('loginEmail', loginEmail.value)
    localStorage.setItem('loginPassword',  loginPassword.value)

    var loginuser = localStorage.getItem('myloginUsername')
    var loginemail = localStorage.getItem('loginEmail')
     var loginpass = localStorage.getItem('loginPassword')
     console.log(signemail)
     console.log(signpass)
     console.log(signuser)
     console.log(loginpass)
     console.log(loginemail)
     console.log(loginuser)

    if( loginuser !='' && loginemail !='' && loginpass != '' && signemail === loginemail && signpass === loginpass

      && loginuser === signuser  ){
        
        
      if ( localStorage.getItem('quizCompleted') === "true"){
        window.location = 'attemptedQuiz.html';
      }
      if ( ( localStorage.getItem('quizCompleted') === "false")){
        window.location = 'home.html';
      }
    }



    else{
        Swal.fire({
            icon: "error",
            title: "Invalid Credientials",
            text: "Your password or email is wrong",
          });
    }

  

}
var sections;
function QuizPage(differentSection){

   localStorage.setItem('allSection',differentSection)
    window.location = 'questions.html'
    
}
function QuizPage(differentSection){

   localStorage.setItem('allSection',differentSection)
    window.location = 'questions.html'
    
}
sections = localStorage.getItem('allSection')
console.log(sections)

var quizSectionname = document.getElementById('quizSectionname')
var quiz_name = document.getElementById('quizName')
var resultquizName = document.getElementById('resultquizName')

if( quizSectionname ){
  quizSectionname.textContent = localStorage.getItem('allSection')
  console.log(quizSectionname)
}

if(resultquizName){
  resultquizName.textContent = localStorage.getItem('allSection')
}

if(quiz_name){
  quiz_name.textContent = localStorage.getItem('allSection')
}


var totalQuestion = document.getElementById('totalQuestion')
var totalquestion = htmlQuiz[sections].length

localStorage.setItem("quizQuestion" , totalquestion)
if(question){
  question.textContent = localStorage.getItem('quizQuestion')
}

if(totalQuestion){
  totalQuestion.textContent = localStorage.getItem('quizQuestion')
}

  
  var questionCount = 0;
  var score = 0;
  var correctQuestion = 0
  var quizDiv = document.getElementById('MainQuiz')

function renderQuestion(){

  if (quizDiv)
  quizDiv.innerHTML = `<div class="question_content">
            <div class="ques_row">
                <div class="head_row" >
                    <h1> ${htmlQuiz[sections][questionCount].question}</h1>
                </div>
                <div class="options q_row">
                   <h3> <input type="radio" value="${htmlQuiz[sections][questionCount].option1}" id="option1" name="quizOption">
                    <label id="label1" for="option1">${htmlQuiz[sections][questionCount].option1}</label></h3>
                </div>
                <div class="options q_row">
                    <h3> <input type="radio" value="${htmlQuiz[sections][questionCount].option2}" id="option2" name="quizOption">
                        <label id="label2" for="option2">${htmlQuiz[sections][questionCount].option2}</label></h3>
                </div>
                <div class="options q_row">
                    <h3> <input type="radio" value="${htmlQuiz[sections][questionCount].option3}" id="option3" name="quizOption">
                        <label id="label3" for="option3">${htmlQuiz[sections][questionCount].option3}</label></h3>
                </div>
                <div class="options q_row">
                    <h3> <input type="radio" value="${htmlQuiz[sections][questionCount].option4}" id="option4"  name="quizOption">
                        <label id="label4" for="option4">${htmlQuiz[sections][questionCount].option4}</label></h3>
                </div>
            </div>
            <div class="btn_row">
               <button  onclick="next()" class="nxt_btn">Next</button>
            </div>
        </div> `

       
}

var quizOptions = document.getElementsByName("quizOption");
  function deSelect(){
    for ( var i = 0 ; i < quizOptions.length;i++){
      quizOptions[i].checked = false
    }
  }

  function next(){
    var checked = false;
    for ( var i = 0 ; i < quizOptions.length ; i++){
      if ( quizOptions[i].checked){
        checked = true
        if(quizOptions[i].value === htmlQuiz[sections][questionCount].answer)
          score++
        
        }

      }

      if (!checked){
        Swal.fire({
                title: "No Option Selected",
                text: "Please Select Any Option",
                icon: "error",
              });

      }
    
        if( questionCount < htmlQuiz[sections].length -1 ){
          questionCount++
          renderQuestion()
          deSelect()
      }
      else{
        localStorage.setItem('quizCompleted',"true")
        showResult()
        window.location = 'quizdetail.html'
      }
          
  
  }

 var result = document.getElementById('result')
  var percentageAll = document.getElementById('percentageQuiz')
  var CorrectQuestion = document.getElementById('CorrectQuestion')
  
  function showResult() {
      var percentage = Math.round(score / htmlQuiz[sections].length * 100 )
       
     var a=localStorage.setItem("Score",score)
     console.log(score)
      localStorage.setItem('quizPercentage', percentage)

      var resultStatus = ''
      if(percentage < 70) {
        
        resultStatus = 'Better Luck Next Time ! You Failed'
      } else {
          resultStatus = 'Congratulations ! You are Passed'
          
      }
    localStorage.setItem('resultStatus',resultStatus)
    
    }

  if (result){
    result.textContent = localStorage.getItem('resultStatus')
  }

if(CorrectQuestion){

  CorrectQuestion.textContent = localStorage.getItem('Score')

}
   
    if (percentageAll) {
      percentageAll.textContent = localStorage.getItem('quizPercentage') + '%';
  } 

  var percentage = document.getElementById('percentage')
  if(percentage){
    percentage.textContent = localStorage.getItem('quizPercentage') + '%';
  }

 

  window.onload = renderQuestion();