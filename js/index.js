let play = true;
let computer = 0;
let player = 0;


function random_computer_input(){
    let rpsArray = ["Rock", "Paper", "Scissors"];

    return rpsArray[Math.floor(Math.random() * rpsArray.length)];
}

function player_choice(){

    let choice = prompt("Pick Rock, Paper, or Scissors");
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
            player++;
            break;
        case 'computer':
            computer++;
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
    console.log(`Player: ${player} | Computer: ${computer}`);
}

function winner_declaration(winner, choice){
    console.log(`${winner} won with ${choice}`);
}



function game_logic(playerChoice, computerChoice){
   
    let playerChoiceLower = playerChoice;
    
    if(!validate_choice(playerChoiceLower)){
        console.log(`You picked ${playerChoice} please pick a Valid choice!`);
        return;
    }

    switch(playerChoiceLower){
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

function continue_playing(){
    let answer = prompt(`Would you like to keep playing?`);
    switch(answer.toLowerCase()){
        case 'yes':
            play = true;
            break;
        case 'y':
            play = true;
            break;
        case 'no':
            play = false;
            break;
        case 'n':
            play = false;
            break;
        default:
            console.log(`you picked ${answer} since that is not yes or no lets play again`);
    }

}


while(play){
    let playerChoice = player_choice();
    let computerChoice = random_computer_input();
    game_logic(playerChoice, computerChoice);
    continue_playing();

}












