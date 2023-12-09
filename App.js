let userSCore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

///Printing on ui the score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//Draw game function
const drawGame= () =>{
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin){
        userSCore++;
        userScorePara.innerText = userSCore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. Computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const  randIdx =  Math.floor(Math.random() *3);
   
    return options[randIdx];

}

const playGame = (userChoice) => {
  
    //generate computer choice
    const compChoice = genCompChoice();
    //console.log("Computer Choice= ", compChoice);

    //conditionss
    if (userChoice ===compChoice){
        //DrawGame
        drawGame();
    } else{
        let userWin=true;//1st case

        if(userChoice ==="rock"){
            //computer should be scissor ,paper
            userWin =  compChoice==="paper" ?false : true;
            
        }//2nd cse
        else if(userChoice==="paper"){
           userWin= compChoice==="scissors" ? false: true;

        }//3rd case
        else {
            //rock, paper
            userWin = compChoice==="rock" ? false: true
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});