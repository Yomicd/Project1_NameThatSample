/// Press Start button to start round one timer and load question 1,
/// Entire round is 2 minutes max for round 1 and 2 whic are 3 questions, final round is 5 questions 4 minutes
// const startButton = document.getElementById('timer')
// const questionContainerElement = document.getElementById('questionsContainer')

// startButton.addEventListener("click",startGame)

const questionsContainerElement = document.getElementById('questionsContainer')
const answerButtonsElement = document.getElementById("answerbutton")
const startButton = document.getElementById('timer') 
const startButton_questions = document.getElementById('startButton')


let shuffledQuestions, currentQuestionIndex

startButton_questions.addEventListener('click', startGameAndTimer)




let timerInterval;

startGameAndTimer = () => {
    //Clear the time for the new round
    clearInterval(timerInterval);
    /// clear the m,s,h
    let second = 0;
        minute = 0;
        hour = 0;

    // set interval every 1000 ms
    
    timerInterval = setInterval(function () {
        /// let timer represent two digits
        timer.innerHTML = 
        (hour ? hour + ':' : '') +
        (minute < 10 ? '0' + minute : minute) +
        ':' +
        (second < 10 ? '0' + second : second);

        // add a new second after a second passes
        second++;

        // if second equals 60 (one minute)
        if (second ==60){
            // a minute has passed so reset seconds to 0
            minute++;
            second = 0;
        }

        // if minute goes to 2 then we reset the minutes to 0
        if (minute == 3){
            minute = 0;
            console.log("Next Player's Turn!")
        }

    }, 1000);



    
    


    }



    // startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')
    // goToNextQuestion()
    // startTimer()
    
/// player clicks to next question with next question button

shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // questionsContainer.classlist.remove('hide')
    startNextQuestion()


function startNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
  
}

function showQuestion(question){
    questionsContainerElement.innerText = question.question


}


function answerQuestion(){
 /// if answer is correct, score increases and meme populates behind gameboard
    /// if answer is incorect no points are added     
}
  


/// Questions should this be a class or an array?
const questions = [{
    question: "Which Sample Appears in the Bas song 'Live For'",
    answers: [
        {text: 'Alex Isley', correct: true},
        {text: 'Prince', correct: false},
        {text: 'Beejee', correct: false},
        {text: 'Beyonce', correct: false}
    ]
    
}]
///(answer to questions on who sampled artist name and year)


function startTimer(){
/// timer is 30 seconds as soon as music is played should thi be included in my start game function?

}






/// if player wins a round then their name populates with confetti and meme background




/// log score of player one if they get it right or wrong

///player one has 3 questions in round one


/// when 3 questions end, prompt will come up say it ended, how do I make it not work after round?

/// after 3 questions, round one player two starts when they press the start button


/// repeat process until the end of round one

//prompt will pop up with final round one scores


/// Users can replay round one or move on to round two





// If they click yes to move on to round two, It automatically starts next round

/// music sample pops up 


//// player one chooses answers with button from choices











