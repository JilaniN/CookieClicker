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

// Couleur des boutons d'incrémentation

/*document.getElementById("HTML").style.backgroundColor = "grey";
document.getElementById("HTML").style.opacity = "0.1";
      
document.getElementById("JavaScript").style.backgroundColor = "grey"
document.getElementById("JavaScript").style.opacity = "0.1";
   
document.getElementById("PHP").style.backgroundColor = "grey";
document.getElementById("PHP").style.opacity = "0.1";
   
document.getElementById("C").style.backgroundColor =  "grey";
document.getElementById("C").style.opacity = "0.1"
   
document.getElementById("Java").style.backgroundColor = "grey";
document.getElementById("Java").style.opacity = "0.1";

document.getElementById("Kotlin").style.backgroundColor = "grey";
document.getElementById("Kotlin").style.opacity = "0.1";
   
document.getElementById("Python").style.backgroundColor = "grey";
document.getElementById("Python").style.opacity = "0.1";
   
document.getElementById("Ruby").style.backgroundColor ="grey"
document.getElementById("Ruby").style.opacity = "0.1"*/

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
displayPrixHtml.innerHTML= displayPrixHtml.value + "<br />" + prixHtml;

let displayPrixJs = document.getElementById("JavaScript");
displayPrixJs.innerHTML = displayPrixJs.value + "<br />" + prixJs;

let displayPrixPhp = document.getElementById("PHP");
displayPrixPhp.innerHTML = displayPrixPhp.value + "<br />" + prixPhp;

let displayPrixC = document.getElementById("C");
displayPrixC.innerHTML = displayPrixC.value + "<br />" + prixC;

let displayPrixJava = document.getElementById("Java");
displayPrixJava.innerHTML = displayPrixJava.value + "<br />" + prixJava;

let displayPrixKotlin = document.getElementById("Kotlin");
displayPrixKotlin.innerHTML = displayPrixKotlin.value + "<br />" + prixKotlin;

let displayPrixPython = document.getElementById("Python");
displayPrixPython.innerHTML = displayPrixPython.value + "<br />" + prixPython;

let displayPrixRuby = document.getElementById("Ruby");
displayPrixRuby.innerHTML = displayPrixRuby.value + "<br />" + prixRuby;


// variable de prix de multiplicateurs

let prixMultiHtml = 25;

// Fonction qui incrémente le score quand tu cliques + affichage du score.

function incrementScore()
{   
    score = score + increment;
// This is a test
    if( score >= prixHtml){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
  }
    //modification opacité bouton html
    if (score >= prixHtml){
        document.getElementById("HTML").style.backgroundColor = "#0bda51";
        document.getElementById("HTML").style.opacity = "1";
    } 
  
 //modification  opacité bouton javascript
    if (  score >= prixJs ){
        document.getElementById("JavaScript").style.backgroundColor = "#0bda51"
        document.getElementById("JavaScript").style.opacity = "1";
    }
    
    //modification  opacité bouton PHP
    if ( score>=prixPhp ){
        document.getElementById("PHP").style.backgroundColor = "#0bda51";
        document.getElementById("PHP").style.opacity = "1";
    }
    //modification  opacité bouton c
    if ( score>=prixC ){
        document.getElementById("C").style.backgroundColor = "#0bda51";
        document.getElementById("C").style.opacity = "1";
    }
    //modification  opacité bouton java
    if ( score >= prixJava ) {
        document.getElementById("Java").style.backgroundColor = "#009000";
        document.getElementById("Java").style.opacity = "1"
    }
    //modification  opacité bouton Kotlin
    if ( score>=prixKotlin ){
        document.getElementById("Kotlin").style.backgroundColor = "#009000";
        document.getElementById("Kotlin").style.opacity = "1";
    }
    //modification  opacité bouton Python
    if ( score>=prixPython ) {
        document.getElementById("Python").style.backgroundColor = "#009000";
        document.getElementById("Python").style.opacity = "1";
    }
   
    //modification  opacité bouton Ruby
    if (score>=prixRuby  ) {
        document.getElementById("Ruby").style.backgroundColor ="#009000"
        document.getElementById("Ruby").style.opacity = "1"
    }

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

function incrementer(prixToCalculate, langage, couleur, augmentation, incrementLangage, refreshPrice) {    
    if(score >= prixToCalculate && timeOver == 0){
    increment = increment + incrementLangage; 
    score = score - prixToCalculate;
    prixToCalculate = prixToCalculate + augmentation;
    document.getElementById(langage).style.backgroundColor = couleur;
    document.getElementById(langage).style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixHtml.innerHTML = "HTML/CSS" + "<br />" + prixToCalculate;
}}

function upgradeHtml() {
    incrementer(prixHtml, "HTML", "#7fff00", 50, incrementHtml ); 
    prixJHtml=prixToCalculate;
    }

/*function upgradeJs() {
    if(score >= prixJs && timeOver == 0){
    increment = increment + incrementJs; 
    score = score - prixJs;
    prixJs = prixJs + 250;
    document.getElementById("JavaScript").style.backgroundColor = "#F4C100"
    document.getElementById("JavaScript").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJs.value = "JavaScript" + " " + prixJs;
    }
    }*/

function upgradeJs() {
    prix = prixJs, couleur = "#F4C100", langage = "JavaScript", augmentation = 250;
    incrementer (prixJs, "JavaScript", "#F4C100", 250, incrementJava);
    prixJs=prixToCalculate;
    //return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJs.innerHTML = "JavaScript" + "<br />" + prixJs;
}

function upgradePhp() {
    prix = prixPhp, couleur = "#F0A40C", langage = "PHP", augmentation = 1300;

    if(score >= prixPhp && timeOver == 0){
    increment = increment + incrementPhp; 
    score = score - prixPhp;
    prixPhp = prixPhp + 1300;
    document.getElementById("PHP").style.backgroundColor = "#F0A40C";
    document.getElementById("PHP").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixPhp.innerHTML = "PHP" + "<br />" + prixPhp;
    }
    }    

function upgradeC() {
    if(score >= prixC && timeOver == 0){
    increment = increment + incrementC; 
    score = score - prixC;
    prixC = prixC + 7000;
    document.getElementById("C").style.backgroundColor = "#F0980C";
    document.getElementById("C").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixC.innerHTML = "C" + "<br />" + prixC;
    }
    }

function upgradeJava() {
    if(score >= prixJava && timeOver == 0){
    increment = increment + incrementJava; 
    score = score - prixJava;
    prixJava = prixJava + 40000;
    document.getElementById("Java").style.backgroundColor = "#D96900";
    document.getElementById("Java").style.opacity = "0.5"
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJava.innerHTML = "Java" + "<br />" + prixJava;
    }
    }    

function upgradeKotlin() {
    if(score >= prixKotlin && timeOver == 0){
    increment = increment + 1; 
    score = score - prixKotlin;
    prixKotlin = prixKotlin + 220000;
    document.getElementById("Kotlin").style.backgroundColor = "#F5630F";
    document.getElementById("Kotlin").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixKotlin.value = "Kotlin" + "<br />" + prixKotlin;
    }
    }

function upgradePython() {
    if(score >= prixPython && timeOver == 0){
    increment = increment + incrementPython; 
    score = score - prixPython;
    prixPython = prixPython + 1200000;
    document.getElementById("Python").style.backgroundColor = "#F0490C";
    document.getElementById("Python").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixPython.innerHTML = "Python" + "<br />" + prixPython;
    }
    }    

function upgradeRuby() {
    if(score >= prixRuby && timeOver == 0){
    increment = increment + incrementRuby; 
    score = score - prixRuby;
    prixRuby = prixRuby + 660000;
    document.getElementById("Ruby").style.backgroundColor ="#EB371F"
    document.getElementById("Ruby").style.opacity = "0.5"
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixRuby.innerHTML = "Ruby" + "<br />" + prixRuby;
    }
    }    

// Case grisée

var a= elements.displayScore;

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

// var intervalAuto = 0;
// var incrementAuto = 1;

// function auto() {
//     if (intervalAuto == 0){
//     score = score + incrementAuto;
//     intervalAuto++;
//     const intervalEntree = setInterval(auto, 1000);
//     return elements.displayScore.innerHTML = score
// }
//     else if (intervalAuto == 1){
//         score = score + incrementAuto;
//         return elements.displayScore.innerHTML = score
//         }
// }

// Fonction multiplicateurs d'auto-clics (Colonnes de gauche)


var intervalAuto = 0;
var incrementAuto = 1;

function autoFront() {
    if (intervalAuto == 0){
    score = score + incrementAuto;
    intervalAuto++;
    const intervalEntree = setInterval(autoFront, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAuto == 1){
        score = score + incrementAuto;
        return elements.displayScore.innerHTML = score
        }
}

var intervalAuto = 0;
var incrementAuto = 1;

function autoBack() {
    if (intervalAuto == 0){
    score = score + incrementAuto;
    intervalAuto++;
    const intervalEntree = setInterval(autoFront, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAuto == 1){
        score = score + incrementAuto;
        return elements.displayScore.innerHTML = score
        }
}

var intervalAuto = 0;
var incrementAuto = 1;

function autoFull() {
    if (intervalAuto == 0){
    score = score + incrementAuto;
    intervalAuto++;
    const intervalEntree = setInterval(autoFront, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAuto == 1){
        score = score + incrementAuto;
        return elements.displayScore.innerHTML = score
        }
}

var intervalAuto = 0;
var incrementAuto = 1;

function autoSenior() {
    if (intervalAuto == 0){
    score = score + incrementAuto;
    intervalAuto++;
    const intervalEntree = setInterval(autoFront, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAuto == 1){
        score = score + incrementAuto;
        return elements.displayScore.innerHTML = score
        }
}
function autoDev() {
    if (increment>=1){
        incrementAuto++
    }
}


//Achievements popups

//      if( score >= prixHtml){
//          var popup = document.getElementById("myPopup");
//          popup.classList.toggle("show");
//    }

let iconeHtml = document.querySelector('#iconHTml');

iconeHtml.onmouseover = function survol()
   {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}



