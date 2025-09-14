# 🌊 Guide : La Propagation des Événements (Event Bubbling)

Ce guide explique le phénomène de **propagation** ou **"bubbling"** des événements dans le DOM, un concept fondamental en JavaScript.

## 📋 Code de Base

```javascript
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');

container1.addEventListener("click", handleClick1)
function handleClick1(e) {
    console.log("Container 1 - Cible de l'évènement :", e.target);
    console.log("Container 1 - Élément actuel :", e.currentTarget);
}

container2.addEventListener("click", handleClick2)
function handleClick2(e) {
    console.log("Container 2 - Cible de l'évènement :", e.target);
    console.log("Container 2 - Élément actuel :", e.currentTarget);
}

container3.addEventListener("click", handleClick3)
function handleClick3(e) {
    console.log("Container 3 - Cible de l'évènement :", e.target);
    console.log("Container 3 - Élément actuel :", e.currentTarget);
}
```

## 🤔 Qu'est-ce que la Propagation des Événements ?

La **propagation des événements** (ou "Event Bubbling") est le processus par lequel un événement **remonte** dans l'arbre DOM depuis l'élément où il a été déclenché jusqu'à l'élément racine (`window`).

### Visualisation :
```
window
  ↑
document
  ↑
html
  ↑
body
  ↑
div.container-1
  ↑
div.container-2
  ↑
div.container-3  ← CLIC ICI
```

## 🔧 Étape par Étape : Comprendre la Propagation

### Étape 1 : Structure HTML Nécessaire
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Propagation des Événements</title>
    <style>
        .container-1 {
            padding: 50px;
            background-color: red;
            border: 2px solid darkred;
        }
        .container-2 {
            padding: 30px;
            background-color: blue;
            border: 2px solid darkblue;
        }
        .container-3 {
            padding: 20px;
            background-color: green;
            border: 2px solid darkgreen;
            color: white;
        }
    </style>
</head>
<body>
    <div class="container-1">
        Container 1
        <div class="container-2">
            Container 2
            <div class="container-3">
                Container 3 - Cliquez ici !
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

### Étape 2 : Sélectionner les Éléments
```javascript
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');
```

### Étape 3 : Ajouter des Écouteurs à Chaque Container
```javascript
container1.addEventListener("click", handleClick1);
container2.addEventListener("click", handleClick2);
container3.addEventListener("click", handleClick3);
```

### Étape 4 : Observer les Fonctions de Gestion
```javascript
function handleClick1(e) {
    console.log("🔴 Container 1 déclenché !");
    console.log("Cible originale :", e.target.className);
    console.log("Élément actuel :", e.currentTarget.className);
}

function handleClick2(e) {
    console.log("🔵 Container 2 déclenché !");
    console.log("Cible originale :", e.target.className);
    console.log("Élément actuel :", e.currentTarget.className);
}

function handleClick3(e) {
    console.log("🟢 Container 3 déclenché !");
    console.log("Cible originale :", e.target.className);
    console.log("Élément actuel :", e.currentTarget.className);
}
```

## 🧪 Que se Passe-t-il Quand Vous Cliquez ?

### Si vous cliquez sur Container 3 :
```
Console :
🟢 Container 3 déclenché !
   Cible originale : container-3
   Élément actuel : container-3

🔵 Container 2 déclenché !
   Cible originale : container-3
   Élément actuel : container-2

🔴 Container 1 déclenché !
   Cible originale : container-3
   Élément actuel : container-1
```

### L'ordre d'exécution :
1. **Container 3** (élément cliqué)
2. **Container 2** (parent du container 3)
3. **Container 1** (grand-parent du container 3)

## 🔍 Différence entre `target` et `currentTarget`

| Propriété | Description |
|-----------|-------------|
| `e.target` | L'élément **original** qui a reçu le clic |
| `e.currentTarget` | L'élément **actuel** qui traite l'événement |

### Exemple Pratique :
```javascript
function handleClick(e) {
    console.log(`Target: ${e.target.className}`);        // Toujours "container-3"
    console.log(`CurrentTarget: ${e.currentTarget.className}`); // Change selon l'élément
    
    if (e.target === e.currentTarget) {
        console.log("🎯 Événement déclenché directement sur cet élément");
    } else {
        console.log("🌊 Événement propagé depuis un élément enfant");
    }
}
```

## 🛑 Comment Arrêter la Propagation

### Méthode 1 : `stopPropagation()`
```javascript
function handleClick3(e) {
    console.log("🟢 Container 3 - Je vais arrêter la propagation !");
    e.stopPropagation(); // Arrête la propagation vers les parents
}
```

**Résultat** : Seul Container 3 se déclenchera, pas les parents.

### Méthode 2 : `stopImmediatePropagation()`
```javascript
container3.addEventListener("click", firstHandler);
container3.addEventListener("click", secondHandler);

function firstHandler(e) {
    console.log("Premier handler");
    e.stopImmediatePropagation(); // Arrête TOUT
}

function secondHandler(e) {
    console.log("Ce handler ne s'exécutera jamais");
}
```

## 🎯 Exemples Pratiques Avancés

### 1. Délégation d'Événements
```javascript
// Au lieu d'ajouter un écouteur à chaque bouton...
document.querySelector('.button-container').addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        console.log(`Bouton ${e.target.textContent} cliqué !`);
    }
});
```

**HTML :**
```html
<div class="button-container">
    <button class="btn">Bouton 1</button>
    <button class="btn">Bouton 2</button>
    <button class="btn">Bouton 3</button>
    <!-- Même les boutons ajoutés dynamiquement fonctionneront ! -->
</div>
```

### 2. Menu Contextuel
```javascript
document.addEventListener('click', function(e) {
    const menu = document.querySelector('#context-menu');
    
    // Fermer le menu si on clique ailleurs
    if (!menu.contains(e.target)) {
        menu.style.display = 'none';
    }
});
```

### 3. Modal avec Fermeture sur Clic Extérieur
```javascript
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');

modal.addEventListener('click', function(e) {
    // Si on clique sur l'overlay (pas sur le contenu)
    if (e.target === modal) {
        closeModal();
    }
});

modalContent.addEventListener('click', function(e) {
    e.stopPropagation(); // Empêche la fermeture si on clique sur le contenu
});
```

### 4. Liste Dynamique avec Suppression
```javascript
const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        const todoItem = e.target.closest('.todo-item');
        todoItem.remove();
    }
    
    if (e.target.classList.contains('complete-btn')) {
        const todoItem = e.target.closest('.todo-item');
        todoItem.classList.toggle('completed');
    }
});
```

## 📊 Les 3 Phases de Propagation

### Phase 1 : Capture (descendante)
L'événement descend depuis `window` vers la cible.

### Phase 2 : Target (cible)
L'événement atteint l'élément cible.

### Phase 3 : Bubbling (remontante)
L'événement remonte depuis la cible vers `window`.

### Écouter en Phase de Capture :
```javascript
element.addEventListener('click', handler, true); // Le 3ème paramètre active la capture
// ou
element.addEventListener('click', handler, { capture: true });
```

## 🔧 Options Avancées d'addEventListener

```javascript
element.addEventListener('click', handler, {
    capture: false,     // Phase de capture (false = bubbling)
    once: true,         // Se déclenche une seule fois
    passive: false,     // Indique si preventDefault() sera appelé
    signal: abortController.signal // Pour annuler l'écouteur
});
```

## ⚠️ Pièges Courants

### 1. Confusion entre target et currentTarget
```javascript
// ❌ Mauvais
function handleClick(e) {
    e.target.style.backgroundColor = 'red'; // Peut colorer le mauvais élément
}

// ✅ Correct
function handleClick(e) {
    e.currentTarget.style.backgroundColor = 'red'; // Colore l'élément avec l'écouteur
}
```

### 2. Oubli de stopPropagation()
```javascript
// ❌ Problématique
function handleButtonClick(e) {
    console.log('Bouton cliqué');
    // L'événement remonte et peut déclencher d'autres actions
}

// ✅ Solution
function handleButtonClick(e) {
    e.stopPropagation();
    console.log('Bouton cliqué');
}
```

## 🧪 Exercices Pratiques

### Exercice 1 : Créer un Système d'Onglets
```javascript
const tabContainer = document.querySelector('.tab-container');

tabContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('tab')) {
        // Retirer la classe active de tous les onglets
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Ajouter la classe active à l'onglet cliqué
        e.target.classList.add('active');
    }
});
```

### Exercice 2 : Jeu de Tic-Tac-Toe
```javascript
const gameBoard = document.querySelector('.game-board');
let currentPlayer = 'X';

gameBoard.addEventListener('click', function(e) {
    if (e.target.classList.contains('cell') && !e.target.textContent) {
        e.target.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});
```

## 🎯 Résumé

### Points Clés :
1. **Les événements remontent** automatiquement dans l'arbre DOM
2. **`e.target`** = élément cliqué, **`e.currentTarget`** = élément avec l'écouteur
3. **`stopPropagation()`** arrête la remontée
4. **La délégation d'événements** permet de gérer plusieurs éléments avec un seul écouteur
5. **Utilisez la propagation** pour créer des interfaces plus efficaces

### Avantages de la Propagation :
- **Performance** : Moins d'écouteurs d'événements
- **Flexibilité** : Gestion d'éléments ajoutés dynamiquement
- **Simplicité** : Code plus maintenable

La propagation des événements est un **superpouvoir** JavaScript ! 🚀
