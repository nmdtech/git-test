import {setPageTitle} from "../components/core/page.js";
import {print} from "../components/core/utils.js";
import {rpsTemplate} from "../components/templates/rps-template.js";

export function rpsGame() {
    setPageTitle('Mini Games');

    let score = {wins:0, losses:0, ties:0};

    const savedScore = localStorage.getItem('score');
    if (savedScore) score = JSON.parse(savedScore);

    print(rpsTemplate(score));

    const rps = document.getElementById('rps');
    const buttons = rps.querySelectorAll('.rps-pick');
    const gameResult = document.querySelector('.gameResult');
    const resultStatus = gameResult.querySelector('.resultStatus');
    const autoPlayBtn = document.getElementById('autoPlayBtn');
    const resetBtn = document.querySelector('.rps-reset');

    let isPlaying = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            if (isPlaying) return;

            isPlaying = true;
            resultStatus.textContent = 'Computer is thinking... 🤔';
            disableButtons(true);

            setTimeout(() => {
                playGame(button.dataset.pick);
                disableButtons(false);
                isPlaying = false;
            }, randomDelay(1500, 2250));

        });
    });

    document.body.addEventListener('keydown', (e) => {
        let button;
        const capsOn = e.getModifierState('CapsLock');

        if (capsOn) {
            alert('CapsLock On');
            return;
        }

        console.log(e.key);

    })

    autoPlayBtn.addEventListener('click', () => {

        if (isPlaying) return;

        isPlaying = true;
        disableButtons(true);

        resultStatus.textContent = 'Analyzing current results... 🧠';

        setTimeout(() => {
            resultStatus.textContent = 'Preparing Your Lucky Draw... 🍀';
            playLucky();
        }, randomDelay(1750, 3250));

    });


    function playLucky(){

        const userPick = randomMove();

        setTimeout(() => {
            resultStatus.innerHTML =
                `We picked <span class="luckyPick">${userPick}</span> for you... 🍀`;

            setTimeout(() => {
                resultStatus.textContent =
                    "Computer's turn. Computer is thinking... 🤔";

                setTimeout(() => {
                    playGame(userPick);
                    disableButtons(false);
                    isPlaying = false;

                }, randomDelay(1750, 3250));

            },2750);

        },3000);

    }

    function playGame(userPick){

        const computerPick = randomMove();
        let result;

        if(userPick === computerPick){
            result = 'Tie!';
            score.ties++;

        } else if(
            (userPick==="rock" && computerPick==="scissors") ||
            (userPick==="paper" && computerPick==="rock") ||
            (userPick==="scissors" && computerPick==="paper")
        ){
            result = 'You Won!!';
            score.wins++;

        } else {
            result = 'You Lost!';
            score.losses++;

        }

        updateResultSet(result,[userPick,computerPick]);
        updateScoreElement();

        localStorage.setItem('score',JSON.stringify(score));

    }

    function randomMove(){
        const moves = ['rock','paper','scissors'];
        return moves[Math.floor(Math.random()*3)];
    }

    function updateResultSet(result,picks){

        resultStatus.textContent = result;
        resultStatus.className = 'resultStatus';

        resultStatus.classList.add(
            result.includes('Won') ? 'win-animation' :
                result.includes('Lost') ? 'lose-animation' : 'tie-animation'
        );

        let resultsBoard = gameResult.querySelector('.resultsBoard');

        if(!resultsBoard){
            resultsBoard = document.createElement('p');
            resultsBoard.className = 'resultsBoard';
            gameResult.appendChild(resultsBoard);
        }

        resultsBoard.innerHTML = `
            <div class="d-flex align-items-center">
                <span>You :</span>
                <img src="/assets/rps/${picks[0]}-emoji.png" class="rps-move-thumb mx-2">
                <img src="/assets/rps/${picks[1]}-emoji.png" class="rps-move-thumb mx-2">
                <span>: Computer</span>
            </div>
        `;
    }

    function updateScoreElement(){
        document.getElementById('scoreMark').textContent =
            `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
    }

    resetBtn.addEventListener('click',()=>{

        Object.keys(score).forEach(key=>score[key]=0);
        localStorage.removeItem('score');
        document.getElementById('scoreMark').textContent = 'Scores were reset';

        resultStatus.textContent = '';

        const resultsBoard = gameResult.querySelector('.resultsBoard');
        if(resultsBoard) resultsBoard.remove();

        setTimeout(updateScoreElement,1000);

    });

    function disableButtons(state){
        buttons.forEach(btn=>btn.disabled=state);
        autoPlayBtn.disabled=state;
    }

    function randomDelay(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

}