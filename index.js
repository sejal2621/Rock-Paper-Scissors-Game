let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector ("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    let ranIndex = Math.floor(Math.random() * 3)
    return options[ranIndex]
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin)
    {
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.color = "white";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        computerScore++;
        computerScorePara.innerText = computerScore;
    }
}

const draw = () => {
    msg.innerText = "Game was Draw! Play Again";
    msg.style.backgroundColor = "#8C1A6A";
    msg.style.color = "#AAFFE5";
}

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if(userChoice === computerChoice)
    {
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock')
        {
            userWin = computerChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper'){
            userWin = computerChoice === 'scissors' ? false : true;
        }
        else{
            userWin = computerChoice === 'rock' ? false :  true; 
        }
        showWinner(userWin, userChoice, computerChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})