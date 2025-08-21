const choices=["rock","paper","scissors"]
const playerdisplay=document.getElementById("playerchoice")
const computerdisplay=document.getElementById("computerchoice")
const sameresult=document.getElementById("sameresult")
const playerscore=document.getElementById("playerscore")
const computerscore=document.getElementById("computerscore")
let playerScore=0;
let computerScore=0;
function playgame(playerchoice){
    const computerchoice= choices[Math.floor(Math.random()*3)]
    let result= ""
    if(playerchoice===computerchoice){
        result="IT'S A TIE!😅"
    }
    else{
        switch(playerchoice){
            case "rock":
                result=(computerchoice==="scissors")?"YOU WIN! 😀":"YOU LOSE😔";
                break
            case "paper":
                result=(computerchoice==="rock")?"YOU WIN! 😀":"YOU LOSE😔";
                break
            case "scissors":
                result=(computerchoice==="paper")?"YOU WIN! 😀":"YOU LOSE😔";
                break    
        }
    }
    playerdisplay.textContent=`Player:${playerchoice}`;
    computerdisplay.textContent=`Computer:${computerchoice}`;
    sameresult.textContent=result;
    sameresult.classList.remove("greentext","redtext")
    switch(result){
        case "YOU WIN! 😀":
            playerScore++;
            playerscore.textContent=playerScore;
            sameresult.classList.add("greentext")
            break;
        case "YOU LOSE😔":
            computerScore++;
            computerscore.textContent=computerScore;
            sameresult.classList.add("redtext")
            break;
        
    }
}