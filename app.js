/// Press Start button to start round one timer and load question 1,
/// Entire round is 2 minutes max for round 1 and 2 whic are 3 questions, final round is 5 questions 4 minutes
// const startButton = document.getElementById('timer')
// const questionContainerElement = document.getElementById('questionsContainer')

// startButton.addEventListener("click",startGame)


const startButton = document.getElementById('timer')
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
        }

    }, 1000);
    


    }



    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    goToNextQuestion()
    startTimer()
    

//Button controls will play music samples, they will change every time the next button is pressed?
function playSample(){
    myAudioObject.play()

}
/// can I make this easier by using an audio controls method?


/// Questions should this be a class or an array?
let questions = ["Which artist sampled Sly and the Family Stone's 'Everyday People?'",]
///(answer to questions on who sampled artist name and year)
let answers = 

function startTimer(){
/// timer is 30 seconds as soon as music is played should thi be included in my start game function?

}

/// player clicks to next question with next question button
function nextQuestion(){

}


function answerSelected(){
    /// if answer is correct, score increases and meme populates behind gameboard
    /// if answer is incorect no points are added

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











