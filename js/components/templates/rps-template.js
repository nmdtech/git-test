export function rpsTemplate(score) {
    return `
        <h4>Rock Paper Scissors >></h4>
        <hr/>
        <div id="rps" class="d-flex justify-content-between">
            <div>
                <button class="rps-pick bg-none" data-pick="rock">
                    <img src="/assets/rps/rock-emoji.png" alt="" class="rps-move-icon">
                </button>
                <button class="rps-pick bg-none" data-pick="paper">
                    <img src="/assets/rps/paper-emoji.png" alt="" class="rps-move-icon">
                </button>
                <button class="rps-pick bg-none" data-pick="scissors">
                    <img src="/assets/rps/scissors-emoji.png" alt="" class="rps-move-icon">
                </button>
            </div>
            <div><button class="rps-reset" id="rpsReset">Reset Score</button></div>
        </div>
        <div class="gameResult">
            <p class="resultStatus"></p>
            <p class="resultsBoard"></p>
        </div>
        <div class="score">Score: <span id='scoreMark'>Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}</span></div>
        <div class="autoPlay"><button id="autoPlayBtn">🍀 Try My Luck</button></div>
    `;
}