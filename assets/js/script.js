const startButton = document.querySelector('.btn');
const instr = document.getElementById('instr');
const title = document.getElementById('title');
const body = document.getElementById('quiz');
let score = 0;
const correct = " Correct! One point was added to your score."
const incorrect = " Incorrect! 10 Seconds were deducted from your time."



startButton.addEventListener('click', startGame);


function startGame() {
startButton.classList.add('hide');
instr.classList.add('hide');
title.classList.add('hide');

questionOne();

}

function questionOne() {

    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionOne = document.createElement("p");
    questionOne.textContent = "Commonly used data types DO Not Include:";
    questionOne.setAttribute('style', 'font-size: xx-large')

    function hide() {
        questionOne.classList.add('hide');
        answerOne.classList.add('hide');
        answerTwo.classList.add('hide');
        answerThree.classList.add('hide');
        answerFour.classList.add('hide');
        questionTwo();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. strings";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. booleans"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() {   
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. alerts"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        score++;    
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + correct); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. numbers"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    body.append(questionOne)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)
}

function questionTwo() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionTwo = document.createElement("p");
    questionTwo.textContent = "The condition in an if/else statement is enclosed with _______________.";
    questionTwo.setAttribute('style', 'font-size: xx-large')

    function hide() {
        questionTwo.classList.add('hide');
        answerOne.classList.add('hide');
        answerTwo.classList.add('hide');
        answerThree.classList.add('hide');
        answerFour.classList.add('hide');
        questionThree();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. quotes";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. parentheses"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        score++;      
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + correct)
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. curly brackets"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. square brackets"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    body.append(questionTwo)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)
}


function questionThree() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionThree = document.createElement("p");
    questionThree.textContent = "Arrays in Javascript can be used to store ______________.";
    questionThree.setAttribute('style', 'font-size: xx-large')

    function hide() {
        questionThree.classList.add('hide');
        answerOne.classList.add('hide');
        answerTwo.classList.add('hide');
        answerThree.classList.add('hide');
        answerFour.classList.add('hide');
        questionFour();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. numbers and strings";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. other arrays"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect)
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. booleans"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. all of the above"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        score++;      
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + correct); 
    })
    
    body.append(questionThree)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)

}

function questionFour() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionFour = document.createElement("p");
    questionFour.textContent = "String values must be enclosed within _________ when being assigned to variables.";
    questionFour.setAttribute('style', 'font-size: xx-large')

    function hide() {
        questionFour.classList.add('hide');
        answerOne.classList.add('hide');
        answerTwo.classList.add('hide');
        answerThree.classList.add('hide');
        answerFour.classList.add('hide');
        questionFive();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. commas";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. curly brackets"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect)
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. quotes"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        score++; 
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + correct); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. parentheses"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {      
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    body.append(questionFour)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)

}

function questionFive() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionFive = document.createElement("p");
    questionFive.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    questionFive.setAttribute('style', 'font-size: xx-large')

    function hide() {
        questionFive.classList.add('hide');
        answerOne.classList.add('hide');
        answerTwo.classList.add('hide');
        answerThree.classList.add('hide');
        answerFour.classList.add('hide');
        // questionFive();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. JavaScript ";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. terminal/bash"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect)
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. for loops"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. console.log"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {  
        score++;     
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + correct); 
    })
    
    body.append(questionFive)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)

}

function allDone() {
    

}