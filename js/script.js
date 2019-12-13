//Exercice 1
function Division() {
	var nb_1 = document.getElementById("ex1_input1").value;
	var nb_2 = document.getElementById("ex1_input2").value;
	var result1 = nb_1 / nb_2;
    document.getElementById('result-exo-1').innerHTML = result1;
}
//Exercice 2
var valeur = '"Entrer un nombre"';

function depart(){
	document.getElementById('result-exo-2').innerHTML = valeur;
}
window.onload = depart();

function zero() {
	valeur + "0";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function un(){
	valeur + "1";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function deux(){
	valeur + "2";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function trois(){
	valeur + "3";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function quatre(){
	 valeur + "4";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function cinq(){
	valeur + "5";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function six(){
	valeur + "0";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function sept(){
	valeur + "7";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function huit(){
	valeur + "8";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function neuf(){
	valeur + "9";
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function divise(){
	valeur /=  ;
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function addition(){
	valeur += ;
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function divisequatre(){
	valeur /= 4;
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function divisequatre(){
	valeur /= 10;
	valeur *= 2;
	valeur -=20;
	document.getElementById('result-exo-2').innerHTML = valeur;
}
function resetExo2(){
	valeur = '"Entrer un nombre"';
	document.getElementById('result-exo-4').innerHTML = valeur;
}