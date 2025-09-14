# 🎯 Guide : La Délégation d'Événements (Event Delegation)

Ce guide explique la **délégation d'événements**, une technique puissante pour optimiser la gestion des événements et créer des interfaces dynamiques.

## 📋 Code de Base

```javascript
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
```

## 🤔 Qu'est-ce que la Délégation d'Événements ?

La **délégation d'événements** consiste à placer un seul écouteur d'événement sur un **élément parent** au lieu de placer plusieurs écouteurs sur les **éléments enfants**.

### Comparaison :

#### ❌ **Sans Délégation** (Approche Traditionnelle)
```javascript
// 9 écouteurs pour 9 cellules
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('click', function(e) {
        console.log(`Cellule ${e.target.dataset.cell} cliquée`);
    });
});
// = 9 écouteurs d'événements en mémoire
```

#### ✅ **Avec Délégation** (Approche Optimisée)
```javascript
// 1 seul écouteur pour toute la grille
const grid = document.querySelector('.grid');
grid.addEventListener('click', function(e) {
    if (e.target.classList.contains('cell')) {
        console.log(`Cellule ${e.target.dataset.cell} cliquée`);
    }
});
// = 1 seul écouteur d'événement en mémoire
```

## 🔧 Guide Étape par Étape

### Étape 1 : Structure HTML de Base
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Délégation d'Événements</title>
    <style>
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 5px;
            padding: 20px;
            border: 2px solid #333;
        }
        
        .cell {
            width: 100px;
            height: 100px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
        }
        
        .cell:hover {
            background-color: #e0e0e0;
        }
        
        .txt-info {
            margin-top: 20px;
            padding: 10px;
            background-color: #e8f4ff;
            border: 1px solid #b3d9ff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="grid">
        <div class="cell" data-cell="1">1</div>
        <div class="cell" data-cell="2">2</div>
        <div class="cell" data-cell="3">3</div>
        <div class="cell" data-cell="4">4</div>
        <div class="cell" data-cell="5">5</div>
        <div class="cell" data-cell="6">6</div>
        <div class="cell" data-cell="7">7</div>
        <div class="cell" data-cell="8">8</div>
        <div class="cell" data-cell="9">9</div>
    </div>
    
    <div class="txt-info">Cliquez sur une cellule...</div>
    
    <script src="script.js"></script>
</body>
</html>
```

### Étape 2 : Sélectionner l'Élément Parent
```javascript
const grid = document.querySelector('.grid');
const txtInfo = document.querySelector('.txt-info');
```

**Pourquoi le parent ?**
- Un seul écouteur gère tous les enfants
- Utilise la propagation des événements (bubbling)

### Étape 3 : Ajouter l'Écouteur sur le Parent
```javascript
grid.addEventListener("click", handleGridClick);
```

### Étape 4 : Vérifier la Cible dans la Fonction
```javascript
function handleGridClick(e) {
    // Vérifier si l'élément cliqué est une cellule
    if (e.target.classList.contains('cell')) {
        // Action pour les cellules
        txtInfo.textContent = `Vous avez cliqué sur la cellule ${e.target.dataset.cell}`;
    } else {
        // Action si ce n'est pas une cellule
        txtInfo.textContent = `Vous n'avez pas cliqué sur une cellule`;
    }
}
```

## 🎮 Applications Pratiques Complètes

### 1. 🧮 **Calculatrice Simple**
```javascript
// HTML structure needed:
// <div class="calculator">
//   <div class="display">0</div>
//   <div class="buttons">
//     <button class="number" data-number="1">1</button>
//     <button class="number" data-number="2">2</button>
//     <button class="operator" data-operator="+">+</button>
//     <button class="equals">=</button>
//     <button class="clear">C</button>
//   </div>
// </div>

const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
let currentValue = '0';
let operator = null;
let waitingForNewValue = false;

calculator.addEventListener('click', function(e) {
    // Délégation pour tous les boutons
    if (e.target.classList.contains('number')) {
        handleNumber(e.target.dataset.number);
    }
    else if (e.target.classList.contains('operator')) {
        handleOperator(e.target.dataset.operator);
    }
    else if (e.target.classList.contains('equals')) {
        handleEquals();
    }
    else if (e.target.classList.contains('clear')) {
        handleClear();
    }
});

function handleNumber(num) {
    if (waitingForNewValue) {
        display.textContent = num;
        waitingForNewValue = false;
    } else {
        display.textContent = display.textContent === '0' ? num : display.textContent + num;
    }
}

function handleOperator(op) {
    const inputValue = parseFloat(display.textContent);
    
    if (currentValue === null) {
        currentValue = inputValue;
    } else if (operator) {
        const result = calculate(currentValue, inputValue, operator);
        display.textContent = String(result);
        currentValue = result;
    }
    
    waitingForNewValue = true;
    operator = op;
}

function handleEquals() {
    const inputValue = parseFloat(display.textContent);
    
    if (currentValue !== null && operator) {
        const result = calculate(currentValue, inputValue, operator);
        display.textContent = String(result);
        currentValue = null;
        operator = null;
        waitingForNewValue = true;
    }
}

function handleClear() {
    display.textContent = '0';
    currentValue = null;
    operator = null;
    waitingForNewValue = false;
}

function calculate(firstValue, secondValue, operator) {
    switch (operator) {
        case '+': return firstValue + secondValue;
        case '-': return firstValue - secondValue;
        case '*': return firstValue * secondValue;
        case '/': return firstValue / secondValue;
        default: return secondValue;
    }
}
```

### 2. 📝 **Liste de Tâches Dynamique**
```javascript
const todoApp = document.querySelector('.todo-app');
const todoList = document.querySelector('.todo-list');
const addButton = document.querySelector('.add-todo');
const todoInput = document.querySelector('.todo-input');

// Délégation pour toutes les actions sur les tâches
todoList.addEventListener('click', function(e) {
    const todoItem = e.target.closest('.todo-item');
    
    if (e.target.classList.contains('complete-btn')) {
        toggleComplete(todoItem);
    }
    else if (e.target.classList.contains('delete-btn')) {
        deleteTodo(todoItem);
    }
    else if (e.target.classList.contains('edit-btn')) {
        editTodo(todoItem);
    }
});

// Ajouter une nouvelle tâche
addButton.addEventListener('click', function() {
    if (todoInput.value.trim()) {
        addTodo(todoInput.value.trim());
        todoInput.value = '';
    }
});

function addTodo(text) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.innerHTML = `
        <span class="todo-text">${text}</span>
        <button class="complete-btn">✓</button>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
    `;
    todoList.appendChild(todoItem);
}

function toggleComplete(todoItem) {
    todoItem.classList.toggle('completed');
    const text = todoItem.querySelector('.todo-text');
    text.style.textDecoration = todoItem.classList.contains('completed') 
        ? 'line-through' 
        : 'none';
}

function deleteTodo(todoItem) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
        todoItem.remove();
    }
}

function editTodo(todoItem) {
    const textElement = todoItem.querySelector('.todo-text');
    const currentText = textElement.textContent;
    const newText = prompt('Modifier la tâche:', currentText);
    
    if (newText && newText.trim()) {
        textElement.textContent = newText.trim();
    }
}
```

### 3. 🎨 **Palette de Couleurs Interactive**
```javascript
const colorPalette = document.querySelector('.color-palette');
const selectedColor = document.querySelector('.selected-color');
const canvas = document.querySelector('.drawing-canvas');

// Délégation pour sélection de couleurs
colorPalette.addEventListener('click', function(e) {
    if (e.target.classList.contains('color-swatch')) {
        // Retirer la sélection précédente
        document.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.classList.remove('selected');
        });
        
        // Sélectionner la nouvelle couleur
        e.target.classList.add('selected');
        const color = e.target.dataset.color;
        selectedColor.style.backgroundColor = color;
        
        // Mettre à jour l'outil de dessin
        updateDrawingColor(color);
    }
});

// Délégation pour le canvas de dessin
canvas.addEventListener('click', function(e) {
    if (e.target.classList.contains('pixel')) {
        const selectedColor = document.querySelector('.color-swatch.selected');
        if (selectedColor) {
            e.target.style.backgroundColor = selectedColor.dataset.color;
        }
    }
});
```

### 4. 🏪 **Panier d'Achat**
```javascript
const productList = document.querySelector('.product-list');
const cart = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

let cartData = [];

// Délégation pour les produits
productList.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.dataset.productId;
        const productName = productCard.querySelector('.product-name').textContent;
        const productPrice = parseFloat(productCard.querySelector('.product-price').dataset.price);
        
        addToCart({
            id: productId,
            name: productName,
            price: productPrice
        });
    }
});

// Délégation pour le panier
cart.addEventListener('click', function(e) {
    const cartItem = e.target.closest('.cart-item');
    
    if (e.target.classList.contains('quantity-increase')) {
        updateQuantity(cartItem.dataset.productId, 1);
    }
    else if (e.target.classList.contains('quantity-decrease')) {
        updateQuantity(cartItem.dataset.productId, -1);
    }
    else if (e.target.classList.contains('remove-item')) {
        removeFromCart(cartItem.dataset.productId);
    }
});

function addToCart(product) {
    const existingItem = cartData.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartData.push({ ...product, quantity: 1 });
    }
    
    updateCartDisplay();
}

function updateQuantity(productId, change) {
    const item = cartData.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

function removeFromCart(productId) {
    cartData = cartData.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    
    cartData.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.productId = item.id;
        cartItem.innerHTML = `
            <span class="item-name">${item.name}</span>
            <div class="quantity-controls">
                <button class="quantity-decrease">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-increase">+</button>
            </div>
            <span class="item-price">${(item.price * item.quantity).toFixed(2)}€</span>
            <button class="remove-item">🗑️</button>
        `;
        cartItems.appendChild(cartItem);
        
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = `Total: ${total.toFixed(2)}€`;
}
```

### 5. 🎲 **Jeu de Tic-Tac-Toe**
```javascript
const gameBoard = document.querySelector('.game-board');
const gameStatus = document.querySelector('.game-status');
const restartButton = document.querySelector('.restart-game');

let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
    [0, 4, 8], [2, 4, 6]             // Diagonales
];

// Délégation pour le plateau de jeu
gameBoard.addEventListener('click', function(e) {
    if (e.target.classList.contains('cell') && gameActive) {
        const cellIndex = parseInt(e.target.dataset.cellIndex);
        
        if (gameState[cellIndex] === '') {
            makeMove(cellIndex, e.target);
        }
    }
});

// Bouton restart
restartButton.addEventListener('click', restartGame);

function makeMove(index, cell) {
    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(`player-${currentPlayer.toLowerCase()}`);
    
    if (checkWin()) {
        gameStatus.textContent = `Joueur ${currentPlayer} a gagné ! 🎉`;
        gameActive = false;
        return;
    }
    
    if (checkDraw()) {
        gameStatus.textContent = `Match nul ! 🤝`;
        gameActive = false;
        return;
    }
    
    // Changer de joueur
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `Au tour du joueur ${currentPlayer}`;
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameState.every(cell => cell !== '');
}

function restartGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    gameStatus.textContent = `Au tour du joueur ${currentPlayer}`;
    
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('player-x', 'player-o');
    });
}
```

## 📊 Avantages et Inconvénients

### ✅ **Avantages**
| Avantage | Explication |
|----------|-------------|
| **Performance** | Moins d'écouteurs = moins de mémoire utilisée |
| **Dynamisme** | Fonctionne avec les éléments ajoutés après le chargement |
| **Maintenabilité** | Un seul endroit pour gérer la logique |
| **Flexibilité** | Peut gérer différents types d'éléments |

### ⚠️ **Inconvénients**
| Inconvénient | Solution |
|--------------|----------|
| **Vérifications supplémentaires** | Utiliser des conditions claires |
| **Logique plus complexe** | Bien structurer le code |
| **Debugging plus difficile** | Ajouter des logs pour tracer |

## 🧪 Comment Tester et Déboguer

### 1. **Ajouter des Logs de Debug**
```javascript
function handleGridClick(e) {
    console.log('Élément cliqué:', e.target);
    console.log('Classes:', e.target.classList);
    console.log('Dataset:', e.target.dataset);
    
    if (e.target.classList.contains('cell')) {
        console.log('✅ C\'est une cellule !');
        // Votre logique ici
    } else {
        console.log('❌ Ce n\'est pas une cellule');
    }
}
```

### 2. **Vérifier la Structure HTML**
```javascript
function validateStructure() {
    const grid = document.querySelector('.grid');
    const cells = grid.querySelectorAll('.cell');
    
    console.log(`Grille trouvée: ${grid ? 'Oui' : 'Non'}`);
    console.log(`Nombre de cellules: ${cells.length}`);
    
    cells.forEach((cell, index) => {
        console.log(`Cellule ${index}:`, cell.dataset.cell);
    });
}
```

## 🎯 Bonnes Pratiques

### 1. **Utilisez des Sélecteurs Spécifiques**
```javascript
// ❌ Trop général
if (e.target.tagName === 'BUTTON') {
    // Tous les boutons...
}

// ✅ Plus spécifique
if (e.target.classList.contains('action-button')) {
    // Seulement les boutons d'action
}
```

### 2. **Gérez les Éléments Imbriqués**
```javascript
function handleClick(e) {
    // Chercher l'élément parent le plus proche avec la classe voulue
    const button = e.target.closest('.action-button');
    
    if (button) {
        // Traiter le clic sur le bouton
        handleButtonClick(button);
    }
}
```

### 3. **Organisez votre Code**
```javascript
const EventHandler = {
    // Toutes les fonctions de gestion d'événements
    handleProductClick(productElement) {
        // Logique pour les produits
    },
    
    handleCartClick(cartElement) {
        // Logique pour le panier
    },
    
    // Fonction principale de délégation
    init() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.product')) {
                this.handleProductClick(e.target.closest('.product'));
            }
            else if (e.target.closest('.cart-item')) {
                this.handleCartClick(e.target.closest('.cart-item'));
            }
        });
    }
};

// Initialiser
EventHandler.init();
```

## 🎯 Résumé

### **Étapes pour Implémenter la Délégation :**
1. **Identifier l'élément parent** qui contient tous les éléments à gérer
2. **Ajouter un seul écouteur** sur cet élément parent
3. **Vérifier la cible** avec `e.target` dans la fonction de gestion
4. **Exécuter la logique appropriée** selon l'élément cliqué
5. **Tester** avec des éléments statiques et dynamiques

### **Quand Utiliser la Délégation :**
- ✅ Nombreux éléments similaires (boutons, cellules, items de liste)
- ✅ Éléments créés dynamiquement
- ✅ Optimisation des performances nécessaire
- ✅ Interface avec beaucoup d'interactions

La délégation d'événements est un **outil puissant** pour créer des interfaces web performantes et maintenables ! 🚀
