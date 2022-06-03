const elements = {
    displayScore: null,
}

const click = {
    scoreParClic: 1
}

// Lier les elements aux id
elements.multiplier = document.querySelector('#multiplier');
elements.coffee = document.querySelector('#coffee');
elements.displayScore = document.querySelector('#score')

// Affiche le bouton Score



// Fonction qui incrémente le score quand tu cliques + affichage du score.

let score = 0;
let increment = 1;
let prixHtml = 5;
let prixJs = 50;
let prixPhp = 150;
let prixC = 200;
let prixJava = 250;
let prixKotlin = 300;
let prixPython = 350;
let prixRuby = 400;
let prixSwift = 450;
let prixSql = 500;
elements.displayScore.innerHTML = score;

function incrementScore()
{   
    score = score + increment;
    if(score>=prixHtml){
        document.getElementById("HTML").style.backgroundColor = "red";
        document.getElementById("HTML").style.opacity = "1";
    }
    if (score>=prixJs){
        document.getElementById("JavaScript").style.backgroundColor = "red"
        document.getElementById("JavaScript").style.opacity = "1";
    }
    if (score>=prixPhp){
        document.getElementById("PHP").style.backgroundColor = "red";
        document.getElementById("PHP").style.opacity = "1";
    }
    if (score>=prixC){
        document.getElementById("C").style.backgroundColor = "red";
        document.getElementById("C").style.opacity = "1";
    }
    if (score >= prixJava ) {
        document.getElementById("Java").style.backgroundColor = "red";
        document.getElementById("Java").style.opacity = "1"
    }
    if (score >= prixKotlin){
        document.getElementById("Kotlin").style.backgroundColor = "red";
        document.getElementById("Kotlin").style.opacity = "1";
    }
    if (score >= prixPython) {
        document.getElementById("Python").style.backgroundColor = "red";
        document.getElementById("Python").style.opacity = "1";
    }
    if (score >= prixRuby ) {
        document.getElementById("Ruby").style.backgroundColor ="red"
        document.getElementById("Ruby").style.opacity = "1"
    }
    if ( score >= prixSwift) {
        document.getElementById("swift").style.backgroundColor = "red";
        document.getElementById("swift").style.opacity = "1";
    }
    if ( score >= prixSql ) {
        document.getElementById("SQL").style.backgroundColor = "red";
        document.getElementById("SQL").style.opacity = "1";
    }
    
    
    
    return elements.displayScore.innerHTML = score;
}
console.log(score);

// Le multiplicateur 


// Bouton d'upgrade le clic sur le bouton "enter" passe à +2/+3/etc

function upgradeHtml() {
    if(score >= prixHtml){
    increment = increment + 1; 
    score = score - prixHtml;
    prixHtml = prixHtml + 50;
    return elements.displayScore.innerHTML = score;
    }
    }

function upgradeJs() {
    if(score >= prixJs){
    increment = increment + 1; 
    score = score - prixJs;
    prixJs = prixJs + 100;
    return elements.displayScore.innerHTML = score;
    }
    }

function upgradePhp() {
    if(score >= prixPhp){
    increment = increment + 1; 
    score = score - prixPhp;
    prixPhp = prixPhp + 200;
    return elements.displayScore.innerHTML = score;
    }
    }    

function upgradeC() {
    if(score >= prixC){
    increment = increment + 1; 
    score = score - prixC;
    prixC = prixC + 200;
    return elements.displayScore.innerHTML = score;
    }
    }

    function upgradeJava() {
        if(score >= prixJava){
        increment = increment + 1; 
        score = score - prixJava;
        prixJava = prixJava + 200;
        return elements.displayScore.innerHTML = score;
        }
        }    

// Prix du multiplicateur qui augmente



// Case grisée

var a= elements.displayScore;
//riser les miultiplicateur
if(score<prixHtml){  
 document.getElementById("HTML").style.backgroundColor = "grey";
 document.getElementById("HTML").style.opacity = "0.3";
 }  
if(score<prixJs){
    document.getElementById("JavaScript").style.backgroundColor = "grey"
    document.getElementById("JavaScript").style.opacity = "0.3";
}


if (score<prixPhp) {
    document.getElementById("PHP").style.backgroundColor = "grey";
    document.getElementById("PHP").style.opacity = "0.3";
}

if (score<prixC){
    document.getElementById("C").style.backgroundColor =  "grey";
    document.getElementById("C").style.opacity = "0.3"
}

if (score < prixJava ) {
    document.getElementById("Java").style.backgroundColor = "grey";
    document.getElementById("Java").style.opacity = "0.3";
}

if (score < prixKotlin ) {
    document.getElementById("Kotlin").style.backgroundColor = "grey";
    document.getElementById("Kotlin").style.opacity = "0.3";
}
if (score < prixPython) {
    document.getElementById("Python").style.backgroundColor = "grey";
    document.getElementById("Python").style.opacity = "0.3";
}
if (score < prixRuby ) {
    document.getElementById("Ruby").style.backgroundColor ="grey"
    document.getElementById("Ruby").style.opacity = "0.3"
}
if ( score < prixSwift) {
    document.getElementById("swift").style.backgroundColor = "grey";
    document.getElementById("swift").style.opacity = "0.3";
}
if ( score < prixSql ) {
    document.getElementById("SQL").style.backgroundColor = "grey";
    document.getElementById("SQL").style.opacity = "0.3";
}







// Autoclick 

var autoClick; 


