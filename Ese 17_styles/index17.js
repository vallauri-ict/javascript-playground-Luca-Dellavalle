"use strict";
let _btnColore;
let _div;
let _btnDimFont;
let _dimFont;
let _btnBordo;
let _btnSfondo;
let _img1;
let _img2;
let _img3;
let _img;
let _btnClear;
window.onload=function(){
	_div = document.getElementById("titolo");
	_btnColore = document.getElementById("btnColore");
	_btnColore.addEventListener("click", changeColor);
	_btnDimFont = document.getElementById("btnDimensione");
	_dimFont = document.getElementById("txtSize");
	_btnDimFont.addEventListener("click",changeDimFont);
	_btnBordo = document.getElementById("btnBordo");
	_btnBordo.addEventListener("click",changeBorder);
	_img = document.getElementById("imgBox");
	_img1 = document.getElementById("btnImg1");
	_img1.addEventListener("click",changeImg("img1.jpg"));
	_img2 = document.getElementById("btnImg2");
	_img2.addEventListener("click",changeImg("img2.jpg"));
	_img3 = document.getElementById("btnImg3");
	_img3.addEventListener("click",changeImg("img3.jpg"));
	_btnSfondo = document.getElementById("btnSfondo");
	_btnSfondo.addEventListener("click",changeBackround);
	_btnClear = document.getElementById("btnClear");
	_btnClear.addEventListener("click", clear);
}

function changeImg(nFile){
	_img.style.backgroundImage = "src(img/img"+nFile.substring(3,4)+".jpg)";
	
}

function changeBorder(){
	//border: 2px solid red;
	//alert(getComputedStyle(_div).borderColor);
	if((getComputedStyle(_div).borderColor == "rgb(255, 0, 0)") && (getComputedStyle(_div).backgroundColor == "rgb(0, 0, 255)")){
		_div.style.borderColor="rgb(0, 0, 255)";
	}
	else{
		if((getComputedStyle(_div).borderColor == "rgb(255, 0, 0)") && (getComputedStyle(_div).backgroundColor == "rgb(255, 255, 0)"))
		{
			_div.style.borderColor="rgb(255, 255, 0)";
		}
		else
		{
			_div.style.borderColor="rgb(255, 0, 0)";
		}	
	}
}

function changeDimFont(){
	let dim  = _dimFont.value;
	_div.style.fontSize=dim+"pt";
}

function changeColor(){
	//alert(getComputedStyle(_div).backgroundColor);
	if(getComputedStyle(_div).backgroundColor == "rgb(0, 0, 255)")
	{
		_div.style.backgroundColor = "rgb(255, 255, 0)";
		_div.style.color = "rgb(0, 0, 255)";
	}
	else
	{
		_div.style.backgroundColor = "rgb(0, 0, 255)";
		_div.style.color = "rgb(255, 255, 0)";
	}
}

function changeBackround(){
	style.background += "#eaeaea url(img/sfondo.gif) center repeat-y";
}

let visibility = 0;
function clear(){
	if(visibility == 0){
		_img.style.visibility = "hidden";
		visibility = 1;
	}
	else{
		_img.style.visibility = "visible";
		visibility = 0;
	}
	
}
let xClear=0;
function clear(){
	if(xClear == 0){
		_img.style.visibility = "hidden";
		xClear = 1;
	}
	else{
		_img.style.visibility = "visible";
		xClear = 0;
	}
	
}












