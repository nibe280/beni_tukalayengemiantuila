/* 
    Les méthodes de sélection sont disponibles via l'objet document, mais aussi via tous les objets représentant des éléments. 
*/

/* 
    1 document|element.querySelector(selecteurCSS)

    Méthode "récente" qui sélectionne un élément facilement, à l'aide de n'importe quel sélecteur, (h1, #main-title, .title, html body h1, etc ...).

    Retourne un objet représentant le premier élément trouvé.
*/

const mainTitle = document.querySelector('h1');
console.log(mainTitle);


/* 
    2 document|element.querySelectorAll(selecteurCSS)

    Méthode "récente" permettant de sélectionner plusieurs noeuds du DOM. 
    Un noeud de DOM peut être du texte, un commentaire, ou encore un élément.
    
    Retourne une nodelist statique.

    Le fait qu'elle soit statique signifie qu'elle ne réagit pas à des changements ultérieurs sur les éléments qu'elle contient, elle reste toujours la même.
*/
    
const listElements = document.querySelectorAll('ul li');
console.log(listElements);


/* 
    3 .getElementsByClassName(strClassName)
    
    Retourne une HTMLCollection "live", qui réagit donc aux potentiels changements arrivants aux éléments qu'elle contient. 

*/



/* 
    4 document.getElementById(strID)
    
    Retourne un objet élément en fonction de l'ID passé en argument. 
    
    Cette méthode est seulement accessible via l'objet document, pas sur les éléments. 
*/



/* 
    5 document.getElementsByTagName(strTag)
    
    N'accepte qu'un élément en argument, pas de sélecteur contenant plusieurs éléments.
    
    Retourne une HTMLCollection.
*/




