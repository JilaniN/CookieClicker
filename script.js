const elements = {
    score: 0,
    displayScore: null,
    multiplier: null,
    coffee: null,
    autoClick: null,
}

const click = {
    scoreParClic: 1
}

// Lier les elements aux id
elements.score = document.querySelector('#score');
elements.multiplier = document.querySelector('#multiplier');
elements.coffee = document.querySelector('#coffee');
elements.displayScore = document.querySelector('#displayScore')

// Affiche le bouton Score



// Fonction qui incrémente le score quand tu cliques + affichage du score.

let score = 0;
let increment = 1;

function incrementScore()
{   
    score = score + increment;
    return elements.displayScore.innerHTML = score;
}
console.log(score);

// Le multiplicateur 

let multiclic = true;

console.log(multiclic);

// Bouton d'upgrade le clic sur le bouton "enter" passe à +2

function multiClick() {
    increment = increment + 1; 

    }


// Prix du multiplicateur qui augmente