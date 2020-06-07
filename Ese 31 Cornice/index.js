"use strict";
let _wrapper;
const DIM=10;
let livello;

window.onload=function () {
    _wrapper=document.getElementById("wrapper");
    livello=0;
    for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            let _div=document.createElement('div');
            _div.id="btn"+i+"-"+j;
            _div.setAttribute("class","cella");
            _wrapper.appendChild(_div);
            
        }
    }
    setInterval(aggiorna,500);
}

function aggiorna(){
    reset();
    for(let index=livello;index<DIM-livello;index++){
        let id_sopra ="btn"+livello+"-"+index;
        let id_sotto ="btn"+(DIM - livello - 1)+"-"+index;
        let id_sx= "btn"+index+"-"+(DIM - livello - 1);
        let id_dx= "btn"+index+"-"+(DIM - livello - 1);
        colora(id_sopra);
        colora(id_sotto);
        colora(id_sx);
        colora(id_dx);
    }
    if(livello===4)
        livello=0;
    else
        livello++;
}

function colora(id){
    let _div=document.getElementById(id);
    _div.style.backgroundColor="rgb(255,0,0)";
}

function reset(){
    for(let i=0;i<DIM;i++){
        for(let j=0;j<DIM;j++){
            let id ="btn"+i+"-"+j;
            let _div = document.getElementById(id);
            _div.style.backgroundColor="rgb(127,127,127)";
        }
    }

    let _div = document.getElementsByClassName('cella');
    for(let i=0;i<_div.length;i++){
        _div[i].style.backgroundColor="rgb(127,127,127)";
    }

}

function random(min, max) {
    return Math.floor((max-min+1)*Math.random())+min;
}