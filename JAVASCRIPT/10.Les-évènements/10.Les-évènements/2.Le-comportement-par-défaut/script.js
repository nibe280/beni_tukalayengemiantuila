/* 
    Certains éléments ont déjà des écouteurs d'évènement par défaut et vont donc avoir un comportement spécial quand on les déclenche.

    Les formulaires vont tenter d'envoyer les données vers une page.

    Les liens nous font nous déplacer au click.

    Parfois, on a envie de prévenir ces comportements par défaut, on utilisera alors EventObject.preventDefault().

    Testons tout ça...
*/
const links = document.querySelectorAll('a');

links.forEach(link => link.addEventListener("click", handleLinkClick))

function handleLinkClick(event) {
    event.preventDefault();
    console.log("Vous avez cliqué sur un lien, mais le comportement par défaut a été empêché.");
}


const form = document.querySelector('form');
form.addEventListener("submit", handleFormSubmit)

function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Le formulaire a été soumis, mais le comportement par défaut a été empêché.");
}