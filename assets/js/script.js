const startButton = document.querySelector('.btn');
const instr = document.getElementById('instr');
const title = document.getElementById('title');
const quiz = document.getElementById('quiz');
const body = document.querySelector('body')
let score = 0;
const correct = " Correct! One point was added to your score."
const incorrect = " Incorrect! 10 Seconds were deducted from your time."
var counter = 2;


function countDown() {
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         time = document.getElementById("time");
         time.innerHTML = counter;
      }
      if (counter === 0) {
        clearInterval(counter);
        quiz.innerHTML = '' 
        gameOver();
       }
     }, 1000);
}

startButton.addEventListener('click', startGame);
startButton.addEventListener('click', countDown);

function startGame() {
startButton.classList.add('hide');
instr.classList.add('hide');
title.classList.add('hide');

questionOne();
}

function questionOne() {

    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionOne = document.createElement("p");
    questionOne.textContent = "1. Commonly used data types DO Not Include:";
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
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. booleans"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() {  
        counter = counter - 10 
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
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    quiz.append(questionOne)
    quiz.append(answerOne)
    quiz.append(answerTwo)
    quiz.append(answerThree)
    quiz.append(answerFour)

    
}

function questionTwo() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionTwo = document.createElement("p");
    questionTwo.textContent = "2. The condition in an if/else statement is enclosed with _______________.";
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
        counter = counter - 10
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
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    var answerFour = document.createElement('button')
    answerFour.textContent = "4. square brackets"
    answerFour.setAttribute('class', 'btn')
    answerFour.addEventListener('click', hide);
    answerFour.addEventListener('click', function() {
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    quiz.append(questionTwo)
    quiz.append(answerOne)
    quiz.append(answerTwo)
    quiz.append(answerThree)
    quiz.append(answerFour)
}


function questionThree() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionThree = document.createElement("p");
    questionThree.textContent = "3. Arrays in Javascript can be used to store ______________.";
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
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. other arrays"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect)
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. booleans"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        counter = counter - 10
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
    
    quiz.append(questionThree)
    quiz.append(answerOne)
    quiz.append(answerTwo)
    quiz.append(answerThree)
    quiz.append(answerFour)

}

function questionFour() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionFour = document.createElement("p");
    questionFour.textContent = "4. String values must be enclosed within _________ when being assigned to variables.";
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
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. curly brackets"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() { 
        counter = counter - 10
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
        counter = counter - 10    
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })
    
    quiz.append(questionFour)
    quiz.append(answerOne)
    quiz.append(answerTwo)
    quiz.append(answerThree)
    quiz.append(answerFour)

}

function questionFive() {
    document.querySelector('footer').innerHTML = "Score: " + score;
    
    var questionFive = document.createElement("p");
    questionFive.textContent = "5. A very useful tool used during development and debugging for printing content to the debugger is:";
    questionFive.setAttribute('style', 'font-size: xx-large')

    function hide() {
        questionFive.classList.add('hide');
        answerOne.classList.add('hide');
        answerTwo.classList.add('hide');
        answerThree.classList.add('hide');
        answerFour.classList.add('hide');
        allDone();
    }
    
    var answerOne = document.createElement('button')
    answerOne.textContent = "1. JavaScript ";
    answerOne.setAttribute('class', 'btn');
    answerOne.addEventListener('click', hide);
    answerOne.addEventListener('click', function() {
        counter = counter - 10
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect); 
    })

    var answerTwo = document.createElement('button')
    answerTwo.textContent = "2. terminal/bash"
    answerTwo.setAttribute('class', 'btn')
    answerTwo.addEventListener('click', hide);
    answerTwo.addEventListener('click', function() {
        counter = counter - 10 
        document.querySelector('footer').innerHTML = "Score: " + score;
        document.querySelector('footer').append('. ' + incorrect)
    })
    
    var answerThree = document.createElement('button')
    answerThree.textContent = "3. for loops"
    answerThree.setAttribute('class', 'btn')
    answerThree.addEventListener('click', hide);
    answerThree.addEventListener('click', function() {
        counter = counter - 10
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
    
    quiz.append(questionFive)
    quiz.append(answerOne)
    quiz.append(answerTwo)
    quiz.append(answerThree)
    quiz.append(answerFour)

}

function allDone() {

    
    var allDone = document.createElement('div');
    allDone.textContent = 'All done!'; 
    allDone.setAttribute('style', 'font-size: xx-large')
    var finalScore = document.createElement('div');
    finalScore.setAttribute('style', 'font-size: x-large')
    finalScore.textContent = 'Your final score is ' + score +'!' + ' Time left: ' + counter + '.'
    var initials = document.createElement('div');
    initials.innerHTML = 'Enter initials: <input class = inp></input> <button class = btn >Submit</button>' 
    initials.setAttribute('style', 'font-size: x-large')

    quiz.append(allDone);
    quiz.append(finalScore);
    quiz.append(initials);


}

function gameOver() {
    var allDone = document.createElement('div');
    allDone.textContent = 'Times Up!'; 
    allDone.setAttribute('style', 'font-size: xx-large')
    var finalScore = document.createElement('div');
    finalScore.setAttribute('style', 'font-size: x-large')
    finalScore.textContent = 'Your final score is ' + score +'!' + ' Time left: ' + counter + '.'
    var initials = document.createElement('div');
    initials.innerHTML = 'Enter initials: <input class = inp></input> <button class = btn >Submit</button>' 
    initials.setAttribute('style', 'font-size: x-large')

    quiz.append(allDone);
    quiz.append(finalScore);
    quiz.append(initials);

}