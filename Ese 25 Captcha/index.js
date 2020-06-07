"use strict"
let matrice = [["0","1","2","3","4","5"],
			  ["6","7","8","9","A","B"],
			  ["C","D","E","F","G","H"],
			  ["I","J","K","L","M","N"],
			  ["O","P","Q","R","S","T"],
			  ["U","V","W","X","Y","Z"]];
// Matrice dove salvare i 5 numeri
let nSegreti = new Array(6);
//dichiarazione puntatori
let _imgCaptcha;
let x;
let y;
let _txtUser;
let _txtPwd;
let _txtCaptcha;
let _btnGenera;
let _btnInvia;
let _btnCaptcha;

window.onload=function(){
	//***************onload******************************
	_txtUser = document.getElementById("txtUser");
	_txtPwd = document.getElementById("txtPwd");
	_txtCaptcha = document.getElementById("txtCaptcha");
		
	_btnGenera = document.getElementById("btnGenera");
	_btnInvia = document.getElementById("btnInvia");
	_btnCaptcha = document.getElementById("btnCaptcha");
	_imgCaptcha = document.getElementsByClassName("captcha");
	
	
	_btnGenera.addEventListener("click",generaPosizioni);
	_btnInvia.addEventListener("click",invia);
	_btnCaptcha.addEventListener("click",controllaCaptcha);
	
	_txtUser.addEventListener("canghe",controllaUser);
	_txtPwd.addEventListener("canghe",controllaPwd);
	generaPosizioni();
	
	_txtUser.ok = false;
	_txtCaptcha.ok = false;
	_txtPwd.ok = false;
}

// *************elenco funzioni************

function controllaCaptcha(){
	let ok = true;
	let _imgOk = document.getElementById("imgOk");
	if(_txtCaptcha.value.length != 5){
		ok = false;
	}
	else{
		for(let i =0; i< _txtCaptcha.value.length;i++){
			let colonna = nSegreti[i][0];
			let riga = nSegreti[i][1];
			let valoreCaptcha = matrice[riga][colonna];
			if(_txtCaptcha.value[i] != valoreCaptcha){
				ok = false;
				break;
			}
		}
	}
	
	if(ok){
		_imgOk.style.backgroundImage ="url(img/ok.png)";
		_txtCaptcha.ok = true;
		_txtCaptcha.disabled = true;
	}
	else{
		_imgOk.style.backgroundImage ="url(img/nok.png)";
		_txtCaptcha.ok = false;
	}
}

function generaPosizioni(){
		for(let i =0; i<5;i++){
			x = (Math.floor((5+1)*Math.random())).toString();
			y = (Math.floor((5+1)*Math.random())).toString();
			nSegreti[i] = new Array(2);
			nSegreti[i][0] = x;
			nSegreti[i][1] = y;
		}
		caricaImmagini();
	}

	function caricaImmagini(){
		for(let i = 0; i<5;i++){
			y = nSegreti[i][0];
			x = nSegreti[i][1]; 
			_imgCaptcha[i].style.backgroundPosition = (-50*(x)) + "px " + (-50*(y)) + "px";
		}
	}
	
	function controllaUser(){
		if(_txtUser.value.length <8){
			_txtUser.style.borderColor = "red";
			_txtUser.ok=false;
		}
		else{
			_txtUser.style.borderColor = "";
			_txtUser.ok=true;
		}
	}
	
	
	function invia(){
		if(_txtUser.ok == false || _txtCaptcha.ok == false || _txtPwd.ok == false){
			alert("inserimenti non corretti");
			generaPosizioni();
		}
		else{
			alert("inserimenti corretti");
		}
	}
	
	function controllaPwd(){
		this.ok = true;
		if(this.value.length <8){
			this.ok = false;
		}//controlla se nel value ci sono caratteri ascii da 0 a 9
		else if(this.value.search(/[0-9]/)==-1){ 
			this.ok = false;
		}
		else if(this.value.search(/[a-z]/)==-1){
			this.ok = false;
		}
		else if(this.value.search(/[A-Z]/)==-1){
			this.ok = false;
		}
		
		if(!this.ok){
			this.classList.add("red");
		}
		else{
			this.classList.remove("red");
		}
	}


