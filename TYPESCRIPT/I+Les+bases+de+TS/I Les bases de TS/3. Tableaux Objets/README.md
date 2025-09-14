# 📊 Guide TypeScript : Tableaux et Objets

Ce guide explique comment utiliser les **tableaux** et les **objets** en TypeScript avec un typage approprié.

## 📋 Code de Base

```typescript
// Tableaux
const fruits = ['fraise', 'pomme']
fruits.push("cerises")

const mixedArray = [1, 'txt', [1,2,3]]

let nums : number [];
// nums.push(1) // ❌ Erreur - tableau non initialisé
nums = [1,2,3]   // ✅ OK

let nums2 : number [] = []  // ✅ Initialisé
nums2.push(2)

let random : any []; 
random = [true, false, true]

// Objets
const car = {
    name: "Audi",
    model: "A1",
    km: 70000
}
// car.name = 4 // ❌ Erreur de type

let user : {
    name: string,
    age: number,
    favFood: string[],
    data: any
} = {
    name: "Joe",
    age: 45,
    favFood: ['pasta', 'cheese'],
    data: 50
}

let obj: object;
obj = {name: "Enzo"}
```

## 🗂️ Les Tableaux en TypeScript

### 1. **Déclaration et Initialisation**

#### ✅ **Méthodes Correctes**
```typescript
// Inférence automatique du type
const fruits = ['fraise', 'pomme'];        // string[]
const numbers = [1, 2, 3];                 // number[]
const booleans = [true, false];            // boolean[]

// Type explicite avec initialisation
let colors: string[] = ['rouge', 'bleu'];
let ages: number[] = [25, 30, 35];
let flags: boolean[] = [];

// Syntaxe alternative avec Array<T>
let names: Array<string> = ['Alice', 'Bob'];
let scores: Array<number> = [85, 90, 78];
```

#### ❌ **Erreurs Communes**
```typescript
// Déclaration sans initialisation
let nums: number[];
nums.push(1); // ❌ Erreur ! Le tableau n'est pas initialisé

// Solution
let nums: number[] = []; // ✅ Initialiser avec un tableau vide
nums.push(1); // ✅ Maintenant ça fonctionne

// Ou initialiser plus tard
let nums: number[];
nums = [1, 2, 3]; // ✅ OK
```

### 2. **Types de Tableaux**

#### **Tableaux Typés**
```typescript
// Tableau de strings
let fruits: string[] = ['pomme', 'banane', 'orange'];
fruits.push('fraise');  // ✅ OK
// fruits.push(123);     // ❌ Erreur !

// Tableau de numbers
let numbers: number[] = [1, 2, 3];
numbers.push(4);        // ✅ OK
// numbers.push('5');   // ❌ Erreur !

// Tableau de booleans
let flags: boolean[] = [true, false];
flags.push(true);       // ✅ OK
// flags.push('true');  // ❌ Erreur !
```

#### **Tableaux Mixtes (Union Types)**
```typescript
// Tableau acceptant string OU number
let mixed: (string | number)[] = [1, 'txt', 2, 'hello'];
mixed.push(3);          // ✅ OK
mixed.push('world');    // ✅ OK
// mixed.push(true);    // ❌ Erreur !

// Avec plusieurs types
let diverse: (string | number | boolean)[] = [1, 'txt', true];
```

#### **Tableaux de Tableaux (Multidimensionnels)**
```typescript
// Tableau 2D de numbers
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Tableau de tableaux mixtes
let mixedMatrix: (string | number)[][] = [
    ['a', 1, 'b'],
    [2, 'c', 3]
];

// Accès aux éléments
console.log(matrix[0][1]); // 2
console.log(mixedMatrix[1][0]); // 2
```

#### **Tableau Any (À éviter)**
```typescript
let random: any[] = [1, 'txt', true, {name: 'test'}];
random.push('anything'); // ✅ Accepte tout, mais perd la sécurité des types
```

### 3. **Méthodes de Tableaux avec Types**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Méthodes qui modifient le tableau
numbers.push(6);                    // Ajouter à la fin
numbers.unshift(0);                 // Ajouter au début
numbers.pop();                      // Supprimer le dernier
numbers.shift();                    // Supprimer le premier

// Méthodes qui retournent de nouveaux tableaux
let doubled: number[] = numbers.map(n => n * 2);
let evens: number[] = numbers.filter(n => n % 2 === 0);
let sum: number = numbers.reduce((acc, n) => acc + n, 0);

// Recherche
let found: number | undefined = numbers.find(n => n > 3);
let index: number = numbers.indexOf(3);
let exists: boolean = numbers.includes(4);
```

## 🏗️ Les Objets en TypeScript

### 1. **Objets avec Inférence de Type**

```typescript
// TypeScript infère automatiquement le type
const car = {
    name: "Audi",
    model: "A1",
    km: 70000
};
// Type inféré : { name: string; model: string; km: number; }

console.log(car.name);   // "Audi"
car.km = 80000;         // ✅ OK
// car.name = 4;        // ❌ Erreur ! string attendu, number fourni
```

### 2. **Types d'Objets Explicites**

#### **Définition Inline**
```typescript
let profile: {
    name: string,
    age: number,
    hobbies: string[]
};

profile = {
    name: "John",
    age: 85,
    hobbies: ["lecture", "sport"]
};

// profile.age = "25"; // ❌ Erreur ! number attendu
```

#### **Objets Complexes**
```typescript
let user: {
    name: string,
    age: number,
    favFood: string[],
    data: any,
    address?: {  // Propriété optionnelle
        street: string,
        city: string
    }
} = {
    name: "Joe",
    age: 45,
    favFood: ['pasta', 'cheese'],
    data: 50
};

// Ajouter l'adresse plus tard (optionnelle)
user.address = {
    street: "123 Main St",
    city: "Paris"
};
```

### 3. **Interfaces pour les Objets**

#### **Définition d'Interface**
```typescript
interface Person {
    name: string;
    age: number;
    email: string;
    hobbies?: string[];  // Propriété optionnelle
}

// Utilisation
let person1: Person = {
    name: "Alice",
    age: 28,
    email: "alice@example.com"
    // hobbies est optionnel
};

let person2: Person = {
    name: "Bob",
    age: 35,
    email: "bob@example.com",
    hobbies: ["football", "lecture"]
};
```

#### **Interfaces avec Méthodes**
```typescript
interface Calculator {
    result: number;
    add(x: number): void;
    multiply(x: number): void;
    getResult(): number;
}

let calc: Calculator = {
    result: 0,
    add(x: number) {
        this.result += x;
    },
    multiply(x: number) {
        this.result *= x;
    },
    getResult() {
        return this.result;
    }
};

calc.add(5);
calc.multiply(3);
console.log(calc.getResult()); // 15
```

### 4. **Type Object Générique**

```typescript
// Type object trop général (à éviter)
let obj: object;
obj = {name: "Enzo"};
obj = [1, 2, 3];        // ✅ Les tableaux sont des objets aussi
obj = new Date();       // ✅ OK
// console.log(obj.name); // ❌ Erreur ! TypeScript ne connaît pas les propriétés

// Meilleure approche
let obj2: {[key: string]: any} = {};
obj2.name = "Enzo";
obj2.age = 25;
console.log(obj2.name); // ✅ OK
```

## 🎯 Exemples Pratiques Complets

### 1. **Système de Gestion d'Inventaire**

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
    category: 'electronics' | 'clothing' | 'books';
    inStock: boolean;
    tags: string[];
}

interface Inventory {
    products: Product[];
    categories: string[];
    totalValue: number;
}

class InventoryManager {
    private inventory: Inventory;

    constructor() {
        this.inventory = {
            products: [],
            categories: ['electronics', 'clothing', 'books'],
            totalValue: 0
        };
    }

    addProduct(product: Product): void {
        this.inventory.products.push(product);
        this.updateTotalValue();
        console.log(`Produit ${product.name} ajouté à l'inventaire`);
    }

    removeProduct(id: number): boolean {
        const index = this.inventory.products.findIndex(p => p.id === id);
        if (index !== -1) {
            const removedProduct = this.inventory.products.splice(index, 1)[0];
            this.updateTotalValue();
            console.log(`Produit ${removedProduct.name} supprimé`);
            return true;
        }
        return false;
    }

    getProductsByCategory(category: string): Product[] {
        return this.inventory.products.filter(p => p.category === category);
    }

    getProductsByTag(tag: string): Product[] {
        return this.inventory.products.filter(p => p.tags.includes(tag));
    }

    updateStock(id: number, inStock: boolean): void {
        const product = this.inventory.products.find(p => p.id === id);
        if (product) {
            product.inStock = inStock;
            console.log(`Stock mis à jour pour ${product.name}: ${inStock}`);
        }
    }

    private updateTotalValue(): void {
        this.inventory.totalValue = this.inventory.products
            .filter(p => p.inStock)
            .reduce((sum, p) => sum + p.price, 0);
    }

    getInventoryReport(): {
        totalProducts: number;
        inStockCount: number;
        totalValue: number;
        categorySummary: {[key: string]: number};
    } {
        const categorySummary: {[key: string]: number} = {};
        
        this.inventory.products.forEach(product => {
            categorySummary[product.category] = (categorySummary[product.category] || 0) + 1;
        });

        return {
            totalProducts: this.inventory.products.length,
            inStockCount: this.inventory.products.filter(p => p.inStock).length,
            totalValue: this.inventory.totalValue,
            categorySummary
        };
    }
}

// Utilisation
const inventoryManager = new InventoryManager();

const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 2499.99,
    category: 'electronics',
    inStock: true,
    tags: ['apple', 'laptop', 'professional']
};

const tshirt: Product = {
    id: 2,
    name: "T-Shirt Classic",
    price: 29.99,
    category: 'clothing',
    inStock: true,
    tags: ['cotton', 'casual', 'summer']
};

inventoryManager.addProduct(laptop);
inventoryManager.addProduct(tshirt);

console.log(inventoryManager.getInventoryReport());
console.log(inventoryManager.getProductsByTag('apple'));
```

### 2. **Système de Notes d'Étudiants**

```typescript
interface Student {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    grades: Grade[];
    gpa?: number;
}

interface Grade {
    subject: string;
    score: number;
    maxScore: number;
    date: Date;
    weight: number; // Coefficient de la note
}

interface Course {
    name: string;
    code: string;
    credits: number;
    students: Student[];
}

class GradeManager {
    private students: Student[] = [];
    private courses: Course[] = [];

    addStudent(student: Omit<Student, 'grades' | 'gpa'>): void {
        const newStudent: Student = {
            ...student,
            grades: [],
            gpa: 0
        };
        this.students.push(newStudent);
        console.log(`Étudiant ${student.firstName} ${student.lastName} ajouté`);
    }

    addGrade(studentId: number, grade: Grade): void {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.grades.push(grade);
            this.calculateGPA(student);
            console.log(`Note ajoutée pour ${student.firstName}: ${grade.score}/${grade.maxScore} en ${grade.subject}`);
        }
    }

    private calculateGPA(student: Student): void {
        if (student.grades.length === 0) {
            student.gpa = 0;
            return;
        }

        const totalWeightedScore = student.grades.reduce((sum, grade) => {
            const percentage = (grade.score / grade.maxScore) * 100;
            return sum + (percentage * grade.weight);
        }, 0);

        const totalWeight = student.grades.reduce((sum, grade) => sum + grade.weight, 0);
        student.gpa = totalWeightedScore / totalWeight;
    }

    getStudentReport(studentId: number): {
        student: Student;
        averageBySubject: {[subject: string]: number};
        totalGrades: number;
        gpa: number;
    } | null {
        const student = this.students.find(s => s.id === studentId);
        if (!student) return null;

        const averageBySubject: {[subject: string]: number} = {};
        const subjectGrades: {[subject: string]: Grade[]} = {};

        // Grouper les notes par matière
        student.grades.forEach(grade => {
            if (!subjectGrades[grade.subject]) {
                subjectGrades[grade.subject] = [];
            }
            subjectGrades[grade.subject].push(grade);
        });

        // Calculer la moyenne par matière
        Object.keys(subjectGrades).forEach(subject => {
            const grades = subjectGrades[subject];
            const totalWeighted = grades.reduce((sum, grade) => {
                return sum + ((grade.score / grade.maxScore) * 100 * grade.weight);
            }, 0);
            const totalWeight = grades.reduce((sum, grade) => sum + grade.weight, 0);
            averageBySubject[subject] = totalWeighted / totalWeight;
        });

        return {
            student,
            averageBySubject,
            totalGrades: student.grades.length,
            gpa: student.gpa || 0
        };
    }

    getTopStudents(limit: number = 5): Student[] {
        return this.students
            .filter(student => student.gpa !== undefined)
            .sort((a, b) => (b.gpa || 0) - (a.gpa || 0))
            .slice(0, limit);
    }

    getClassAverage(): number {
        const studentsWithGPA = this.students.filter(s => s.gpa !== undefined && s.gpa > 0);
        if (studentsWithGPA.length === 0) return 0;
        
        const totalGPA = studentsWithGPA.reduce((sum, student) => sum + (student.gpa || 0), 0);
        return totalGPA / studentsWithGPA.length;
    }
}

// Utilisation
const gradeManager = new GradeManager();

gradeManager.addStudent({
    id: 1,
    firstName: "Alice",
    lastName: "Martin",
    email: "alice.martin@school.com"
});

gradeManager.addStudent({
    id: 2,
    firstName: "Bob",
    lastName: "Dupont",
    email: "bob.dupont@school.com"
});

// Ajouter des notes
gradeManager.addGrade(1, {
    subject: "Mathématiques",
    score: 18,
    maxScore: 20,
    date: new Date(),
    weight: 3
});

gradeManager.addGrade(1, {
    subject: "Français",
    score: 15,
    maxScore: 20,
    date: new Date(),
    weight: 2
});

gradeManager.addGrade(2, {
    subject: "Mathématiques",
    score: 16,
    maxScore: 20,
    date: new Date(),
    weight: 3
});

console.log(gradeManager.getStudentReport(1));
console.log("Moyenne de classe:", gradeManager.getClassAverage().toFixed(2));
console.log("Meilleurs étudiants:", gradeManager.getTopStudents(3));
```

### 3. **Gestionnaire de Bibliothèque**

```typescript
interface Book {
    id: string;
    title: string;
    authors: string[];
    isbn: string;
    publishYear: number;
    genre: string[];
    availableCopies: number;
    totalCopies: number;
    reservations: Reservation[];
}

interface Member {
    id: string;
    name: string;
    email: string;
    phone: string;
    membershipType: 'standard' | 'premium' | 'student';
    borrowedBooks: BorrowedBook[];
    reservations: Reservation[];
}

interface BorrowedBook {
    bookId: string;
    borrowDate: Date;
    dueDate: Date;
    returned: boolean;
}

interface Reservation {
    bookId: string;
    memberId: string;
    reservationDate: Date;
    status: 'active' | 'fulfilled' | 'cancelled';
}

class LibraryManager {
    private books: Book[] = [];
    private members: Member[] = [];
    private reservations: Reservation[] = [];

    // Gestion des livres
    addBook(book: Omit<Book, 'reservations'>): void {
        const newBook: Book = {
            ...book,
            reservations: []
        };
        this.books.push(newBook);
        console.log(`Livre "${book.title}" ajouté à la bibliothèque`);
    }

    findBooks(query: {
        title?: string;
        author?: string;
        genre?: string;
        availableOnly?: boolean;
    }): Book[] {
        return this.books.filter(book => {
            if (query.title && !book.title.toLowerCase().includes(query.title.toLowerCase())) {
                return false;
            }
            if (query.author && !book.authors.some(author => 
                author.toLowerCase().includes(query.author!.toLowerCase())
            )) {
                return false;
            }
            if (query.genre && !book.genre.includes(query.genre)) {
                return false;
            }
            if (query.availableOnly && book.availableCopies === 0) {
                return false;
            }
            return true;
        });
    }

    // Gestion des membres
    addMember(member: Omit<Member, 'borrowedBooks' | 'reservations'>): void {
        const newMember: Member = {
            ...member,
            borrowedBooks: [],
            reservations: []
        };
        this.members.push(newMember);
        console.log(`Membre ${member.name} ajouté`);
    }

    // Système d'emprunt
    borrowBook(memberId: string, bookId: string): boolean {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (!member || !book) {
            console.log("Membre ou livre introuvable");
            return false;
        }

        if (book.availableCopies === 0) {
            console.log(`Le livre "${book.title}" n'est pas disponible`);
            return false;
        }

        // Vérifier les limites d'emprunt
        const borrowLimit = this.getBorrowLimit(member.membershipType);
        const currentBorrows = member.borrowedBooks.filter(bb => !bb.returned).length;
        
        if (currentBorrows >= borrowLimit) {
            console.log(`Limite d'emprunt atteinte pour ${member.name}`);
            return false;
        }

        // Effectuer l'emprunt
        const borrowDate = new Date();
        const dueDate = new Date();
        dueDate.setDate(borrowDate.getDate() + this.getBorrowDuration(member.membershipType));

        member.borrowedBooks.push({
            bookId: book.id,
            borrowDate,
            dueDate,
            returned: false
        });

        book.availableCopies--;
        console.log(`${member.name} a emprunté "${book.title}"`);
        return true;
    }

    returnBook(memberId: string, bookId: string): boolean {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (!member || !book) return false;

        const borrowedBook = member.borrowedBooks.find(bb => 
            bb.bookId === bookId && !bb.returned
        );

        if (!borrowedBook) {
            console.log("Emprunt non trouvé");
            return false;
        }

        borrowedBook.returned = true;
        book.availableCopies++;
        
        // Vérifier les réservations
        this.processReservations(bookId);
        
        console.log(`${member.name} a rendu "${book.title}"`);
        return true;
    }

    // Système de réservation
    reserveBook(memberId: string, bookId: string): boolean {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.id === bookId);

        if (!member || !book) return false;

        if (book.availableCopies > 0) {
            console.log("Le livre est disponible, pas besoin de réservation");
            return false;
        }

        const reservation: Reservation = {
            bookId,
            memberId,
            reservationDate: new Date(),
            status: 'active'
        };

        this.reservations.push(reservation);
        book.reservations.push(reservation);
        member.reservations.push(reservation);

        console.log(`Réservation créée pour "${book.title}"`);
        return true;
    }

    private processReservations(bookId: string): void {
        const book = this.books.find(b => b.id === bookId);
        if (!book) return;

        const activeReservation = book.reservations.find(r => r.status === 'active');
        if (activeReservation) {
            console.log(`Livre "${book.title}" disponible pour la réservation`);
            // Ici, on pourrait notifier le membre
        }
    }

    private getBorrowLimit(membershipType: string): number {
        switch (membershipType) {
            case 'student': return 5;
            case 'standard': return 3;
            case 'premium': return 10;
            default: return 3;
        }
    }

    private getBorrowDuration(membershipType: string): number {
        switch (membershipType) {
            case 'student': return 30; // 30 jours
            case 'standard': return 14; // 14 jours
            case 'premium': return 21; // 21 jours
            default: return 14;
        }
    }

    // Rapports
    getOverdueBooks(): Array<{
        member: Member;
        book: Book;
        borrowedBook: BorrowedBook;
        daysOverdue: number;
    }> {
        const overdue: Array<{
            member: Member;
            book: Book;
            borrowedBook: BorrowedBook;
            daysOverdue: number;
        }> = [];

        const today = new Date();

        this.members.forEach(member => {
            member.borrowedBooks.forEach(borrowedBook => {
                if (!borrowedBook.returned && borrowedBook.dueDate < today) {
                    const book = this.books.find(b => b.id === borrowedBook.bookId);
                    if (book) {
                        const daysOverdue = Math.floor((today.getTime() - borrowedBook.dueDate.getTime()) / (1000 * 60 * 60 * 24));
                        overdue.push({
                            member,
                            book,
                            borrowedBook,
                            daysOverdue
                        });
                    }
                }
            });
        });

        return overdue;
    }

    getLibraryStats(): {
        totalBooks: number;
        totalMembers: number;
        booksOnLoan: number;
        activeReservations: number;
        overdueBooks: number;
    } {
        const booksOnLoan = this.books.reduce((sum, book) => 
            sum + (book.totalCopies - book.availableCopies), 0
        );

        const activeReservations = this.reservations.filter(r => r.status === 'active').length;
        const overdueBooks = this.getOverdueBooks().length;

        return {
            totalBooks: this.books.length,
            totalMembers: this.members.length,
            booksOnLoan,
            activeReservations,
            overdueBooks
        };
    }
}

// Utilisation
const library = new LibraryManager();

// Ajouter des livres
library.addBook({
    id: "1",
    title: "Le Petit Prince",
    authors: ["Antoine de Saint-Exupéry"],
    isbn: "978-2-07-040853-7",
    publishYear: 1943,
    genre: ["Littérature", "Jeunesse"],
    availableCopies: 3,
    totalCopies: 3
});

library.addBook({
    id: "2",
    title: "1984",
    authors: ["George Orwell"],
    isbn: "978-2-07-036822-5",
    publishYear: 1949,
    genre: ["Science-Fiction", "Dystopie"],
    availableCopies: 2,
    totalCopies: 2
});

// Ajouter des membres
library.addMember({
    id: "m1",
    name: "Alice Martin",
    email: "alice@email.com",
    phone: "0123456789",
    membershipType: "premium"
});

library.addMember({
    id: "m2",
    name: "Bob Dupont",
    email: "bob@email.com",
    phone: "0987654321",
    membershipType: "standard"
});

// Tests d'emprunt
library.borrowBook("m1", "1");
library.borrowBook("m2", "2");

// Recherche de livres
console.log(library.findBooks({ author: "Orwell" }));
console.log(library.findBooks({ availableOnly: true }));

// Statistiques
console.log(library.getLibraryStats());
```

## 🔧 Bonnes Pratiques

### 1. **Préférer les Interfaces aux Types Inline**
```typescript
// ❌ Éviter - répétition de code
let user1: {name: string, age: number} = {name: "Alice", age: 25};
let user2: {name: string, age: number} = {name: "Bob", age: 30};

// ✅ Mieux - réutilisable
interface User {
    name: string;
    age: number;
}

let user1: User = {name: "Alice", age: 25};
let user2: User = {name: "Bob", age: 30};
```

### 2. **Propriétés Optionnelles**
```typescript
interface Config {
    apiUrl: string;
    timeout?: number;    // Optionnelle
    retries?: number;    // Optionnelle
}

// Les deux sont valides
let config1: Config = { apiUrl: "https://api.example.com" };
let config2: Config = { 
    apiUrl: "https://api.example.com", 
    timeout: 5000,
    retries: 3 
};
```

### 3. **Propriétés en Lecture Seule**
```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 30; // ❌ Erreur ! Lecture seule
```

### 4. **Index Signatures**
```typescript
// Pour des objets avec des clés dynamiques
interface StringDictionary {
    [key: string]: string;
}

let colors: StringDictionary = {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745"
};

colors["danger"] = "#dc3545"; // ✅ OK
```

## 🧪 Tests et Validation

```typescript
// Fonction de test pour tableaux
function testArrays() {
    const numbers: number[] = [1, 2, 3];
    const strings: string[] = ['a', 'b', 'c'];
    const mixed: (string | number)[] = [1, 'a', 2, 'b'];
    
    console.assert(numbers.length === 3, "Tableau numbers incorrect");
    console.assert(typeof strings[0] === 'string', "Premier élément doit être string");
    console.assert(mixed.includes(1) && mixed.includes('a'), "Tableau mixte incorrect");
    
    console.log("✅ Tests tableaux réussis !");
}

// Fonction de test pour objets
function testObjects() {
    interface TestUser {
        name: string;
        age: number;
        active: boolean;
    }
    
    const user: TestUser = {
        name: "Test User",
        age: 25,
        active: true
    };
    
    console.assert(typeof user.name === 'string', "Name doit être string");
    console.assert(typeof user.age === 'number', "Age doit être number");
    console.assert(typeof user.active === 'boolean', "Active doit être boolean");
    
    console.log("✅ Tests objets réussis !");
}

testArrays();
testObjects();
```

## ⚠️ Erreurs Communes et Solutions

### 1. **Tableau Non Initialisé**
```typescript
// ❌ Problème
let numbers: number[];
numbers.push(1); // Erreur !

// ✅ Solutions
let numbers: number[] = [];           // Initialiser vide
let numbers: number[] = [1, 2, 3];    // Initialiser avec des valeurs
```

### 2. **Propriétés Manquantes dans les Objets**
```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

// ❌ Problème
let user: User = {
    name: "Alice",
    age: 25
    // email manquant !
};

// ✅ Solutions
let user: User = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

// Ou rendre la propriété optionnelle
interface User {
    name: string;
    age: number;
    email?: string;  // Optionnelle
}
```

### 3. **Modification d'Objets Typés**
```typescript
const car = {
    brand: "Toyota",
    year: 2020
};

// car.brand = 123; // ❌ Erreur ! string attendu
car.brand = "Honda"; // ✅ OK
```

## 🎯 Résumé

### **Tableaux TypeScript :**
- **Déclaration** : `let arr: type[] = []` ou `let arr: Array<type> = []`
- **Initialisation** obligatoire avant utilisation
- **Types mixtes** : `(type1 | type2)[]`
- **Méthodes** typées automatiquement

### **Objets TypeScript :**
- **Inférence** automatique des types
- **Types explicites** avec `{prop: type}`
- **Interfaces** pour réutilisabilité
- **Propriétés optionnelles** avec `?`

### **Bonnes Pratiques :**
- ✅ Utiliser l'**inférence** quand c'est clair
- ✅ Définir des **interfaces** pour les objets complexes
- ✅ **Initialiser** les tableaux avant utilisation
- ✅ Éviter **any** autant que possible
- ✅ Utiliser des **propriétés optionnelles** quand approprié

Les tableaux et objets typés vous permettent d'écrire du code plus **sûr et maintenable** ! 🚀✨
