/*
  L'event delegation permet d'avoir un code plus propre et de moins surcharger le navigateur d'écouteurs d'évènement.
*/



const grid = document.querySelector('.grid');
const txtInfo = document.querySelector('.txt-info');

grid.addEventListener("click", handleGridClick)

function handleGridClick(e) {
    if(e.target.classList.contains('cell')) {
        txtInfo.textContent = `Vous avez cliqué sur la cellule ${e.target.dataset.cell}`;
    } else {
        txtInfo.textContent = `Vous n'avez pas cliqué sur une cellule`;
    } 
}

// Avantage : on n'a qu'un seul écouteur d'évènement au lieu de 9
// Inconvénient : il faut vérifier que la cible est bien celle qu'on veut avant de faire quoi que ce soit
// Utile pour les éléments qui sont créés dynamiquement (ex: liste de commentaires qui peut s'allonger)