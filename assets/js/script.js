const startButton = document.querySelector('.btn');
const instr = document.getElementById('instr');
const title = document.getElementById('title');
const body = document.getElementById('quiz');
let score = 0;



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
        document.querySelector('footer').append(' Incorrect!'); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. booleans"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() {   
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. alerts"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        score++;    
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Correct!'); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. numbers"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
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
        document.querySelector('footer').append(' Incorrect!'); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. parentheses"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        score++;      
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Correct!')
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. curly brackets"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. square brackets"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
    })
    
    body.append(questionTwo)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)
}


function questionThree() {
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
        // questionTwo();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. quotes";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. parentheses"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        score++;      
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Correct!')
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. curly brackets"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. square brackets"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append(' Incorrect!'); 
    })
    
    body.append(questionTwo)
    body.append(answerOne)
    body.append(answerTwo)
    body.append(answerThree)
    body.append(answerFour)

}