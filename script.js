let gameSeq = [];
let userSeq = []; 

let btnColor = ["red", "purple", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function() {
    if(started == false){
        console.log(("Game Started"));
        started = true;
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    //random 
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btnColor[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}

function chechAns(idx){
    // console.log("Curr level : ", level);
    // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("Same Value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game is Ovet! Your Score is <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "black";
        }, 150);
        reset();
    }

}
function btnPress(){
    // console.log(this)
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id")
    userSeq.push(userColor);
    
    chechAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    userSeq = [];
    gameSeq = [];
}