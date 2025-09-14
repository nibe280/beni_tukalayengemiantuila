/* 
    Ces trois propriétés pratiques se ressemblent, mais il faut bien comprendre leurs différences.
*/


/* 
    Element : innerHTML = string

    Transforme la chaîne de caractères fournie en éléments HTML si la syntaxe est respectée.
    Rajoute du texte au contenu d'un élément si la chaîne fournie n'est pas au format HTML.
    
    Cette propriété comporte des risques si elle est mal utilisée.
    Nous en parlerons un peu plus tard.
*/

    // Rajoute un élément HMTL dans l'élément container.

    // Retourne le contenu interne de container.

/* 
    Element : textContent

    Retourne ou modifie le texte à l'intérieur d'un élément.
    Retournera également le contenu en "visibility: hidden;", contrairement à innerText.
*/

    // Retourne le texte à l'intérieur de container, caché ou pas.
    // Change le texte à l'intérieur de container


/* 
    Element : innerText
    
    Retourne ou modifie le texte à l'intérieur d'un élément.
    Retournera seulement le texte visible, non-dissimulé par visibility: hidden.
*/

    // Retourne seulement le texte visible
    


/* 
    De la dangerosité d'innerHTML.

    Il ne faut jamais transformer en HTML des données qu'on reçoit d'une source non-sûre.

    Par prévention, HTML n'exécute pas un "<script></script>"" avec innerHTML.

    Par exemple : body.innerHTML = "<script>alert("script malicieux)</script>" // ne fonctionne pas.

    Mais il existe d'autres façons d'exécuter du JS, comme par exemple avec ... l'élément <img> !

    `<img src='1' onerror='alert("Error loading image")'>`;
*/


/* 
    textContent vs innerText

    Une petite guerre existe pour savoir s'il faut utiliser textContent ou innerText.
    Il y a certes, certaines différences entre les deux, mais vous pouvez la plupart du temps les utiliser de manière interchangeable.
    Je vous conseille d'utiliser textContent qui est en général plus acceptée.
*/


