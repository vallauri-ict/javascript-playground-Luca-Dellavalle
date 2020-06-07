"use strict";

window.onload=function(){
	let _img = document.getElementById("imgCarta");
	let _btnGioca = document.getElementById("btnGioca");
	let _lblSomma = document.getElementById("lblSomma");
	let _lblCarte = document.getElementById("lblCarte");
	let _lblRisultato = document.getElementById("lblRisultato");
	
	_btnGioca.addEventListener("click",gioca)
	_lblRisultato.style.visibility ="hidden"
	let vet = []; //vettore semplice e veloce
	function gioca(){		
		if(_btnGioca.disabled == false){
			_btnGioca.disabled = true;
			_lblSomma.innerHTML = "0";
			_lblCarte.innerHTML = "0";
			_lblRisultato.style.visibility ="hidden";
			vet = []; //ripulisce il vettore riassegnandolo
			
			//NON VA BENE PERCHè LENGTH SI RIDUCE OGNI GIRO
			/*for(let i =0;i<vet.length;i++){ 
				vet.splice(0,1);
			}*/
			
			/*for(let i =0;i<vet.length;i++){ 
				vet.splice(i,1);
			}*/
		}
		
		let rnd;
		do{
			rnd = generaNumero(1,10);
		}while(vet.includes(rnd));
		vet.push(rnd); //inserimento nel vettore
		_img.src="img/bg_d"+rnd+".gif";
		if(rnd > 7){
			rnd = 0.5;
		}
		_lblCarte.innerHTML = vet.length;
		_lblSomma.innerHTML = parseInt(_lblSomma.innerHTML) +rnd;
		
		if(vet.length < 3){
			setTimeout(gioca,1500);
		}
		else{
			if(parseInt(_lblSomma.innerHTML) > 7.5){
				_lblRisultato.innerHTML = "HAI PERSO";				
			}
			else{
				_lblRisultato.innerHTML = "HAI VINTO";
			}
			_lblRisultato.style.visibility="visible";
			_btnGioca.disabled=false;
			
		}
		
		
	}
	
	
}

function generaNumero(min,max){
	let rnd = Math.floor((max-min+1)* Math.random()) +min;
	return rnd;
}