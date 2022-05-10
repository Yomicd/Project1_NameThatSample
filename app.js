/// Press Start button to start round one timer and load question 1,
// const startButton = document.getElementById('timer')
// const questionContainerElement = document.getElementById('questionsContainer')




// startButton.addEventListener("click",startGame)
const startButton = document.getElementById('timer') 
const timer = document.querySelector('#timer')
const player1turn = document.querySelector('#playBtn1');
// const answerbuttonWrong = document.querySelector('#false');
// const answerbuttonRight = document.querySelector('#true');

// answerbuttonWrong.addEventListener('click', () => answerbuttonWrong.style.backgroundColor='red');
// answerbuttonRight.addEventListener('click', () => answerbuttonRight.style.backgroundColor='green');
// let player1ScoreCount = document.getElementById('.p1score-count')
// let player2ScoreCount = document.getElementById('.p2score-count')
let timerInterval;

let playerone = {
    score: 10,
    rightanswers: [],
    wronganswers: [],
    round: 0,
    // isTurn: true

}

// How to choose correct answer on button and add score to specific player
const answerQuestion1 = document.getElementById('.button')
const answerQuestion2 = document.getElementById('.button')
const answerQuestion3 = document.getElementById('.button')
const answerQuestion4 = document.getElementById('.button')
const answerQuestion5 = document.getElementById('.button')
const answerQuestion6 = document.getElementById('.button')
const answerQuestion7 = document.getElementById('.button')

// if(document.getElementById('answerbutton-true')){
//     player1ScoreCount += 10;
//     alert("button was clicked");
// }








     let points = 0

     function addPoints(){
        let player1ScoreCount = document.querySelector('.totalPointp1')
         playerone.score+= 10
         console.log(playerone.score)
         playerone.rightanswers.push(playerone.score)
         player1ScoreCount.innerHTML = playerone.score
        
}



     function removePoints(){
        let player1ScoreCount = document.querySelector('.totalPointp1')
         playerone.score -= 10
         console.log(playerone.score)
         playerone.wronganswers.push(playerone.score)
         player1ScoreCount.innerHTML = playerone.score;
         
         
}

// const answerWasChosen = (e) => { 
//     // alert("button was clicked");
//     const answerQuestion1 = document.getElementById('')
//     const answerQuestion2 = document.getElementById('')
//     const answerQuestion3 = document.getElementById('')
//     const answerQuestion4 = document.getElementById('')
//     const answerQuestion5 = document.getElementById('')
//     const answerQuestion6 = document.getElementById('')
//     const answerQuestion7 = document.getElementById('')
//     if(e.target.classList.contains('answerbutton-true')){
//     player1ScoreCount += 10 ;
    
//     }
// }
 const answers = document.getElementsByClassName('button')  
for (let i=0; i<answers.length; i++){
    
    answers[i].addEventListener("click", answerWasChosen)
    
}


///Start the timer and player ones turn
const startGameAndTimer = () => {
    //Clear the time for the new round
    clearInterval(timerInterval);
    /// clear the m,s,h
    let second = 0;
        minute = 0;
        hour = 0;

    
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
        if (second = 60){
            // a minute has passed so reset seconds to 0
            minute++;
            second = 0;
        }

        // if minute goes to 1 then we reset the minutes to 0
        if (minute === 1){
            minute ===0;
            /// start player 2 turn after 1 minute
            
        }

    }, 1000);
    function greet() {
        alert('Next Round!');
       }
       setTimeout(greet, 60000);
    }




const changeRound = () => {
        let clock = document.querySelector('.roundBox')
        clock.append(playerone.round)
    
    }

    

const restartRound = () => {
   if (player1ScoreCount <=10){
       startGameAndTimer;
   } else if (player1ScoreCount => 20){
       changeRound(2)
   }
}


const setRounds = () =>{

    if (playerone.score <= 19){
        changeRound(1)

    }

    if (playerone.score >= 20) {   
        changeRound(2)
    }
    else if(playerone.score < 20){
       
        restartRound();
    }

    else if(playerone.score >= 30){

        changeRound(3)
    }
}

const winState =() => {
    if (playerone.score > 40){
        alert("Congratulations!")
        }
    else if(playerone.score < 40){
        alert("Sorry, Try again")
    }
    }   
 


//         question: "Which popular R&B Dance Pop Song Sampled this Stevie Knicks Song?",
//             

//         answers: [
//             {text: 'Britney Spears - Baby One More Time', correct: false},
//             {text: 'Jennifer Lopez - On the Floor', correct: false},
//             {text: 'Usher - DJ Got us Fallin in Love', correct: false},
//             {text: 'Destinys Child - Bootylicious', correct: true},
//         ],


//         question: "This Song Was Sampled by Which this 2007 Hit ",
//         song:
//         answers: [
//             {text: 'Timbaland - The Way I Are', correct:false},
//             {text: 'M.I.A. - Paper Planes', correct: true},
//             {text: 'Shop Boyz - Party Like a Rockstar', correct: false},
//             {text: 'Rihanna - Dont Stop the Music', correct: false},
//         ],
//                         ///Round 2


//         question: "Kanye West's 'Touch the Sky' sampled which classic song",
//         song:
//         answers: [
//             {text: 'Stevie Wonder - Living For the City', correct: false},
//             {text: 'Skys the limit - Notorious B.I.G.', correct: false},
//             {text: 'Curtis Mayfield - Move On Up', correct: true},
//             {text: 'Sittin On the Dock of the Bay - Otis Redding', correct:false},
//         ],


//         question: "Which artist's song features this Stevie Wonder sample?",
//         song:
//         answers: [
//             {text: 'Frank Ocean - Sweet Life', correct:true},
//             {text: 'Beyonce - Summertime', correct: false},
//             {text: 'Jay Z - Girls Girls Girls', correct: false},
//             {text: 'Outkast - Otis Redding', correct: false},
//         ],


//         question: "This song is sampled by which Hip Hop classic?",
//          song: 
//         answers: [
//             {text: 'Camp Lo - Luchini (This is it)', correct:false},
//             {text: 'Digable Planets - Rebirth of Slick (Cool like dat)', correct: false},
//             {text: 'The Fugees - Ready or Not', correct: false},
//             {text: 'A Tribe Called Quest - Electric Relaxation', correct: true},
//         ],



    
// }
// ///(answer to questions on who sampled artist name and year)





// /// if player wins a round then their name populates with confetti and meme background




// /// log score of player one if they get it right or wrong



// //prompt will pop up with final round one scores











