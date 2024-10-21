let user_input=[];
let game_input=[];
let higest_score=0;

let buttonss=['musturd','orange','tale','pink'];

let start=false;
let level=0;

let h2 = document.querySelector("h2");

// document.addEventListener("DOMContentLoaded", function() {
//     let h2 = document.querySelector("h2");

//     document.addEventListener("keypress", function() {
//         if (start == false) {
//             console.log('Game started');
//             start = true;

//             levelUp();
//         }
//     });
// });

// // check if any ket pressed on this object
// // action and function to performed are mentioned here
document.addEventListener("keypress",function(){
    if(start ==false){
        console.log(' Game started');
        start =true;

        levelUp();
    }
});

let flash=(button)=>{
    button.classList.add('flash');
    setTimeout(()=>{
        button.classList.remove('flash');
    },500);
}
let user_flash=(button)=>{
    button.classList.add('user_flash');
    setTimeout(()=>{
        button.classList.remove('user_flash');
    },250);
}

//function for lower increment

function levelUp(){
    //user hace to reenter whole user sequence
    user_input=[];
    level++;
    h2.innerHTML =`LEVEL ${level}   <br> Highest Score is <b>${higest_score}`;  
    

    let rnd= Math.ceil(Math.random()*3);
    let rnd_clr=buttonss[rnd];
    let rnd_Btn=document.querySelector(`.${rnd_clr}`);

    game_input.push(rnd_clr);
    console.log(game_input)
    // console.log(rnd_Btn);
    // console.log(rnd);
    // console.log(rnd_Btn);
    flash(rnd_Btn);
    //start from here 2:50 20 oct 2024    
}

let checkinput=(index)=>{
    //check only last level..as pass every index when clicked
    if(user_input[index] != game_input[index])
        {
            console.log(" sorry wrong ans");
            if(higest_score <level){
                higest_score=level;
            }
            
            h2.innerHTML=`your  score was <b> ${level} !! Press a key again <br> Higest Score is <b> ${higest_score}`;
            // h2.innerText =`GAME OVER ! PRESS AGAIN TO START`;  // innerr text ki anadr tags can' be put
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(()=>{document.querySelector("body").style.backgroundColor="white";},250);
            restart();
   
        }
        else{
            //for the last input is correct then after checking ..levelup
            if(user_input.length == game_input.length){
                setTimeout(levelUp(),2500);
            }
        }


    // console.log("current level is  ", level);
    // 
    // // continuous evaluation of 
    // let l=level;
    // let f=true;

    // for(i=0;i<l;i++)
    // {
    //     if(user_input[i] != game_input[i])
    //     {
    //         f=false;
    //         break;
    //     }
    //     else{
    //         if(user_input.length == game_input.length){
    //             levelUp();
    //         }
    //     }
    // }
    // if(f==false)
    // {
    //     console.log(" sorry wrong ans");
    //     h2.innerText =`GAME OVER ! PRESS AGAIN TO START`;
    // }
}

function btnpress(){
    // console.log(this,'press a button :) ');
    user_flash(this);
    let b=this;
    usercol=b.getAttribute("id");
    user_input.push(usercol);
    console.log(user_input)

    checkinput(user_input.length-1);    
}

let allbtns =document.querySelectorAll(".button")

for( b of allbtns){
    b.addEventListener("click",btnpress);
}

function restart(){
    start=false;
    game_input=[];
    user_input=[];
    level=0;

}


