const elements = {
    displayScore: null,
    displayIncrement: null,
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
document.getElementById("Ruby").style.opacity = "0.1"   */

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

// Fonction qui incrémente le score quand tu cliques + affichage du score.
function incrementScore()
{   
    score = score + increment;
// Afficher les achievements

/*    if( score >= prixHtml){
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
  }*/   
  
    //modification opacité des boutons 
    if (score >= prixHtml){
        document.getElementById("HTML").style.backgroundColor = "#0bda51";
        document.getElementById("HTML").style.opacity = "1";
    }
  
    if (  score >= prixJs ){
        document.getElementById("JavaScript").style.backgroundColor = "#0bda51"
        document.getElementById("JavaScript").style.opacity = "1";
    }
    
    if ( score>=prixPhp ){
        document.getElementById("PHP").style.backgroundColor = "#0bda51";
        document.getElementById("PHP").style.opacity = "1";
    }

    if ( score>=prixC ){
        document.getElementById("C").style.backgroundColor = "#0bda51";
        document.getElementById("C").style.opacity = "1";
    }

    if ( score >= prixJava ) {
        document.getElementById("Java").style.backgroundColor = "#009000";
        document.getElementById("Java").style.opacity = "1"
    }

    if ( score>=prixKotlin ){
        document.getElementById("Kotlin").style.backgroundColor = "#009000";
        document.getElementById("Kotlin").style.opacity = "1";
    }

    if ( score>=prixPython ) {
        document.getElementById("Python").style.backgroundColor = "#009000";
        document.getElementById("Python").style.opacity = "1";
    }
   
    if (score>=prixRuby  ) {
        document.getElementById("Ruby").style.backgroundColor ="#009000"
        document.getElementById("Ruby").style.opacity = "1"
    }
    return elements.displayScore.innerHTML = score;
}

// Variables incrémentation pour les items

let incrementHtml = 1;
let incrementJs = 1;
let incrementPhp = 1;
let incrementC = 1;
let incrementJava = 1;
let incrementPython = 1;
let incrementRuby = 1;
let incrementKotlin = 1;

// Bouton d'upgrade le clic sur le bouton "enter" passe à +2/+3/etc

let prix;
let augmentation;
let couleur;
let langage;
let incrementLangage;

function incrementer() { 
    if(score >= prix && timeOver == 0){
    increment = increment + incrementLangage; 
    score = score - prix;
    prix = prix + augmentation;
    document.getElementById(langage).style.backgroundColor = couleur;
    document.getElementById(langage).style.opacity = "0.5";
}
}

function upgradeHtml() {
    prix = prixHtml, couleur = "#F0A40C", langage = "HTML", augmentation = 50, incrementLangage = incrementHtml;
    incrementer(); 
    prixHtml = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixHtml.innerHTML = "HTML/CSS" + "<br />" + prixHtml;
    }

function upgradeJs() {
    prix = prixJs, couleur = "#F4C100", langage = "JavaScript", augmentation = 250, incrementLangage = incrementJs;
    incrementer();
    prixJs = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJs.innerHTML = "JavaScript" + "<br />" + prixJs;
}

function upgradePhp() {
    prix = prixPhp, couleur = "#F0A40C", langage = "PHP", augmentation = 1300, incrementLangage = incrementPhp;
    incrementer();
    prixPhp = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixPhp.innerHTML = "PHP" + "<br />" + prixPhp;
    }

function upgradeC() {
    prix = prixC, couleur = "#F0980C", langage = "C", augmentation = 7000, incrementLangage = incrementC;
    incrementer();
    prixC = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixC.innerHTML = "C" + "<br />" + prixC;
    }

function upgradeJava() {
    prix = prixJava, couleur = "#D96900", langage = "Java", augmentation = 40000, incrementLangage = incrementJava;
    incrementer();
    prixJava = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixJava.innerHTML = "Java" + "<br />" + prixJava;
    } 

function upgradeKotlin() {
    prix = prixKotlin, couleur = "#F5630F", langage = "Kotlin", augmentation = 220000, incrementLangage = incrementKotlin;
    incrementer();
    prixKotlin = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixKotlin.value = "Kotlin" + "<br />" + prixKotlin;
    }

function upgradePython() {
    prix = prixPython, couleur = "#F0490C", langage = "Python", augmentation = 1200000, incrementLangage = incrementPython;
    incrementer();
    prixPython = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixPython.innerHTML = "Python" + "<br />" + prixPython;
    }
     

function upgradeRuby() {
    prix = prixRuby, couleur = "#EB371F", langage = "Ruby", augmentation = 660000, incrementLangage = incrementRuby;
    incrementer();
    prixRuby = prix;
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixRuby.innerHTML = "Ruby" + "<br />" + prixRuby;
    }  

    /*TEST ECHOUE, LE PRIXTOCALCULATE SE MELANGE AVEC TOUS LES LANGAGES
    function incrementer(prixToCalculate, langage, couleur, augmentation, incrementLangage) { 
    if(score >= prixToCalculate && timeOver == 0){
    increment = increment + incrementLangage; 
    score = score - prixToCalculate;
    prixToCalculate = prixToCalculate + augmentation;
    document.getElementById(langage).style.backgroundColor = couleur;
    document.getElementById(langage).style.opacity = "0.5";
    return elements.displayScore.innerHTML = score, elements.displayIncrement.innerHTML = increment, displayPrixHtml.innerHTML = "HTML/CSS" + "<br />" + prixToCalculate;}
}*/

// Les items / Les multiplicateurs

let prixMultiHtml = 1;
let prixMultiJs = 1;
let prixMultiPHP = 1;

function multiHtml() {
    if(score >= prixMultiHtml){
    incrementAutoFront = incrementAutoFront * 2; 
    score = score - prixMultiHtml;
    prixMultiHtml = prixMultiHtml + 50;
    document.getElementById("iconHTml").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score;
    }}

function multiPHP() {
    if(score >= prixMultiPHP){
    incrementAutoBack = incrementAutoBack * 2; 
    score = score - prixMultiPHP;
    prixMultiPHP = prixMultiPHP + 50;
    document.getElementById("iconPHP").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score;
    }}

function multiJs() {
    if(score >= prixMultiJs){
    alert("Félicitations ! Vous êtes en burn out !")
    score = score - prixMultiJs;
    prixMultiJs = prixMultiJs + 50;
    document.getElementById("iconJs").style.opacity = "0.5";
    return elements.displayScore.innerHTML = score;
    }}
    
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

 /*function auto() {
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
 }*/

 //Fonction multiplicateurs d'auto-clics (Colonnes de gauche)
var intervalAutoFront = 0;
var incrementAutoFront = 1;

var intervalAutoBack = 0;
var incrementAutoBack = 1;

var intervalAutoFull = 0;
var incrementAutoFull = 1;

var intervalAutoSenior = 0;
var incrementAutoSenior = 1;

var intervalAutoDev = 0;
var incrementAutoDev = 1;

function autoFront() {
    if (intervalAutoFront == 0){
    score = score + incrementAutoFront;
    intervalAutoFront++;
    const intervalEntree = setInterval(autoFront, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAutoFront == 1){
        score = score + incrementAutoFront;
        return elements.displayScore.innerHTML = score
        }
}
function autoBack() {
 if (intervalAutoBack == 0){
    score = score + incrementAutoBack;
    intervalAutoBack++;
    const intervalEntree = setInterval(autoBack, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAutoBack == 1){
        score = score + incrementAutoBack;
        return elements.displayScore.innerHTML = score
        }
}
function autoFull() {
 if (intervalAutoFull == 0){
    score = score + incrementAutoFull;
    intervalAutoFull++;
    const intervalEntree = setInterval(autoFull, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAutoFull == 1){
        score = score + incrementAutoFull;
        return elements.displayScore.innerHTML = score
        }
}
function autoSenior() {
    if (intervalAutoSenior == 0){
    score = score + incrementAutoSenior;
    intervalAutoSenior++;
    const intervalEntree = setInterval(autoSenior, 1000);
    return elements.displayScore.innerHTML = score
}
    else if (intervalAutoSenior == 1){
        score = score + incrementAutoSenior;
        return elements.displayScore.innerHTML = score
        }
}
function autoDev() {
    if (increment>=1){
        incrementAuto++
    }
}
//Popups au survol
let iconeHtml = document.querySelector('#iconHTml');
let iconeJs = document.querySelector('#iconJS');
let iconePhp = document.querySelector('#iconPHP');

iconeHtml.addEventListener("mouseover", function() {
    tutoHtml.classList.toggle("show");
    setTimeout(function() {
      tutoHtml.classList.toggle("show");
    }, 2000);
  }, false);

iconeJs.addEventListener("mouseover", function() {
    tutoJs.classList.toggle("show");
    setTimeout(function() {
      tutoJs.classList.toggle("show");
    }, 2000);
  }, false);

iconePhp.addEventListener("mouseover", function() {
    tutoPHP.classList.toggle("show");
    setTimeout(function() {
      tutoPHP.classList.toggle("show");
    }, 2000);
  }, false);

/*iconeHtml.onmouseover = function survol()
   {
    var tutoHtml = document.getElementById("tutoHtml");
    tutoHtml.classList.toggle("show");
}*/