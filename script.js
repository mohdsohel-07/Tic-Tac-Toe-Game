let btns = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let Game = document.querySelector(".win-game");
let newGame = document.querySelector("#newGame");
let count = 0;
let turnO = true;

const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const enablebtns =() => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
    }

}

const disalebtns = () =>{
    for(let btn of btns){
        btn.disabled = true;

    }
}

const resetGame = () => {
    turnO = true;
    enablebtns();
    Game.setAttribute("class","hide");

}



btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        if (turnO){
            btn.innerText = "O";
            turnO = false;
            count++;
        }

        else{
            btn.innerText = "X";
            turnO = true;
            count++;
        }

        btn.disabled = true;
        checkWinner();
        console.log(count);
    });
});



const showWinner = () =>{
    Game.setAttribute("class","win-game");
}


let p = document.querySelector("p");
const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText; 
        if(pos1 !== "" && pos2  !== "" & pos3 !==""){
            if(pos1 === pos2    && pos2 === pos3){
                alert(`${pos1} won the game !  :)`);
                p.innerText = `Winner is ${pos1}`;
                showWinner();
                disalebtns();
                return;

            }
        }
    }
       if(count===9){
        alert(`It's draw no one win the match : (`);
        p.innerText = `No one win the match :(`;
        showWinner();
    }

}

reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);



