const elements = {
    displayScore: null,
    displayIncrement: null,
}

const click = {
    scoreParClic: 1
}

// Lier les elements aux id
elements.displayScore = document.querySelector('#score');
elements.displayIncrement = document.querySelector('#clickVal');
let entree = document.getElementById("entree");

// Affiche le bouton Score

let score = 0;

// variables de prix d'incrémentation

let increment = 1;
let prixHtml = 5;
let prixJs = 250;
let prixPhp = 1300;
let prixC = 7000;
let prixJava = 40000;
let prixKotlin = 220000;
let prixPython = 1200000;
let prixRuby = 6600000;
let prixSwift = 36000000;
let prixSql = 500;
elements.displayScore.innerHTML = score;
elements.displayIncrement.innerHTML = increment;

// On affiche les prix à l'emplacement correct

let displayPrixHtml = document.getElementById("HTML");
displayPrixHtml.value = displayPrixHtml.value + " " + prixHtml;

let displayPrixJs = document.getElementById("JavaScript");
displayPrixJs.value = displayPrixJs.value + " " + prixJs;

let displayPrixPhp = document.getElementById("PHP");
displayPrixPhp.value = displayPrixPhp.value + " " + prixPhp;

let displayPrixC = document.getElementById("C");
displayPrixC.value = displayPrixC.value + " " + prixC;

let displayPrixJava = document.getElementById("Java");
displayPrixJava.value = displayPrixJava.value + " " + prixJava;

let displayPrixKotlin = document.getElementById("Kotlin");
displayPrixKotlin.value = displayPrixKotlin.value + " " + prixKotlin;

let displayPrixPython = document.getElementById("Python");
displayPrixPython.value = displayPrixPython.value + " " + prixPython;

let displayPrixRuby = document.getElementById("Ruby");
displayPrixRuby.value = displayPrixRuby.value + " " + prixRuby;

let displayPrixSwift = document.getElementById("Swift");
displayPrixSwift.value = displayPrixSwift.value + " " + prixSwift;


// variable de prix de multiplicateurs

let prixMultiHtml = 25;

// Fonction qui incrémente le score quand tu cliques + affichage du score.

function incrementScore()
{   
    score = score + increment;
    //modification opacité bouton html
    if( prixHtml >= 5){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.55";
    }
    if( prixHtml >= 55){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.6";
    }
    if( prixHtml >= 105){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.65";
    }
    if(  prixHtml >= 155){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.7";
    }
    if(  prixHtml >= 205){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.75";
    }
    if(  prixHtml >= 255){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.8";
    }
    if(  prixHtml >= 305){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.85";
    }
    if(  prixHtml >= 355){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.9";
    }
    if(  prixHtml >= 405){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "0.95";
    }
    if(  prixHtml >= 455){
        document.getElementById("HTML").style.backgroundColor = "#EBBF00";
        document.getElementById("HTML").style.opacity = "1";
    }
 //modification  opacité bouton javascript
    if (  prixJs >= 250){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.55";
    }
    if ( prixJs >= 500){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.6";
    }
    if ( prixJs >= 750){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.65";
    }
    if ( prixJs >= 1000){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.7";
    }
    if ( prixJs >= 1250){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.75";
    }
    if ( prixJs >= 1500){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.8";
    }
    if ( prixJs >= 1750){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.85";
    }
    if ( prixJs >= 2000){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.9";
    }
    if ( prixJs >= 2250){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "0.95";
    }
    if ( prixJs >= 2500){
        document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
        document.getElementById("JavaScript").style.opacity = "1";
    }
    //modification  opacité bouton PHP
    if ( prixPhp >= 1300){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.55";
    }
    if ( prixPhp >= 2600){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.6";
    }
    if ( prixPhp >= 3900){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.65";
    }
    if ( prixPhp >= 5200){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.7";
    }
    if ( prixPhp >= 6500){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.75";
    }
    if ( prixPhp >= 7800){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.8";
    }
    if ( prixPhp >= 9100){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.85";
    }
    if ( prixPhp >= 10400){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.9";
    }
    if ( prixPhp >= 11700){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "0.95";
    }
    if ( prixPhp >= 13000){
        document.getElementById("PHP").style.backgroundColor = "#F0A40C";
        document.getElementById("PHP").style.opacity = "1";
    }
    //modification  opacité bouton c
    if ( prixC >= 7000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.55";
    }
    if ( prixC >= 14000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.6";
    }
    if ( prixC >= 21000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.65";
    }  
    if ( prixC >= 28000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.7";
    }
    if ( prixC >= 35000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.75";
    }
    if ( prixC >= 42000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.8";
    }
    if ( prixC >= 49000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.85";
    }
    if ( prixC >= 56000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.90";
    }
    if ( prixC >= 63000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "0.95";
    }
    if ( prixC >= 70000){
        document.getElementById("C").style.backgroundColor = "#F0980C";
        document.getElementById("C").style.opacity = "1";
    }
    //modification  opacité bouton java
    if (prixJava >= 40000) {
        document.getElementById("Java").style.backgroundColor = "#D96900";
        document.getElementById("Java").style.opacity = "0.55"
    }
    if (prixJava >= 80000) {
        document.getElementById("Java").style.backgroundColor = "#D96900";
        document.getElementById("Java").style.opacity = "0.6"
    }
    if (prixJava >= 120000) {
        document.getElementById("Java").style.backgroundColor = "#D96900";
        document.getElementById("Java").style.opacity = "0.65"
    }
    if (prixJava >= 160000) {
        document.getElementById("Java").style.backgroundColor = "#D96900";
        document.getElementById("Java").style.opacity = "0.7"
    }
    if (prixJava >= 200000) {
       document.getElementById("Java").style.backgroundColor = "#D96900";
       document.getElementById("Java").style.opacity = "0.75"
    }
    if (prixJava >= 240000) {
      document.getElementById("Java").style.backgroundColor = "#D96900";
        document.getElementById("Java").style.opacity = "0.8"
        }
    if (prixJava >= 280000) {
            document.getElementById("Java").style.backgroundColor = "#D96900";
            document.getElementById("Java").style.opacity = "0.85"
        }  
 if (prixJava >= 320000) {
            document.getElementById("Java").style.backgroundColor = "#D96900";
            document.getElementById("Java").style.opacity = "0.9"
        }
  if (prixJava >= 360000) {
            document.getElementById("Java").style.backgroundColor = "#D96900";
            document.getElementById("Java").style.opacity = "0.95"
        }
  if (prixJava >= 400000) {
            document.getElementById("Java").style.backgroundColor = "#D96900";
            document.getElementById("Java").style.opacity = "1"
        }
    //modification  opacité bouton Kotlin
    if (prixKotlin >= 220000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.55";
    }
    if (prixKotlin >= 440000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.6";
    }
    if (prixKotlin >= 660000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.65";
    }
    if (prixKotlin >= 880000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.7";
    }
    if (prixKotlin >= 1100000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.75";
    }
    if (prixKotlin >= 1320000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.8";
    }
    if (prixKotlin >= 1540000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.85";
    }
    if (prixKotlin >= 1760000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.9";
    }
    if (prixKotlin >= 1980000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "0.95";
    }   
     if (prixKotlin >= 2200000){
        document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
        document.getElementById("Kotlin").style.opacity = "1";
    }
    //modification  opacité bouton Python
    if (prixPython >= 1200000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.55";
    }
    if (prixPython >= 2400000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.6";
    }  
    if (prixPython >= 3600000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.65";
    }
    if (prixPython >= 4800000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.7";
    }
    if (prixPython >= 6000000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.75";
    }
    if (prixPython >= 7200000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.8";
    }
    if (prixPython >= 8400000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.85";
    }
    if (prixPython >= 9600000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.9";
    }
    if (prixPython >= 10800000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "0.95";
    }
    if (prixPython >= 12000000) {
        document.getElementById("Python").style.backgroundColor = "#F0490C";
        document.getElementById("Python").style.opacity = "1";
    }
    //modification  opacité bouton Ruby
    if (prixRuby >= 6600000 ) {
        document.getElementById("Ruby").style.backgroundColor ="#EB371F"
        document.getElementById("Ruby").style.opacity = "0.55"
    }
    if (prixPython >= 13200000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.6";
    }
    if (prixRuby >= 19800000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.65";
    }
    if (prixRuby >= 26400000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.7";
    }
    if (prixRuby >= 33000000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.75";
    }
    if (prixRuby >= 39600000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.8";
    }
    if (prixRuby >= 46200000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.85";
    }
    if (prixRuby >= 26400000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.9";
    }
    if (prixRuby >= 52800000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "0.95";
    }
    if (prixRuby >= 59400000) {
        document.getElementById("Ruby").style.backgroundColor = "#EB371F";
        document.getElementById("Ruby").style.opacity = "1";
    }
   
    //modification  opacité bouton Swift
    if ( prixSwift >= 36000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.55";
    }
    if ( prixSwift >= 72000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.6";
    }
    if ( prixSwift >= 108000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.65";
    }
    if ( prixSwift >= 144000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.7";
    }
    if ( prixSwift >= 180000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.75";
    }
    if ( prixSwift >= 216000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.80";
    }
    if ( prixSwift >= 252000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.85";
    }
    if ( prixSwift >= 288000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.9";
    }
    if ( prixSwift >= 324000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "0.95";
    }
    if ( prixSwift >= 360000000 ) {
        document.getElementById("Swift").style.backgroundColor = "#E6160B";
        document.getElementById("Swift").style.opacity = "1";
    }
 /*   if ( score >= prixSql ) {
        document.getElementById("SQL").style.backgroundColor = "red";
        document.getElementById("SQL").style.opacity = "1";
    }*/
    
    
    
    return elements.displayScore.innerHTML = score;
}
console.log(score);

// Variables incrémentation pour les items

let incrementHtml = 1;
let incrementJs = 1;
let incrementPhp = 1;
let incrementC = 1;
let incrementJava = 1;
let incrementPython = 1;
let incrementRuby = 1;
let incrementSwift = 1;
let incrementSql = 1;


// Le multiplicateur 

function multiHtml() {
    if(score >= prixMultiHtml){
    incrementHtml = incrementHtml * 2; 
    score = score - prixMultiHtml;
    prixMultiHtml = prixMultiHtml + 50;
    return elements.displayScore.innerHTML = score;
    }
    }

// Bouton d'upgrade le clic sur le bouton "enter" passe à +2/+3/etc

function upgradeHtml() {
    if(score >= prixHtml && timeOver == 0){
    increment = increment + incrementHtml; 
    score = score - prixHtml;
    prixHtml = prixHtml + 50;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixHtml.value = "HTML/CSS" + " " + prixHtml;
    }
    }

function upgradeJs() {
    if(score >= prixJs && timeOver == 0){
    increment = increment + incrementJs; 
    score = score - prixJs;
    prixJs = prixJs + 250;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJs.value = "JavaScript" + " " + prixJs;
    }
    }

function upgradePhp() {
    if(score >= prixPhp && timeOver == 0){
    increment = increment + incrementPhp; 
    score = score - prixPhp;
    prixPhp = prixPhp + 1300;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixPhp.value = "PHP" + " " + prixPhp;
    }
    }    

function upgradeC() {
    if(score >= prixC && timeOver == 0){
    increment = increment + incrementC; 
    score = score - prixC;
    prixC = prixC + 7000;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixC.value = "C" + " " + prixC;
    }
    }

function upgradeJava() {
    if(score >= prixJava && timeOver == 0){
    increment = increment + incrementJava; 
    score = score - prixJava;
    prixJava = prixJava + 40000;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJava.value = "Java" + " " + prixJava;
    }
    }    

function upgradeKotlin() {
    if(score >= prixKotlin && timeOver == 0){
    increment = increment + 1; 
    score = score - prixKotlin;
    prixKotlin = prixKotlin + 220000;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixKotlin.value = "Kotlin" + " " + prixKotlin;
    }
    }

function upgradePython() {
    if(score >= prixPython && timeOver == 0){
    increment = increment + incrementPython; 
    score = score - prixPython;
    prixPython = prixPython + 1200000;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixPython.value = "Python" + " " + prixPython;
    }
    }    

function upgradeRuby() {
    if(score >= prixRuby && timeOver == 0){
    increment = increment + incrementRuby; 
    score = score - prixRuby;
    prixRuby = prixRuby + 660000;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixRuby.value = "Ruby" + " " + prixRuby;
    }
    }    

function upgradeSwift() {
    if(score >= prixSwift && timeOver == 0){
    increment = increment + incrementSwift 
    score = score - prixSwift;
    prixSwift = prixSwift + 36000000;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixSwift.value = "Swift" + " " + prixSwift;
    }
    }    

/*function upgradeSql() {
    if(score >= prixSql){
    increment = increment + incrementSql; 
    score = score - prixSql;
    prixSql = prixSql + 200;
    return elements.displayScore.innerHTML = score;
    }
    }   */ 

// Case grisée

var a= elements.displayScore;

//griser les multiplicateurs

if(score<prixHtml){  
 document.getElementById("HTML").style.backgroundColor = "grey";
 document.getElementById("HTML").style.opacity = "0.1";
 }  
if(score<prixJs){
    document.getElementById("JavaScript").style.backgroundColor = "grey"
    document.getElementById("JavaScript").style.opacity = "0.1";
}

if (score<prixPhp) {
    document.getElementById("PHP").style.backgroundColor = "grey";
    document.getElementById("PHP").style.opacity = "0.1";
}

if (score<prixC){
    document.getElementById("C").style.backgroundColor =  "grey";
    document.getElementById("C").style.opacity = "0.1"
}

if (score < prixJava ) {
    document.getElementById("Java").style.backgroundColor = "grey";
    document.getElementById("Java").style.opacity = "0.1";
}

if (score < prixKotlin ) {
    document.getElementById("Kotlin").style.backgroundColor = "grey";
    document.getElementById("Kotlin").style.opacity = "0.1";
}
if (score < prixPython) {
    document.getElementById("Python").style.backgroundColor = "grey";
    document.getElementById("Python").style.opacity = "0.1";
}
if (score < prixRuby ) {
    document.getElementById("Ruby").style.backgroundColor ="grey"
    document.getElementById("Ruby").style.opacity = "0.1"
}
if ( score < prixSwift) {
    document.getElementById("Swift").style.backgroundColor = "grey";
    document.getElementById("Swift").style.opacity = "0.1";
}
/*if ( score < prixSql ) {
    document.getElementById("SQL").style.backgroundColor = "grey";
    document.getElementById("SQL").style.opacity = "0.3";
}*/

// variables de durée pour touche café

var refreshTime = 5;
var timeOver = 0;

// Autoclick 

var autoClick; 

// Le temps de refresh pour le bouton Café

function timeRefreshCafe(){

    if (refreshTime > 0){
    refreshTime--;
    }
console.log(refreshTime);
}
const intervalRefresh = setInterval(timeRefreshCafe, 1000);

// Le temps que dure le bouton Café




// Fonction qui contrôle le bouton café

function boostCafe() {
    if (refreshTime == 0){
    timeOver = 10;

    function timeActiveCafe(){
        if (timeOver > 0){
        timeOver--;
        }
        else if (timeOver == 0){
        clearInterval(intervalOver);
        increment = increment / 2;
        refreshTime = 5;
        timeRefreshCafe();
        return elements.displayIncrement.innerHTML = increment
        }
    console.log(timeOver);
    }

    const intervalOver = setInterval(timeActiveCafe, 1000);

    if(refreshTime == 0 && timeOver > 0){
    increment = increment * 2; 
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment;
    }
    }
    else{
        alert("Patience");
    }
}


//Fonction AUTOCLIC

/*function autoCL() {
if (increment > 10){
    setInterval(() => {
        document.getElementById("entree").click();
    },1000);

    return elements.displayScore.innerHTML = score;
}}*/

var intervalAuto = 0;
var incrementAuto = 1;

function auto() {
    if (intervalAuto == 0){
    score = score + incrementAuto;
    intervalAuto++;
    const intervalEntree = setInterval(auto, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAuto == 1){
        score = score + incrementAuto;
        return elements.displayScore.innerHTML = score
        }
}

// Fonction multiplicateurs d'auto-clics (Colonnes de gauche)


function autoFront() {
    if (increment>=1){
        incrementAuto++
    }
}

function autoBack() {
    if (increment>=1){
        incrementAuto++
    }
}

function autoFull() {
    if (increment>=1){
        incrementAuto++
    }
}

function autoSenior() {
    if (increment>=1){
        incrementAuto++
    }
}

function autoDev() {
    if (increment>=1){
        incrementAuto++
    }
}