/// Press Start button to start round one timer and load question 1,
/// Entire round is 2 minutes max for round 1 and 2 whic are 3 questions, final round is 5 questions 4 minutes
// const startButton = document.getElementById('timer')
// const questionContainerElement = document.getElementById('questionsContainer')

// startButton.addEventListener("click",startGame)
const startButton = document.getElementById('timer') 
const startButton_questions = document.getElementById('startButton')
const questionsContainerElement = document.getElementById('questionsContainer')
const answers = document.querySelectorAll('#answersButton')
// const answerButtonsElement = document.getElementById("answerbutton")
const songvideos = document.querySelectorAll('.musicBox')
const videoArray = ["https://www.youtube.com/watch?v=jQ-RrGCSa2M","https://www.youtube.com/watch?v=UmPgMc3R8zg", "https://www.youtube.com/watch?v=t7SvtikTkrM","https://www.youtube.com/watch?v=B95OUKk7alM","https://www.youtube.com/watch?v=oYpcCMxQXaE", "https://www.youtube.com/watch?v=5nj1HWC-dQs","https://www.youtube.com/watch?v=l3S1naGY9EQ"]
const scores = document.querySelectorAll('.scores')
const timer = document.querySelector('#timer')
const video = document.createElement('video');
video.src = videoArray
// video.poster ='';
video.autoplay = false;
video.controls = true;
video.muted = false;
video.height = 100; // 
video.width = 200; // 

if (video.canPlayType('video/mp4')) {
  console.log('set src to mp4 video');

  video.src = 'my-video.mp4'
} else if (video.canPlayType('video/ogg')) {
  console.log('set src to ogg video');

  video.src = 'my-video.ogg'
} else {
  console.log('provide link to user');
}

const box = document.getElementById('musicBox');

box.appendChild(video);


let Player1 = 'Player 1'
let Player2 = 'Player 2'
let players = 0;
let questionPrompt = [];
let correctanswer;
let player1score = 0;
let player2score = 0;
let timerInterval;
// startButton_questions.addEventListener('click', startGameAndTimer)



startGame.forEach(button => {
    button.onclick = () => {
        players = button.innerHTML.charAt(0)
        setGame()

    }
})


const setGame = () => {
    if (players === '1'){
        console.log("Player 1 turn")
        
    }
}

const askQuestions = () => {
    function showQuestion(){
        questionsContainerElement.innerText = questions.question
    
    
    }
//    for(let i = 0; i < videoArray.length, i++;)
}

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



    
    


    



    // startButton.classList.add('hide')
    // questionContainerElement.classList.remove('hide')
    // goToNextQuestion()
    // startTimer()
    
/// player clicks to next question with next question button


function startNextQuestion(){
    showQuestion()
  
}



function answerQuestion(){
 /// if answer is correct, score increases and meme populates behind gameboard
    /// if answer is incorect no points are added     
}
  


/// Questions should this be a class or an array?
const questions = {
                ///Round One
        question: "Which song samples this J Dilla Produced Hit?",
         song: ('https://www.youtube.com/watch?v=jQ-RrGCSa2M'),
            answers: [
            {text: 'A Tribe Called Quest - Can I Kick It', correct: false},
            {text: 'Mya - Fallen', correct: true},
            {text: 'Sade - Your Love is King', correct: false},
            {text: 'N.E.R.D. - Love Bomb', correct: false},
           
        ],

        question: "Which popular R&B Dance Pop Song Sampled this Stevie Knicks Song?",
            song: ('https://www.youtube.com/watch?v=UmPgMc3R8zg'),

        answers: [
            {text: 'Britney Spears - Baby One More Time', correct: false},
            {text: 'Jennifer Lopez - On the Floor', correct: false},
            {text: 'Usher - DJ Got us Fallin in Love', correct: false},
            {text: 'Destinys Child - Bootylicious', correct: true},
        ],


        question: "This Song Was Sampled by Which this 2007 Hit ",
        song:('https://www.youtube.com/watch?v=t7SvtikTkrM'),
        answers: [
            {text: 'Timbaland - The Way I Are', correct:false},
            {text: 'M.I.A. - Paper Planes', correct: true},
            {text: 'Shop Boyz - Party Like a Rockstar', correct: false},
            {text: 'Rihanna - Dont Stop the Music', correct: false},
        ],
                        ///Round 2


        question: "Kanye West's 'Touch the Sky' sampled which classic song",
        song:('https://www.youtube.com/watch?v=B95OUKk7alM'),
        answers: [
            {text: 'Stevie Wonder - Living For the City', correct: false},
            {text: 'Skys the limit - Notorious B.I.G.', correct: false},
            {text: 'Curtis Mayfield - Move On Up', correct: true},
            {text: 'Sittin On the Dock of the Bay - Otis Redding', correct:false},
        ],


        question: "Which artist's song features this Stevie Wonder sample?",
        song:('https://www.youtube.com/watch?v=oYpcCMxQXaE'),
        answers: [
            {text: 'Frank Ocean - Sweet Life', correct:true},
            {text: 'Beyonce - Summertime', correct: false},
            {text: 'Jay Z - Girls Girls Girls', correct: false},
            {text: 'Outkast - Otis Redding', correct: false},
        ],


        question: "This song is sampled by which Hip Hop classic?",
         song: ('https://www.youtube.com/watch?v=5nj1HWC-dQs'), 
        answers: [
            {text: 'Camp Lo - Luchini (This is it)', correct:false},
            {text: 'Digable Planets - Rebirth of Slick (Cool like dat)', correct: false},
            {text: 'The Fugees - Ready or Not', correct: false},
            {text: 'A Tribe Called Quest - Electric Relaxation', correct: true},
        ],

        ///// Bonus?

        question: "Name This Sample",
        song: ('https://www.youtube.com/watch?v=l3S1naGY9EQ'),
        answers: [
            {text: "De La Soul - Stakes Is High", correct: true},
            {text: "Mos Def - Mathematics", correct: false}
        ]


    
}
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











