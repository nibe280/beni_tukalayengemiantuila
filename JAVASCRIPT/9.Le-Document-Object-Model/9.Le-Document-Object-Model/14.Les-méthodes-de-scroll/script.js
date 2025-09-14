/* 
    Il est courant de vouloir se déplacer à un endroit spécial d'une page.
    Il existe toutes sortes de méthodes et de propriétés pour y arriver.

*/



/* 
    document.documentElement.scrollTop

    Permet de se déplacer à un nombre X de pixels depuis le haut du document.
*/
  

/* 
    Window.scrollTo(x,y || options{top, left, behavior})
    Exactemeent la même méthode que Window.scroll() ...

    Scroll jusqu'à un certain endroit défini par les paramètres.
    Si on passe deux arguments, cela correspond aux coordonnées x,y.
    Si l'on passe un objet, alors on peut définir les propriétés top, left et behavior.
*/




/* 
    Element.scrollIntoView(alignToTop || options)

    Scroll jusqu'à l'élément appelant.
    
    Le premier paramètre aligne le haut de l'élément avec le haut du viewport s'il est sur true, qui est la valeur par défaut.

    Au contraire, il alignera le bas de l'élément avec le bas du 
    viewport si le paramètre est sur false.
    
*/




/* 
    Window.scrollby(x,y || options)

    Permet cette fois-ci de scroller par montant de pixels.
*/

