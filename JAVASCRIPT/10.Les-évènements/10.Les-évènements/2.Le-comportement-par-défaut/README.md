# 🚫 Guide : Prévenir le Comportement par Défaut avec `preventDefault()`

Ce guide vous explique comment empêcher les actions par défaut des éléments HTML comme les liens et les formulaires.

## 📋 Code de Base

```javascript
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
```

## 🤔 Qu'est-ce que le Comportement par Défaut ?

Certains éléments HTML ont des **actions automatiques** :

| Élément | Comportement par Défaut |
|---------|------------------------|
| `<a href="...">` | Redirige vers l'URL |
| `<form>` | Envoie les données et recharge la page |
| `<button type="submit">` | Soumet le formulaire |
| `<input type="submit">` | Soumet le formulaire |

## 🛑 Qu'est-ce que `preventDefault()` ?

`event.preventDefault()` est une méthode qui **annule** l'action par défaut d'un événement.

### Syntaxe :
```javascript
function handleEvent(event) {
    event.preventDefault(); // Empêche l'action par défaut
    // Votre code personnalisé ici...
}
```

## 🔧 Étape par Étape : Liens

### Étape 1 : HTML de Base
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Test Liens</title>
</head>
<body>
    <a href="https://www.google.com">Aller sur Google</a>
    <a href="page2.html">Page 2</a>
    <a href="#section1">Section 1</a>
    
    <script src="script.js"></script>
</body>
</html>
```

### Étape 2 : Sélectionner TOUS les Liens
```javascript
const links = document.querySelectorAll('a');
```
- `querySelectorAll('a')` : Sélectionne **tous** les éléments `<a>`
- Retourne une **NodeList** (liste d'éléments)

### Étape 3 : Ajouter un Écouteur à Chaque Lien
```javascript
links.forEach(link => link.addEventListener("click", handleLinkClick))
```
- `forEach()` : Parcourt chaque lien de la liste
- Ajoute un écouteur d'événement "click" à chacun

### Étape 4 : Créer la Fonction de Gestion
```javascript
function handleLinkClick(event) {
    event.preventDefault();
    console.log("Vous avez cliqué sur un lien, mais le comportement par défaut a été empêché.");
}
```

## 🔧 Étape par Étape : Formulaires

### Étape 1 : HTML de Base
```html
<form id="monForm">
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" required>
    
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required>
    
    <button type="submit">Envoyer</button>
</form>
```

### Étape 2 : Sélectionner le Formulaire
```javascript
const form = document.querySelector('form');
```

### Étape 3 : Écouter l'Événement "submit"
```javascript
form.addEventListener("submit", handleFormSubmit)
```
⚠️ **Important** : On écoute `"submit"`, pas `"click"` !

### Étape 4 : Empêcher la Soumission
```javascript
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Le formulaire a été soumis, mais le comportement par défaut a été empêché.");
}
```

## 🎯 Exemples Pratiques Avancés

### 1. Validation de Formulaire Personnalisée
```javascript
function handleFormSubmit(event) {
    event.preventDefault();
    
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    
    if (nom.length < 2) {
        alert("Le nom doit contenir au moins 2 caractères !");
        return;
    }
    
    if (!email.includes('@')) {
        alert("Email invalide !");
        return;
    }
    
    console.log("Formulaire valide !");
    // Ici, vous pourriez envoyer les données avec fetch()
}
```

### 2. Navigation Personnalisée pour les Liens
```javascript
function handleLinkClick(event) {
    event.preventDefault();
    
    const url = event.target.href;
    console.log(`Redirection vers : ${url}`);
    
    // Animation personnalisée avant redirection
    document.body.style.opacity = "0.5";
    
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}
```

### 3. Empêcher Seulement Certains Liens
```javascript
function handleLinkClick(event) {
    const url = event.target.href;
    
    // Empêcher seulement les liens externes
    if (url.startsWith('http')) {
        event.preventDefault();
        
        const confirm = window.confirm(`Voulez-vous vraiment aller sur ${url} ?`);
        if (confirm) {
            window.open(url, '_blank');
        }
    }
    // Les liens internes fonctionnent normalement
}
```

### 4. Menu Déroulant (Liens d'Ancrage)
```javascript
function handleLinkClick(event) {
    const href = event.target.getAttribute('href');
    
    // Si c'est un lien d'ancrage (#section1)
    if (href.startsWith('#')) {
        event.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    }
}
```

## 📊 Cas d'Usage Courants

### ✅ Quand Utiliser `preventDefault()` :
- **Validation de formulaires** avant envoi
- **Navigation personnalisée** (SPA - Single Page Application)
- **Confirmations** avant actions importantes
- **Animations** avant redirection
- **Liens d'ancrage** avec défilement fluide

### ❌ Quand NE PAS l'utiliser :
- Si vous voulez le **comportement normal**
- Pour les **liens de navigation** simples
- Pour les **formulaires basiques** qui fonctionnent bien

## 🧪 Comment Tester

### Test 1 : Sans preventDefault()
```javascript
// Commentez event.preventDefault()
function handleLinkClick(event) {
    // event.preventDefault();
    console.log("Clic sur lien");
}
```
**Résultat** : Le navigateur suit le lien normalement

### Test 2 : Avec preventDefault()
```javascript
function handleLinkClick(event) {
    event.preventDefault();
    console.log("Clic sur lien");
}
```
**Résultat** : Le lien ne redirige plus, seul votre code s'exécute

## 🔍 Autres Méthodes Utiles

### `stopPropagation()`
```javascript
function handleClick(event) {
    event.stopPropagation(); // Empêche la propagation vers les parents
    console.log("Événement arrêté ici");
}
```

### `stopImmediatePropagation()`
```javascript
function handleClick(event) {
    event.stopImmediatePropagation(); // Arrête TOUS les autres écouteurs
    console.log("Plus aucun autre écouteur ne sera déclenché");
}
```

## ⚠️ Points Importants

### Structure du Paramètre Event
```javascript
function handleEvent(event) {
    console.log(event.type);        // Type d'événement ("click", "submit")
    console.log(event.target);      // Élément qui a déclenché l'événement
    console.log(event.currentTarget); // Élément sur lequel l'écouteur est attaché
    
    event.preventDefault();         // Empêche le comportement par défaut
}
```

### Vérifier si preventDefault() a été appelé
```javascript
function handleClick(event) {
    event.preventDefault();
    
    if (event.defaultPrevented) {
        console.log("Le comportement par défaut a été empêché !");
    }
}
```

## 🎯 Résumé
1. **Comprendre** les comportements par défaut des éléments
2. **Utiliser** `event.preventDefault()` pour les empêcher
3. **Implémenter** votre logique personnalisée
4. **Tester** avec et sans preventDefault() pour voir la différence

`preventDefault()` vous donne le **contrôle total** sur le comportement de votre page ! 🚀
