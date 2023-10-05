let userScore = 0;
let computerScore = 0;


document.querySelector('#rockBtn').addEventListener('click', ()=>{
    selectChoice("rock");
});

document.querySelector('#paperBtn').addEventListener('click', ()=>{
    selectChoice("paper");
});
document.querySelector('#scissorBtn').addEventListener('click', ()=>{
    selectChoice("scissors");
});

function selectChoice(choice){
    const computerChoice = makeComputerChoice();

    if(choice === computerChoice){
        alert(`You both selected ${choice}. This results in a draw and no points are awarded.`);
    }else if(choice === 'rock'){
        if(computerChoice === 'paper'){
            alert((`You selected ${choice} and the computer selected ${computerChoice}. The computer won and scored 1 point.`));
            computerScore++;
        }if(computerChoice === 'scissors'){
            alert((`You selected ${choice} and the computer selected ${computerChoice}. You won and scored 1 point.`));
            userScore++;
        }
    }else if(choice === 'paper'){
        if(computerChoice === 'scissors'){
            alert((`You selected ${choice} and the computer selected ${computerChoice}. The computer won and scored 1 point.`));
            computerScore++;
        }if(computerChoice === 'rock'){
            alert((`You selected ${choice} and the computer selected ${computerChoice}. You won and scored 1 point.`));
            userScore++;
        }
    }else if(choice === 'scissors'){
        if(computerChoice === 'rock'){
            alert((`You selected ${choice} and the computer selected ${computerChoice}. The computer won and scored 1 point.`));
            computerScore++;
        }if(computerChoice === 'paper'){
            alert((`You selected ${choice} and the computer selected ${computerChoice}. You won and scored 1 point.`));
            userScore++;
        }
    }

    updateScores();

    if(computerScore === 5 || userScore === 5){
        const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'))
        if(computerScore > userScore){
            document.querySelector('#gameoverEmoji').innerHTML = "😭";
            document.querySelector('#gameoverMessage').innerHTML = "Oops! You have lost the game.";
        }
        winnerModal.show();
    }

}

function updateScores(){
    document.querySelector('#userScore').innerHTML = userScore;
    document.querySelector('#computerScore').innerHTML = computerScore;
}

function makeComputerChoice(){
    const choices= ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * 3)];
    return choice;
}