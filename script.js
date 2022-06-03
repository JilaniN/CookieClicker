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

function incrementScore()
{   
    score = score + increment;
    return elements.displayScore.innerHTML = score;
}
console.log(score);

// Le multiplicateur 


// Bouton d'upgrade le clic sur le bouton "enter" passe à +2

function upgradeHtml() {
    if(score >= prixHtml){
    increment = increment + 1; 
    score = score - prixHtml;
    prixHtml = prixHtml + 50;
    }
    }


// Prix du multiplicateur qui augmente