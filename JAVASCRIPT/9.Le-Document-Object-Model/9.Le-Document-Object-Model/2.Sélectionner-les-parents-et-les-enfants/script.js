/*  
    Les élément imbriqués de notre page HTML deviennent des objets imbriqués du DOM après analyse d'un navigateur.

    <div>
        <p>Hello</p>
    </div>
    
    =>

    {
        tag: "div",
        content: "",
        children: [
            {
                tag: "p",
                content: "Hello"
            },
            ...
        ]
    }
    // 🔼 Ceci est une image pour vous aider à comprendre, ça ne représente pas les propriétés exactes utilisées.

    Découvrons les propriétés pratiques liées aux relations parents / enfants.
*/


    
    