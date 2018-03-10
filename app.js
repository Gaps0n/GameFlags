var cpt = 20;
var score = 0;
var lblscore = document.querySelector('strong');

var isstart = document.getElementById('game-start');
var isover = document.getElementById('game-over');
var start = document.querySelector('#game-start button');
var restart = document.querySelector('#game-over button');

var imgFlag = document.querySelectorAll('.flag img');
var flag = document.querySelectorAll('.flag');

var liveImg = document.querySelectorAll('#game div.lives img');
var live = 2;

var pays = document.querySelector('h2');
var win = Math.floor(Math.random() * 4) + 1;

//FLAG 1
flag[0].onclick = function(){
    flag[0].className = "flag is-active";
    if(win == 1){
        randomFlag();
        cpt+=4;
        score++;
        lblscore.textContent = score;
    }else{
        mlive();
    }
};
//FLAG 2
flag[1].onclick = function(){
    flag[1].className = "flag is-active";
    if(win == 2){
        randomFlag();
        cpt+=4;
        score++;
        lblscore.textContent = score;
    }else{
        mlive();
    }
};
//FLAG 3
flag[2].onclick = function(){
    flag[2].className = "flag is-active";
    if(win == 3){
        randomFlag();
        cpt+=4;
        score++;
        lblscore.textContent = score;
    }else{
        mlive();
    }
};
//FLAG 4
flag[3].onclick = function(){
    flag[3].className = "flag is-active";
    if(win == 4){
        cpt+=4;
        randomFlag();
        score++;
        lblscore.textContent = score;
    }else{
        mlive();
    }
};
//START
start.onclick = function(){
    isstart.className = 'screen';
    randomFlag();
    compteur();
};
//RESTART
restart.onclick = function () {
    isover.className = 'screen';
    live = 2;
    cpt = 21;
    score = 0;
    lblscore.textContent = score;
    randomFlag();
    for(var i = 0; i < 3;i++){
        liveImg[i].className = ''
    }
};
//Live - 1
function mlive() {
    if(live > 0){
        liveImg[live].className = 'is-active'
        live--;
    }
    else{
        isover.className = 'screen is-open';
    }
}
//Flag Random
function randomFlag(){
    flag[0].className = 'flag';
    flag[1].className = 'flag';
    flag[2].className = 'flag';
    flag[3].className = 'flag';
    win = Math.floor(Math.random() * 4) + 1;
    switch(win){
        case 1:
            var win_name = flags[rdm()];
            pays.innerHTML = win_name.name;
            imgFlag[0].src = "flags/"+ win_name.code.toLowerCase() +".svg";
            imgFlag[1].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[2].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[3].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            break;
        case 2:
            var win_name = flags[rdm()];
            pays.innerHTML = win_name.name;
            imgFlag[0].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[1].src = "flags/"+ win_name.code.toLowerCase() +".svg";
            imgFlag[2].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[3].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            break;
        case 3:
            var win_name = flags[rdm()];
            pays.innerHTML = win_name.name;
            imgFlag[0].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[1].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[2].src = "flags/"+ win_name.code.toLowerCase() +".svg";
            imgFlag[3].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            break;
        case 4:
            var win_name = flags[rdm()];
            pays.innerHTML = win_name.name;
            imgFlag[0].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[1].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[2].src = "flags/"+ flags[rdm()].code.toLowerCase() +".svg";
            imgFlag[3].src = "flags/"+ win_name.code.toLowerCase() +".svg";
            break;
    }
    //Random integer between 0 - 102
    function rdm() {
        return Math.floor(Math.random() * flags.length) + 1;
    }
}
//COMPTEUR
function compteur(){
    timer = setInterval(function(){
        if(cpt>0)
        {
            --cpt;
            document.getElementById("chrono").innerHTML = cpt;
        }
        else
        {
            isover.className = 'screen is-open';
        }
    }, 1000);
}
