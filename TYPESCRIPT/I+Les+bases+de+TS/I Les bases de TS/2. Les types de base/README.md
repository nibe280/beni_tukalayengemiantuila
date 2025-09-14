# 🚀 Guide TypeScript : Les Types de Base

Ce guide explique les **types de base en TypeScript** et comment configurer un projet TypeScript de A à Z.

## 📋 Code de Base

```typescript
let str = "str" // string
let num = 5 // number
let array = [] // any[]
let obj = {
    a: 5
}   // {a: number}
let toggle = true // boolean

let anything; // any (type implicite)
let randomNumber : number; // number (type explicite)

const conversion = (celsius : number) => {
    return (celsius * 9/5) + 32;
}

console.log(conversion(50)); // 122
```

## 🤔 Qu'est-ce que TypeScript ?

**TypeScript** est un **sur-ensemble de JavaScript** qui ajoute des **types statiques**. Il se compile en JavaScript pur et permet de détecter les erreurs **avant l'exécution**.

### Avantages :
- ✅ **Détection d'erreurs** au moment de l'écriture
- ✅ **Auto-complétion** intelligente
- ✅ **Refactoring** sécurisé
- ✅ **Documentation** intégrée via les types
- ✅ Compatible avec **tout code JavaScript**

## 🔧 Installation et Configuration (Étape par Étape)

### Étape 1 : Installer Node.js
1. Téléchargez **Node.js** depuis [nodejs.org](https://nodejs.org)
2. Installez la version LTS
3. Vérifiez l'installation :
```bash
node --version
npm --version
```

### Étape 2 : Installer TypeScript
```bash
# Installation globale (recommandée pour débuter)
npm install -g typescript

# Vérifier l'installation
tsc --version
```

### Étape 3 : Initialiser le Projet
```bash
# Créer un dossier pour votre projet
mkdir mon-projet-typescript
cd mon-projet-typescript

# Initialiser npm
npm init -y

# Créer un fichier de configuration TypeScript
tsc --init
```

### Étape 4 : Configuration tsconfig.json
Le fichier `tsconfig.json` configure TypeScript :

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Étape 5 : Structure de Projet
```
mon-projet-typescript/
│
├── src/
│   ├── script.ts        ← Vos fichiers TypeScript
│   └── index.ts
├── dist/               ← Fichiers JavaScript compilés
├── node_modules/
├── package.json
└── tsconfig.json
```

### Étape 6 : Compiler et Exécuter
```bash
# Compiler le TypeScript en JavaScript
tsc

# Ou compiler en mode watch (recompile automatiquement)
tsc --watch

# Exécuter le JavaScript compilé
node dist/script.js
```

## 📝 Les Types de Base Expliqués

### 1. **String (Chaîne de caractères)**
```typescript
let str = "str";                    // Type inféré : string
let name: string = "Alice";         // Type explicite
let template = `Bonjour ${name}`;   // Template literals

// Méthodes courantes
console.log(str.length);            // 3
console.log(str.toUpperCase());     // "STR"
console.log(str.charAt(0));         // "s"
```

### 2. **Number (Nombre)**
```typescript
let num = 5;                        // Type inféré : number
let age: number = 25;               // Type explicite
let price: number = 19.99;          // Décimal
let hex: number = 0xFF;             // Hexadécimal
let binary: number = 0b1010;        // Binaire

// Méthodes courantes
console.log(num.toString());        // "5"
console.log(price.toFixed(2));      // "19.99"
```

### 3. **Boolean (Booléen)**
```typescript
let toggle = true;                  // Type inféré : boolean
let isActive: boolean = false;      // Type explicite
let isComplete: boolean = !toggle;  // false

// Utilisation dans des conditions
if (isActive) {
    console.log("Actif !");
}
```

### 4. **Array (Tableau)**
```typescript
// Différentes façons de déclarer des tableaux
let array = [];                     // Type inféré : any[]
let numbers: number[] = [1, 2, 3];  // Tableau de nombres
let names: Array<string> = ["Alice", "Bob"]; // Syntaxe générique
let mixed: (string | number)[] = ["Alice", 25]; // Tableau mixte

// Méthodes courantes
numbers.push(4);                    // [1, 2, 3, 4]
console.log(numbers.length);        // 4
console.log(numbers.includes(2));   // true
```

### 5. **Object (Objet)**
```typescript
// Objet simple avec type inféré
let obj = {
    a: 5
};  // Type inféré : {a: number}

// Objet avec type explicite
let user: {name: string, age: number} = {
    name: "Alice",
    age: 25
};

// Interface pour réutiliser le type
interface User {
    name: string;
    age: number;
    email?: string;  // Propriété optionnelle
}

let newUser: User = {
    name: "Bob",
    age: 30
};
```

### 6. **Any (N'importe quoi)**
```typescript
let anything;                       // Type implicite : any
let data: any = "hello";           // Type explicite
data = 42;                         // OK, any accepte tout
data = true;                       // OK
data = {name: "test"};            // OK

// ⚠️ À éviter autant que possible !
// Utiliser any annule les avantages de TypeScript
```

### 7. **Types Explicites vs Implicites**
```typescript
// ✅ Inférence de type (recommandé quand c'est clair)
let message = "Hello";              // string inféré
let count = 0;                      // number inféré

// ✅ Type explicite (utile pour la clarté)
let randomNumber: number;           // Déclaré mais pas initialisé
let userId: string | number;        // Union de types

// Plus tard...
randomNumber = Math.random();
userId = "user123";  // ou userId = 123;
```

## 🎯 Exemple de Fonction avec Types

### Fonction Simple
```typescript
const conversion = (celsius: number): number => {
    return (celsius * 9/5) + 32;
}

console.log(conversion(50));  // 122
// console.log(conversion("50")); // ❌ Erreur TypeScript !
```

### Fonction Plus Complexe
```typescript
interface Temperature {
    value: number;
    unit: 'C' | 'F';  // Union littérale
}

const convertTemperature = (temp: Temperature): Temperature => {
    if (temp.unit === 'C') {
        return {
            value: (temp.value * 9/5) + 32,
            unit: 'F'
        };
    } else {
        return {
            value: (temp.value - 32) * 5/9,
            unit: 'C'
        };
    }
}

// Utilisation
const celsiusTemp: Temperature = { value: 25, unit: 'C' };
const fahrenheitTemp = convertTemperature(celsiusTemp);
console.log(`${fahrenheitTemp.value}°${fahrenheitTemp.unit}`); // 77°F
```

## 🛠️ Autres Types Importants

### 1. **Void (Aucun retour)**
```typescript
const logMessage = (message: string): void => {
    console.log(message);
    // Pas de return
}
```

### 2. **Null et Undefined**
```typescript
let nullable: string | null = null;
let optional: string | undefined = undefined;
let maybe: string | null | undefined;
```

### 3. **Union Types (Types Union)**
```typescript
let id: string | number;
id = "ABC123";      // OK
id = 456;          // OK
// id = true;      // ❌ Erreur !

const formatId = (id: string | number): string => {
    return `ID: ${id}`;
}
```

### 4. **Literal Types (Types Littéraux)**
```typescript
let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up';    // OK
// direction = 'diagonal'; // ❌ Erreur !

let status: 'loading' | 'success' | 'error' = 'loading';
```

### 5. **Tuple (Tuple)**
```typescript
let coordinate: [number, number] = [10, 20];
let nameAndAge: [string, number] = ["Alice", 25];

console.log(coordinate[0]); // 10
console.log(nameAndAge[1]); // 25
```

## 🧪 Exemples Pratiques Complets

### 1. **Système de Gestion d'Utilisateurs**
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
        console.log(`Utilisateur ${user.name} ajouté`);
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getActiveUsers(): User[] {
        return this.users.filter(user => user.isActive);
    }

    updateUserAge(id: number, age: number): boolean {
        const user = this.getUserById(id);
        if (user) {
            user.age = age;
            return true;
        }
        return false;
    }
}

// Utilisation
const userManager = new UserManager();
userManager.addUser({
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 28,
    isActive: true
});

const user = userManager.getUserById(1);
console.log(user?.name); // "Alice" (optional chaining)
```

### 2. **Calculatrice Typée**
```typescript
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

interface CalculationResult {
    result: number;
    operation: Operation;
    operands: [number, number];
}

class Calculator {
    calculate(a: number, b: number, operation: Operation): CalculationResult {
        let result: number;

        switch (operation) {
            case 'add':
                result = a + b;
                break;
            case 'subtract':
                result = a - b;
                break;
            case 'multiply':
                result = a * b;
                break;
            case 'divide':
                if (b === 0) {
                    throw new Error("Division par zéro impossible");
                }
                result = a / b;
                break;
            default:
                throw new Error(`Opération non supportée: ${operation}`);
        }

        return {
            result,
            operation,
            operands: [a, b]
        };
    }

    calculateMultiple(operations: Array<{a: number, b: number, op: Operation}>): CalculationResult[] {
        return operations.map(({a, b, op}) => this.calculate(a, b, op));
    }
}

// Utilisation
const calc = new Calculator();
const result = calc.calculate(10, 5, 'multiply');
console.log(`${result.operands[0]} ${result.operation} ${result.operands[1]} = ${result.result}`);
// "10 multiply 5 = 50"
```

### 3. **Gestion de Produits E-commerce**
```typescript
interface Product {
    id: string;
    name: string;
    price: number;
    category: 'electronics' | 'clothing' | 'books' | 'food';
    inStock: boolean;
    tags: string[];
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    items: CartItem[];
    total: number;
    currency: 'EUR' | 'USD';
}

class ShoppingCart {
    private cart: Cart = {
        items: [],
        total: 0,
        currency: 'EUR'
    };

    addItem(product: Product, quantity: number = 1): void {
        if (!product.inStock) {
            throw new Error(`Produit ${product.name} non disponible`);
        }

        const existingItem = this.cart.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.items.push({ product, quantity });
        }

        this.updateTotal();
    }

    removeItem(productId: string): void {
        this.cart.items = this.cart.items.filter(item => item.product.id !== productId);
        this.updateTotal();
    }

    private updateTotal(): void {
        this.cart.total = this.cart.items.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);
    }

    getCart(): Cart {
        return { ...this.cart }; // Copie pour éviter les mutations
    }

    checkout(): string {
        if (this.cart.items.length === 0) {
            return "Panier vide";
        }

        const summary = this.cart.items.map(item => 
            `${item.product.name} x${item.quantity} = ${(item.product.price * item.quantity).toFixed(2)}${this.cart.currency}`
        ).join('\n');

        return `Commande:\n${summary}\nTotal: ${this.cart.total.toFixed(2)}${this.cart.currency}`;
    }
}

// Utilisation
const cart = new ShoppingCart();

const laptop: Product = {
    id: "1",
    name: "MacBook Pro",
    price: 2499.99,
    category: "electronics",
    inStock: true,
    tags: ["apple", "laptop", "professional"]
};

cart.addItem(laptop);
console.log(cart.checkout());
```

## 🔧 Outils et Configuration Recommandés

### 1. **VS Code Extensions**
- **TypeScript Importer** - Auto-import
- **Prettier** - Formatage automatique
- **ESLint** - Linting
- **TypeScript Hero** - Organisation des imports

### 2. **Scripts NPM utiles**
Ajoutez dans votre `package.json` :

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
    "start": "node dist/index.js",
    "clean": "rm -rf dist"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}
```

### 3. **Configuration Prettier (.prettierrc)**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🧪 Tests et Validation

### Test des Types
```typescript
// Fonction utilitaire pour tester les types
function testTypes() {
    // Test string
    const message: string = "Hello TypeScript";
    console.assert(typeof message === "string", "Message should be string");

    // Test number
    const age: number = 25;
    console.assert(typeof age === "number", "Age should be number");

    // Test array
    const numbers: number[] = [1, 2, 3];
    console.assert(Array.isArray(numbers), "Numbers should be array");

    // Test object
    const user: {name: string, age: number} = {name: "Alice", age: 30};
    console.assert(typeof user === "object", "User should be object");

    console.log("✅ Tous les tests de types passés !");
}

testTypes();
```

## ⚠️ Erreurs Communes et Solutions

### 1. **Type 'string' is not assignable to type 'number'**
```typescript
// ❌ Problème
let age: number = "25";

// ✅ Solutions
let age: number = 25;
// ou
let age: number = parseInt("25");
// ou
let age: string | number = "25";
```

### 2. **Object is possibly 'undefined'**
```typescript
// ❌ Problème
const users: User[] = [];
const user = users.find(u => u.id === 1);
console.log(user.name); // Erreur !

// ✅ Solutions
if (user) {
    console.log(user.name);
}
// ou
console.log(user?.name); // Optional chaining
// ou
console.log(user?.name ?? "Utilisateur inconnu"); // Nullish coalescing
```

### 3. **Cannot find module**
```typescript
// ❌ Problème
import * as fs from 'fs'; // Erreur si @types/node n'est pas installé

// ✅ Solution
npm install --save-dev @types/node
```

## 🎯 Résumé

### **Étapes pour Commencer avec TypeScript :**
1. **Installer** Node.js et TypeScript
2. **Initialiser** le projet avec `tsc --init`
3. **Configurer** tsconfig.json
4. **Écrire** du code TypeScript avec des types
5. **Compiler** avec `tsc`
6. **Exécuter** le JavaScript généré

### **Types Essentiels à Retenir :**
- **string**, **number**, **boolean** - Types primitifs
- **Array<T>** ou **T[]** - Tableaux typés
- **{prop: type}** - Objets typés
- **T | U** - Types union
- **interface** - Contrats d'objets
- **any** - À éviter autant que possible !

### **Bonnes Pratiques :**
- ✅ Laissez TypeScript **inférer** les types quand c'est évident
- ✅ Utilisez des **types explicites** pour la clarté
- ✅ Définissez des **interfaces** pour les objets complexes
- ✅ Évitez **any** - préférez **unknown** si nécessaire
- ✅ Activez le **strict mode** dans tsconfig.json

TypeScript vous permet d'écrire du **JavaScript plus sûr et maintenable** ! 🚀✨
