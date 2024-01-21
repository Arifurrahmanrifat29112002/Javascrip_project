let questions = [
    {
      'que': 'What Does HTML Stand For?',
      'a': "Hyper Text Preprocessor",
      'b': "Hyper Text Markup Language",
      'c': "Hyper Text Transfer Protocol",
      'd': "Hyper Text Meta-Language",
      'correct': 'b'
    },
    {
      'que': "What Does CSS Stand For?",
      'a': "Cascading Style Sheets",
      'b': "Computer Science Systems",
      'c': "Coding and Styling System",
      'd': "Creative Software Technology",
      'correct': 'a'
    },
    {
      'que': "What Does JavaScript Stand For?",
      'a': "JavaScript: The Programming Language",
      'b': "Javascript: The Object Oriented Programming Language",
      'c': "Java Scripting Objects and Applications",
      'd': "Just Another Set of Tools for Javascript",
      'correct': 'a'
    },
    {
      'que': "Which is the correct way to write a comment in HTML?",
      'a': "<!-- This is a comment -->",
      'b': "//This is a comment",
      'c': "/This is a comment/",
      'd': "/*This is a comment*/",
      'correct': 'a'
    }
  ];

//selector
const container = document.querySelector(".container");
const question = document.querySelector(".card-header h3");
const button = document.querySelector(".card-footer button");
const options =document.querySelectorAll(".options");


let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

const loadQuestion = () =>{
    //reset checked input
    if (index === total) {
        return showResult();
    }
    reset();

    const data = questions[index];
    //display question on screen
    question.innerText = `${index+1}) ${data['que']}`;
    //show option on screen
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

//submit Quize
const submitQuize = () =>{
    const ans = getAnswer();
    if (ans == questions[index].correct) {
        right++;
    }else{
        wrong++;
    }
    
    index++ ;
    loadQuestion();
}

//get user answer
const getAnswer = ()=>{
    let userInput;
    options.forEach((input) => {
        if (input.checked) {
            userInput = input.value; 
        }
    })
    return userInput;
}

//reset
const reset = () =>{
    options.forEach((input) => {
        input.checked = false;
    })
}

//showResult
const showResult = () =>{
    container.innerHTML = `
            <div class="result">
                <h2> Thank you play this game </h2><br/>

                total questions${questions.length} <br/>
                correct answers: ${right}<br/>
                wrong answers : ${wrong}
            </div>
    `;
}

//add Event Listener
button.addEventListener("click",submitQuize);

//initialcall
loadQuestion();

