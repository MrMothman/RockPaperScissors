let play = true;
let computerScore = 0;
let playerScore = 0;
let round = 0;


let playerScoreElem = document.querySelector("#player-score");
let computerScoreElem = document.querySelector("#computer-score");
let roundElem = document.querySelector("#round-box");

let playerChoiceImageElem = document.querySelector("#player-image-choice");
let computerChoiceImageElem = document.querySelector("#computer-image-choice");

let buttonListElem = document.querySelectorAll(".play-button");




function random_computer_input(){
    let rpsArray = ["Rock", "Paper", "Scissors"];
    let choice = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    computerChoiceImageElem.src = `assets/${choice}.jpg`;
    return choice;
}


function validate_choice(choice){
    let valid = false;
    switch(choice){
        case'rock':
            valid = true;
            break;
        case'scissors':
            valid = true;
            break;
        case'paper':
            valid = true;
            break;
        default:
            valid = false;
    }

    return valid;

}


function adjust_score(winner){
    switch(winner){
        case 'player':
            playerScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
}


function compare_types(winner, loser, choice){
    if(choice === winner){
        return true;
    }else if(choice === loser){
        return false;
    }
}


function display_score(){
    playerScoreElem.textContent = playerScore; 
    computerScoreElem.textContent = computerScore;
}


function winner_declaration(winner, choice){
    console.log(`${winner} won with ${choice}`);
}



function game_logic(playerChoice, computerChoice){

    switch(playerChoice){
        case 'rock':
            if(compare_types('Paper','Scissors',computerChoice)){
                adjust_score('computer');
                winner_declaration('computer',computerChoice);
            } else if(playerChoice.toLowerCase() !== computerChoice.toLowerCase()){
                adjust_score('player');
                winner_declaration('Player', playerChoice);
            }else{
                console.log("a tie what a nail bitter!");
            }
            break;

        case 'paper':
            if(compare_types('Scissors','Rock', computerChoice)){
                adjust_score('computer');
                winner_declaration('computer',computerChoice);
            } else if(playerChoice.toLowerCase() !== computerChoice.toLowerCase()){
                adjust_score('player');
                winner_declaration('Player', playerChoice);
            }else{
                console.log("a tie what a nail bitter!");
            }
            break;
        case 'scissors':
            if(compare_types('Rock','Paper', computerChoice)){
                adjust_score('computer');
                winner_declaration('computer',computerChoice);
            } else if(playerChoice.toLowerCase() !== computerChoice.toLowerCase()){
                adjust_score('player');
                winner_declaration('Player', playerChoice);
            }else{
                console.log("a tie what a nail bitter!");
            }

            break;

    }
    display_score();
}


function buttonEventAssign(playerChoice){
    
    roundElem.textContent = ++round.toString();
    let computerChoice = random_computer_input();
    game_logic(playerChoice, computerChoice);
}


buttonListElem.forEach((button) =>{
    
    let playerChoice = button.getAttribute("id").split("-");

    button.addEventListener("click", () => {
        playerChoiceImageElem.src = `assets/${playerChoice[0]}.jpg`;        
        roundElem.textContent = ++round;
        let computerChoice = random_computer_input();
        game_logic(playerChoice[0], computerChoice);
    });
});





