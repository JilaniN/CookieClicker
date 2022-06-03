const elements = {
    score: null,
    multiplier: null,
    coffee: null,
    autoClick: null,
}

// Affiche le bouton Score



// Fonction qui incrémente le score quand tu cliques.

function incrementScore()
{
    var score = parseInt(document.getElementById('number').value, 10);
    score = isNaN(score) ? 0 : score;
    score++;
    document.getElementById('number').value = score;
}

/*FONCTION INITIALE (POUR CORRECTION SI BESOIN)

function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

    COTE HTML CA RESSEMBLE A CA :

    <form>
   <input type="text" id="number" value="0"/>
   <input type="button" onclick="incrementValue()" value="Increment Value" />
</form>*/


// AFFICHAGE DU SCORE


// Le multiplicateur 

function multiClick() {
    if (!elements.isxTwoApplied) {
       if (elements.foodPerClick >=2) {
          elements.foodPerClick *= 2
          elements.isxTwoApplied = true
       } else{
           
       }

    //rest of the code
  }
}