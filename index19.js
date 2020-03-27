"use strict";
let primoNumero="";
let secondoNumero=null;
let operatore;
let _display;

window.onload = function(){
    let cancella=false;
    let btns = document.getElementsByName("btnNum");
    let operatori = document.getElementsByName("btnOperatore");
    _display = document.getElementById("txtOp");

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", visualizzaNumero);
    }

    for(let i = 0; i < operatori.length; i++){
        operatori[i].addEventListener("click",salvaNumero);
    }

    function visualizzaNumero(){
        if(cancella==true){
            _display.value="";
            cancella=false;
        }
        _display.value += this.value;
        if(this.value==".")
        {
            this.removeEventListener("click",visualizzaNumero())
        }
    }

    function salvaNumero(){
        if(primoNumero==null)
        {
            alert("Inserire prima il numero da calcolare");
        }
        primoNumero = _display.value;
        operatore = this.value;
        cancella=true;
       /* _display.value = ""; cancella direttamente*/
    }
}

function resetta(){
    primoNumero = null;
    operatore = "";
    _display.value = "";
}

function calcola() {
    if(primoNumero==null)
    {
        alert("Inserire prima il numero da calcolare");
    }
    secondoNumero = parseFloat(_display.value);
    let n2 = secondoNumero;
    let n1=parseFloat(primoNumero);
    if(operatore == "+")
    {
        _display.value = (n1+n2).toFixed(2);;
    }
    else if(operatore == "-")
        _display.value = (n1-n2).toFixed(2);
    else if(operatore == "*")
        _display.value = (n1*n2).toFixed(2);
    else
        _display.value =(n1/n2).toFixed(2);


}

