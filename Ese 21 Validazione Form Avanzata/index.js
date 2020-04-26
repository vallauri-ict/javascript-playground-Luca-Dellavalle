"use strict"
let _txtNominativo, _optSesso, _lstAteneo, _chkLav, _descr, _cap;
window.onload=function(){ 
	_txtNominativo = document.getElementById("nominativo");
	_optSesso = document.getElementsByName("sesso");
	_lstAteneo = document.getElementById("ateneo");
	_chkLav = document.getElementById("lavoratore");
	_descr = document.getElementById("descr");
	_cap = document.getElementById("cap");
}

function controlloForm(){
	let messaggio = "";
	//nome e cognome
	if(_txtNominativo == ""){
		_txtNominativo.classList.toggle("red-border",true);
		messaggio+= "- Il campo nominativo non è stato compilato o contiene numeri\n";
	}
	else{
		_txtNominativo.classList.toggle("red-border",false);
	}
	//sesso
	if(_optSesso.value != "M" && _optSesso.value != "F")
	{
		_optSesso.classList.toggle("red-border",true);
		messaggio+= "- Selezionare il sesso \n";
	}
	else{
		_optSesso.classList.toggle("red-border",false);
	}
	//ateneo
	if(_lstAteneo.selected == "nessuno"){
		_lstAteneo.classList.toggle("red-border",true);
		messaggio+= "- Selezionare un ateneo \n";
	}
	else{
		_lstAteneo.classList.toggle("red-border",false);
	}
	//descrizione lavoro
	if(_descr.value == ""){
		_descr.classList.toggle("red-border",true);
		messaggio+= "- Se selezionata la sezione di studente lavoratore compilare la descrizione sottostante  \n";
	}
	else{
		_descr.classList.toggle("red-border",false);
	}
	alert(messaggio);
	alert("ciao");
}

function controlloNominativo(){
	let nominativo = _txtNominativo.value;
	let i = 0;
	while((i < nominativo.length)&&(isNaN(nominativo[i++])));
	if(isNaN(nominativo[i-1])){
		_txtNominativo.classList.toggle("red-border",false);
	}
	else{
		_txtNominativo.classList.toggle("red-border",true);
	}
	
}

function controlloCap(){
	let cap = _cap.value;
	let i =0;
	while((i < cap.length)&&(!isNaN(cap[i++])));
	if(!isNaN(cap[i-1])){
		_cap.classList.toggle("red-border",true);
	}
	else{
		_cap.classList.toggle("red-border",true);
	}
	if(cap.length < 5 || cap.length == 0){
		_cap.classList.toggle("red-border",true);
	}
	else{
		_cap.classList.toggle("red-border",false);
	}
}

function descrizione(){
	if(_chkLav.checked)
	{
		_descr.disabled = false;
	}
	else{
		_descr.disabled = true;
		_descr.value = "";
	}
}


