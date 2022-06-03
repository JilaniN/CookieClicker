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

function incrementScore()
{   
    score++;
    return elements.displayScore.innerHTML = score;
}
console.log(score);

// Le multiplicateur 

function multiClick() {
    while (multiclic === true){
       return elements.score*2; //onclick
    }
  
}

// Prix du multiplicateur qui augmente