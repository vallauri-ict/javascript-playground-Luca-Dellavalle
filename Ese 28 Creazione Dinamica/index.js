"use strict"
let _wr;
window.onload=function(){
    _wr=document.getElementById("wrapper");
    setInterval(creaNuovoElemento,20);
}
function randoms(min,max) {
	let rnd=Math.floor((max-min+1)*Math.random())+min;
	return rnd;
}

function creaNuovoElemento(){
    let _div=document.createElement("div");
    let width_=randoms(10,100);
    let height_=randoms(10,100);
    let r=randoms(0,255);
    let g=randoms(0,255);
    let b=randoms(0,255);
    let top_=randoms(0,400-height_);
    let left_=randoms(0,600-width_);
    _div.style.width=width_+"px";
    _div.style.height=height_+"px";
    _div.style.backgroundColor="rgb("+r+", "+g+", "+b+")";
    _div.style.top=top_+"px";
    _div.style.left=left_+"px";
    _div.style.position="absolute";
    
    let _p=document.createElement("p");
   
    _p.style.fontSize=(height_/4)+"px";
    _p.style.margin=0;
    _p.style.padding=0;
    
    _wr.appendChild(_div); // inserice il div creato dinamicamente nel wrapper
    _div.appendChild(_p); // inserire il p creato mettendolo nel div
}