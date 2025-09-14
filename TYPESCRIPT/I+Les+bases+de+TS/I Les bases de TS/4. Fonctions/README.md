# 🔧 Guide TypeScript : Les Fonctions

Ce guide explique comment utiliser et typer les **fonctions** en TypeScript, incluant les paramètres, signatures et callbacks.

## 📋 Code de Base

```typescript
// Fonction avec paramètres typés, valeur par défaut et paramètre optionnel
function multiply(num1: number, num2 = 10, action?: string) {
    if(action) console.log(action);
    return num1 * num2;
}
console.log(multiply(6, 10, "create")); // 60

// Type Function générique
let foo: Function;
foo = () => {}

// Signatures de fonction spécifiques
let baz: (a: number, b: number) => number;
baz = (a, b) => a + b;

// Callbacks typés
function greetings(fn: (a: string) => void) {
    fn("Hello World")
}

function printToConsole(msg: string) {
    console.log(msg);
}

greetings(printToConsole); // "Hello World"
```

## 🎯 Les Fonctions en TypeScript

### 1. **Déclaration de Fonctions Basiques**

#### **Fonction Classique**
```typescript
// Fonction avec types explicites
function add(a: number, b: number): number {
    return a + b;
}

// TypeScript peut inférer le type de retour
function subtract(a: number, b: number) {
    return a - b; // Retour inféré : number
}

// Fonction sans retour (void)
function logMessage(message: string): void {
    console.log(message);
}

// Fonction qui ne finit jamais (never)
function throwError(message: string): never {
    throw new Error(message);
}
```

#### **Fonctions Fléchées**
```typescript
// Fonction fléchée typée
const multiply = (a: number, b: number): number => a * b;

// Avec bloc de code
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Division par zéro");
    }
    return a / b;
};

// Sans paramètres
const getCurrentTime = (): string => new Date().toISOString();

// Un seul paramètre (parenthèses optionnelles)
const square = (x: number): number => x * x;
const squareAlt = x => x * x; // Type inféré si évident
```

### 2. **Paramètres de Fonctions**

#### **Paramètres Obligatoires**
```typescript
function createUser(name: string, age: number, email: string): void {
    console.log(`Utilisateur: ${name}, ${age} ans, ${email}`);
}

// Tous les paramètres sont requis
createUser("Alice", 25, "alice@example.com");
// createUser("Alice", 25); // ❌ Erreur ! email manquant
```

#### **Paramètres Optionnels**
```typescript
function greet(name: string, title?: string): string {
    if (title) {
        return `Bonjour ${title} ${name}`;
    }
    return `Bonjour ${name}`;
}

console.log(greet("Alice"));           // "Bonjour Alice"
console.log(greet("Bob", "Dr."));      // "Bonjour Dr. Bob"

// Les paramètres optionnels doivent être en fin de liste
// function badFunction(optional?: string, required: number) {} // ❌ Erreur !
```

#### **Paramètres par Défaut**
```typescript
function multiply(num1: number, num2 = 10, action?: string): number {
    if (action) console.log(action);
    return num1 * num2;
}

console.log(multiply(5));              // 50 (utilise la valeur par défaut)
console.log(multiply(5, 3));           // 15
console.log(multiply(5, 3, "calc"));   // 15 + affiche "calc"

// Avec types complexes
function createConfig(
    host: string,
    port: number = 3000,
    ssl: boolean = false,
    timeout: number = 5000
): {host: string, port: number, ssl: boolean, timeout: number} {
    return { host, port, ssl, timeout };
}
```

#### **Paramètres Rest (...)**
```typescript
// Nombre variable de paramètres
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(10, 20, 30, 40));    // 100

// Mélange de paramètres fixes et rest
function logWithPrefix(prefix: string, ...messages: string[]): void {
    messages.forEach(msg => console.log(`${prefix}: ${msg}`));
}

logWithPrefix("INFO", "Démarrage", "Configuration OK", "Serveur prêt");
```

### 3. **Signatures de Fonctions**

#### **Type Function Générique**
```typescript
// ⚠️ Trop général - éviter si possible
let foo: Function;
foo = () => {};
foo = (a: number) => a * 2;
foo = (x: string, y: boolean) => x.length > 0 && y;
// Accepte n'importe quelle fonction, perd la sécurité des types
```

#### **Signatures Spécifiques (Recommandé)**
```typescript
// Signature précise : (paramètres) => retour
let baz: (a: number, b: number) => number;
baz = (a, b) => a + b;           // ✅ OK
baz = (x, y) => x * y;           // ✅ OK (types inférés)
// baz = (a: string) => a;       // ❌ Erreur ! Signature incompatible

// Autres exemples de signatures
let formatter: (text: string, uppercase?: boolean) => string;
let validator: (input: string) => boolean;
let calculator: (operation: string, a: number, b: number) => number;

formatter = (text, uppercase = false) => {
    return uppercase ? text.toUpperCase() : text.toLowerCase();
};

validator = (input) => input.length >= 3;

calculator = (op, a, b) => {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: throw new Error(`Opération inconnue: ${op}`);
    }
};
```

#### **Signatures Multiples (Overloading)**
```typescript
// Surcharge de fonction
function process(input: string): string;
function process(input: number): number;
function process(input: boolean): boolean;
function process(input: string | number | boolean): string | number | boolean {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    if (typeof input === 'number') {
        return input * 2;
    }
    return !input;
}

console.log(process("hello"));    // "HELLO"
console.log(process(5));          // 10
console.log(process(true));       // false
```

### 4. **Callbacks et Fonctions d'Ordre Supérieur**

#### **Callbacks Simples**
```typescript
// Callback sans paramètres
function executeCallback(callback: () => void): void {
    console.log("Avant callback");
    callback();
    console.log("Après callback");
}

executeCallback(() => console.log("Callback exécuté"));

// Callback avec paramètres
function greetings(fn: (message: string) => void): void {
    fn("Hello World");
}

function printToConsole(msg: string): void {
    console.log(msg);
}

function printToAlert(msg: string): void {
    alert(msg);
}

greetings(printToConsole); // Affiche dans la console
greetings(printToAlert);   // Affiche une alerte
```

#### **Callbacks avec Retour**
```typescript
// Callback qui retourne une valeur
function processArray<T, U>(
    array: T[], 
    processor: (item: T, index: number) => U
): U[] {
    return array.map(processor);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (num, index) => {
    console.log(`Processing item ${index}: ${num}`);
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Avec des objets
interface User {
    name: string;
    age: number;
}

const users: User[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const userNames = processArray(users, user => user.name);
console.log(userNames); // ["Alice", "Bob", "Charlie"]
```

#### **Callbacks Asynchrones**
```typescript
// Callback pour opérations asynchrones
function fetchData(
    url: string,
    onSuccess: (data: any) => void,
    onError: (error: Error) => void
): void {
    // Simulation d'une requête async
    setTimeout(() => {
        if (url.startsWith('https://')) {
            onSuccess({ message: "Données reçues", url });
        } else {
            onError(new Error("URL invalide"));
        }
    }, 1000);
}

fetchData(
    "https://api.example.com/data",
    (data) => console.log("Succès:", data),
    (error) => console.error("Erreur:", error.message)
);

// Version Promise (plus moderne)
function fetchDataPromise(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url.startsWith('https://')) {
                resolve({ message: "Données reçues", url });
            } else {
                reject(new Error("URL invalide"));
            }
        }, 1000);
    });
}

// Utilisation avec async/await
async function getData() {
    try {
        const data = await fetchDataPromise("https://api.example.com/data");
        console.log("Données:", data);
    } catch (error) {
        console.error("Erreur:", error);
    }
}
```

## 🎯 Exemples Pratiques pour le Développement Web

### 1. **Système de Blog avec TypeScript**

```typescript
// Types pour un système de blog
interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
    publishDate: Date;
    tags: string[];
    status: 'draft' | 'published' | 'archived';
    views: number;
    likes: number;
}

interface Comment {
    id: string;
    postId: string;
    author: string;
    content: string;
    createdAt: Date;
    approved: boolean;
}

interface BlogUser {
    id: string;
    username: string;
    email: string;
    role: 'admin' | 'editor' | 'author' | 'subscriber';
    joinDate: Date;
}

// Classe de gestion de blog
class BlogManager {
    private posts: BlogPost[] = [];
    private comments: Comment[] = [];
    private users: BlogUser[] = [];

    // Fonction pour créer un article avec callback de validation
    createPost(
        postData: Omit<BlogPost, 'id' | 'publishDate' | 'views' | 'likes'>,
        validator: (post: BlogPost) => boolean,
        onSuccess: (post: BlogPost) => void,
        onError: (error: string) => void
    ): void {
        const newPost: BlogPost = {
            id: this.generateId(),
            publishDate: new Date(),
            views: 0,
            likes: 0,
            ...postData
        };

        if (validator(newPost)) {
            this.posts.push(newPost);
            onSuccess(newPost);
        } else {
            onError("Validation de l'article échouée");
        }
    }

    // Fonction de recherche avec callbacks
    searchPosts(
        query: string,
        filters: {
            author?: string;
            tags?: string[];
            status?: BlogPost['status'];
        },
        onResults: (posts: BlogPost[]) => void,
        onEmpty: () => void
    ): void {
        const results = this.posts.filter(post => {
            // Recherche dans le titre et contenu
            const matchesQuery = query === '' || 
                post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.content.toLowerCase().includes(query.toLowerCase());

            // Filtres
            const matchesAuthor = !filters.author || post.author === filters.author;
            const matchesStatus = !filters.status || post.status === filters.status;
            const matchesTags = !filters.tags || 
                filters.tags.every(tag => post.tags.includes(tag));

            return matchesQuery && matchesAuthor && matchesStatus && matchesTags;
        });

        if (results.length > 0) {
            onResults(results);
        } else {
            onEmpty();
        }
    }

    // Fonction pour publier avec workflow
    publishPost(
        postId: string,
        publishDate?: Date,
        notifySubscribers: (post: BlogPost) => void = () => {}
    ): boolean {
        const post = this.posts.find(p => p.id === postId);
        
        if (!post) {
            console.error("Article non trouvé");
            return false;
        }

        if (post.status === 'published') {
            console.warn("Article déjà publié");
            return false;
        }

        post.status = 'published';
        post.publishDate = publishDate || new Date();
        
        // Notifier les abonnés
        notifySubscribers(post);
        
        console.log(`Article "${post.title}" publié !`);
        return true;
    }

    // Gestion des commentaires avec modération
    addComment(
        postId: string,
        commentData: Omit<Comment, 'id' | 'createdAt' | 'approved'>,
        moderationFilter: (comment: Comment) => boolean,
        onApproved: (comment: Comment) => void,
        onPending: (comment: Comment) => void
    ): void {
        const newComment: Comment = {
            id: this.generateId(),
            postId,
            createdAt: new Date(),
            approved: false,
            ...commentData
        };

        if (moderationFilter(newComment)) {
            newComment.approved = true;
            this.comments.push(newComment);
            onApproved(newComment);
        } else {
            this.comments.push(newComment);
            onPending(newComment);
        }
    }

    // Analytics avec fonctions de traitement
    getAnalytics(
        dateRange: { start: Date; end: Date },
        processor: (posts: BlogPost[]) => any
    ): any {
        const postsInRange = this.posts.filter(post => 
            post.publishDate >= dateRange.start && 
            post.publishDate <= dateRange.end
        );

        return processor(postsInRange);
    }

    // Export de données avec formatters
    exportPosts(
        formatter: (posts: BlogPost[]) => string,
        filter?: (post: BlogPost) => boolean
    ): string {
        const postsToExport = filter ? this.posts.filter(filter) : this.posts;
        return formatter(postsToExport);
    }

    private generateId(): string {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
}

// Utilisation du système de blog
const blog = new BlogManager();

// Validateur pour les articles
const validatePost = (post: BlogPost): boolean => {
    return post.title.length >= 5 && 
           post.content.length >= 50 && 
           post.tags.length > 0;
};

// Créer un article
blog.createPost(
    {
        title: "Guide TypeScript pour le Web",
        content: "Dans cet article, nous allons explorer TypeScript pour le développement web...",
        author: "John Doe",
        tags: ["typescript", "web", "tutorial"],
        status: "draft"
    },
    validatePost,
    (post) => console.log(`✅ Article créé: ${post.title}`),
    (error) => console.error(`❌ Erreur: ${error}`)
);

// Recherche avec callbacks
blog.searchPosts(
    "typescript",
    { tags: ["tutorial"], status: "published" },
    (results) => console.log(`🔍 ${results.length} articles trouvés`),
    () => console.log("Aucun résultat trouvé")
);

// Analytics personnalisées
const monthlyStats = blog.getAnalytics(
    { 
        start: new Date(2024, 0, 1), 
        end: new Date(2024, 11, 31) 
    },
    (posts) => ({
        totalPosts: posts.length,
        totalViews: posts.reduce((sum, post) => sum + post.views, 0),
        avgLikes: posts.reduce((sum, post) => sum + post.likes, 0) / posts.length,
        topTags: posts.flatMap(post => post.tags)
            .reduce((acc, tag) => {
                acc[tag] = (acc[tag] || 0) + 1;
                return acc;
            }, {} as Record<string, number>)
    })
);

console.log("Stats mensuelles:", monthlyStats);

// Export au format CSV
const csvExport = blog.exportPosts(
    (posts) => {
        const headers = "Title,Author,Date,Views,Likes\n";
        const rows = posts.map(post => 
            `"${post.title}","${post.author}","${post.publishDate.toISOString()}",${post.views},${post.likes}`
        ).join('\n');
        return headers + rows;
    },
    (post) => post.status === 'published'
);
```

### 2. **Système E-commerce Complet**

```typescript
// Types pour un site e-commerce
interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    images: string[];
    rating: number;
    reviews: Review[];
}

interface Review {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    verified: boolean;
}

interface CartItem {
    productId: string;
    quantity: number;
    selectedOptions?: Record<string, string>;
}

interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
    shippingAddress: Address;
    createdAt: Date;
}

interface Address {
    street: string;
    city: string;
    zipCode: string;
    country: string;
}

interface Customer {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    addresses: Address[];
    orderHistory: Order[];
}

// Classe de gestion e-commerce
class EcommerceManager {
    private products: Product[] = [];
    private customers: Customer[] = [];
    private orders: Order[] = [];

    // Gestion des produits avec callbacks
    addProduct(
        productData: Omit<Product, 'id' | 'reviews'>,
        validator: (product: Product) => string[],
        onSuccess: (product: Product) => void,
        onError: (errors: string[]) => void
    ): void {
        const newProduct: Product = {
            id: this.generateId(),
            reviews: [],
            ...productData
        };

        const errors = validator(newProduct);
        
        if (errors.length === 0) {
            this.products.push(newProduct);
            onSuccess(newProduct);
        } else {
            onError(errors);
        }
    }

    // Recherche de produits avec filtres et tri
    searchProducts(
        query: string,
        filters: {
            category?: string;
            minPrice?: number;
            maxPrice?: number;
            minRating?: number;
            inStock?: boolean;
        },
        sortBy: 'price' | 'rating' | 'name' | 'newest',
        onResults: (products: Product[], total: number) => void,
        onEmpty: () => void
    ): void {
        let results = this.products.filter(product => {
            // Recherche textuelle
            const matchesQuery = query === '' ||
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase());

            // Filtres
            const matchesCategory = !filters.category || product.category === filters.category;
            const matchesPrice = (!filters.minPrice || product.price >= filters.minPrice) &&
                                (!filters.maxPrice || product.price <= filters.maxPrice);
            const matchesRating = !filters.minRating || product.rating >= filters.minRating;
            const matchesStock = !filters.inStock || product.stock > 0;

            return matchesQuery && matchesCategory && matchesPrice && matchesRating && matchesStock;
        });

        // Tri
        results.sort((a, b) => {
            switch (sortBy) {
                case 'price':
                    return a.price - b.price;
                case 'rating':
                    return b.rating - a.rating;
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'newest':
                    return a.id.localeCompare(b.id); // Assuming newer products have newer IDs
                default:
                    return 0;
            }
        });

        if (results.length > 0) {
            onResults(results, results.length);
        } else {
            onEmpty();
        }
    }

    // Gestion du panier avec validation
    addToCart(
        userId: string,
        productId: string,
        quantity: number,
        options: Record<string, string>,
        stockChecker: (productId: string, requestedQty: number) => boolean,
        onAdded: (item: CartItem, product: Product) => void,
        onOutOfStock: (product: Product, available: number) => void,
        onError: (error: string) => void
    ): void {
        const product = this.products.find(p => p.id === productId);
        
        if (!product) {
            onError("Produit non trouvé");
            return;
        }

        if (!stockChecker(productId, quantity)) {
            onOutOfStock(product, product.stock);
            return;
        }

        const cartItem: CartItem = {
            productId,
            quantity,
            selectedOptions: options
        };

        onAdded(cartItem, product);
    }

    // Processus de commande avec étapes
    processOrder(
        orderData: Omit<Order, 'id' | 'createdAt' | 'status'>,
        paymentProcessor: (total: number) => Promise<boolean>,
        inventoryUpdater: (items: CartItem[]) => boolean,
        onPaymentPending: () => void,
        onPaymentSuccess: (order: Order) => void,
        onPaymentFailed: (error: string) => void,
        onInventoryError: (unavailableItems: CartItem[]) => void
    ): void {
        // Vérifier la disponibilité
        const unavailableItems = orderData.items.filter(item => {
            const product = this.products.find(p => p.id === item.productId);
            return !product || product.stock < item.quantity;
        });

        if (unavailableItems.length > 0) {
            onInventoryError(unavailableItems);
            return;
        }

        // Calculer le total
        const total = this.calculateOrderTotal(orderData.items);

        const newOrder: Order = {
            id: this.generateId(),
            createdAt: new Date(),
            status: 'pending',
            total,
            ...orderData
        };

        onPaymentPending();

        // Processus de paiement
        paymentProcessor(total)
            .then(success => {
                if (success) {
                    // Mettre à jour l'inventaire
                    if (inventoryUpdater(orderData.items)) {
                        newOrder.status = 'confirmed';
                        this.orders.push(newOrder);
                        onPaymentSuccess(newOrder);
                    } else {
                        onInventoryError(orderData.items);
                    }
                } else {
                    onPaymentFailed("Paiement refusé");
                }
            })
            .catch(error => {
                onPaymentFailed(`Erreur de paiement: ${error.message}`);
            });
    }

    // Analytics de vente avec fonctions personnalisées
    getSalesAnalytics(
        dateRange: { start: Date; end: Date },
        analyzer: (orders: Order[]) => any
    ): any {
        const ordersInRange = this.orders.filter(order =>
            order.createdAt >= dateRange.start &&
            order.createdAt <= dateRange.end
        );

        return analyzer(ordersInRange);
    }

    // Gestion des avis avec modération
    addProductReview(
        productId: string,
        reviewData: Omit<Review, 'id' | 'createdAt' | 'verified'>,
        moderator: (review: Review) => boolean,
        onApproved: (review: Review) => void,
        onPending: (review: Review) => void,
        onRejected: (reason: string) => void
    ): void {
        const product = this.products.find(p => p.id === productId);
        
        if (!product) {
            onRejected("Produit non trouvé");
            return;
        }

        const newReview: Review = {
            id: this.generateId(),
            createdAt: new Date(),
            verified: false,
            ...reviewData
        };

        if (moderator(newReview)) {
            newReview.verified = true;
            product.reviews.push(newReview);
            this.updateProductRating(product);
            onApproved(newReview);
        } else {
            product.reviews.push(newReview);
            onPending(newReview);
        }
    }

    // Export de données avec formatters personnalisés
    exportData(
        dataType: 'products' | 'orders' | 'customers',
        formatter: (data: any[]) => string,
        filter?: (item: any) => boolean
    ): string {
        let data: any[] = [];
        
        switch (dataType) {
            case 'products':
                data = this.products;
                break;
            case 'orders':
                data = this.orders;
                break;
            case 'customers':
                data = this.customers;
                break;
        }

        const filteredData = filter ? data.filter(filter) : data;
        return formatter(filteredData);
    }

    private calculateOrderTotal(items: CartItem[]): number {
        return items.reduce((total, item) => {
            const product = this.products.find(p => p.id === item.productId);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }

    private updateProductRating(product: Product): void {
        const verifiedReviews = product.reviews.filter(r => r.verified);
        if (verifiedReviews.length > 0) {
            product.rating = verifiedReviews.reduce((sum, review) => sum + review.rating, 0) / verifiedReviews.length;
        }
    }

    private generateId(): string {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
}

// Utilisation du système e-commerce
const ecommerce = new EcommerceManager();

// Validateur de produit
const validateProduct = (product: Product): string[] => {
    const errors: string[] = [];
    
    if (product.name.length < 3) errors.push("Le nom doit contenir au moins 3 caractères");
    if (product.price <= 0) errors.push("Le prix doit être positif");
    if (product.stock < 0) errors.push("Le stock ne peut pas être négatif");
    if (!product.category) errors.push("La catégorie est requise");
    
    return errors;
};

// Ajouter un produit
ecommerce.addProduct(
    {
        name: "Smartphone XY Pro",
        description: "Smartphone haut de gamme avec écran OLED",
        price: 799.99,
        category: "Electronics",
        stock: 50,
        images: ["phone1.jpg", "phone2.jpg"],
        rating: 4.5
    },
    validateProduct,
    (product) => console.log(`✅ Produit ajouté: ${product.name}`),
    (errors) => console.error(`❌ Erreurs: ${errors.join(', ')}`)
);

// Recherche de produits
ecommerce.searchProducts(
    "smartphone",
    { 
        category: "Electronics", 
        minPrice: 500, 
        maxPrice: 1000,
        inStock: true 
    },
    "price",
    (products, total) => {
        console.log(`🔍 ${total} produits trouvés:`);
        products.forEach(p => console.log(`- ${p.name}: ${p.price}€`));
    },
    () => console.log("Aucun produit trouvé")
);

// Simulateur de paiement
const processPayment = async (total: number): Promise<boolean> => {
    console.log(`💳 Traitement du paiement: ${total}€`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return Math.random() > 0.1; // 90% de succès
};

// Mise à jour inventaire
const updateInventory = (items: CartItem[]): boolean => {
    console.log("📦 Mise à jour de l'inventaire...");
    return true; // Simplifié pour l'exemple
};

// Processus de commande
ecommerce.processOrder(
    {
        userId: "user123",
        items: [
            { productId: "prod1", quantity: 2 }
        ],
        total: 1599.98,
        shippingAddress: {
            street: "123 Rue de la Paix",
            city: "Paris",
            zipCode: "75001",
            country: "France"
        }
    },
    processPayment,
    updateInventory,
    () => console.log("⏳ Paiement en cours..."),
    (order) => console.log(`✅ Commande confirmée: ${order.id}`),
    (error) => console.error(`❌ Échec du paiement: ${error}`),
    (items) => console.error(`📦 Articles non disponibles:`, items)
);

// Analytics de vente
const salesStats = ecommerce.getSalesAnalytics(
    {
        start: new Date(2024, 0, 1),
        end: new Date(2024, 11, 31)
    },
    (orders) => ({
        totalOrders: orders.length,
        totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
        averageOrderValue: orders.length > 0 
            ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length 
            : 0,
        statusBreakdown: orders.reduce((acc, order) => {
            acc[order.status] = (acc[order.status] || 0) + 1;
            return acc;
        }, {} as Record<string, number>)
    })
);

console.log("📊 Statistiques de vente:", salesStats);
```

### 3. **Système de Validation pour Formulaires Web**

```typescript
// Types pour le système de validation
type ValidationResult = {
    valid: boolean;
    errors: string[];
};

type Validator<T> = (value: T) => ValidationResult;
type AsyncValidator<T> = (value: T) => Promise<ValidationResult>;

// Fonctions de validation de base
const createValidator = {
    required: <T>(fieldName: string): Validator<T> => (value: T) => {
        const isEmpty = value === null || value === undefined || 
                       (typeof value === 'string' && value.trim() === '') ||
                       (Array.isArray(value) && value.length === 0);
        
        return {
            valid: !isEmpty,
            errors: isEmpty ? [`${fieldName} est requis`] : []
        };
    },

    minLength: (min: number, fieldName: string): Validator<string> => (value: string) => {
        const isValid = value && value.length >= min;
        return {
            valid: isValid,
            errors: isValid ? [] : [`${fieldName} doit contenir au moins ${min} caractères`]
        };
    },

    maxLength: (max: number, fieldName: string): Validator<string> => (value: string) => {
        const isValid = !value || value.length <= max;
        return {
            valid: isValid,
            errors: isValid ? [] : [`${fieldName} ne peut pas dépasser ${max} caractères`]
        };
    },

    email: (fieldName: string): Validator<string> => (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = !value || emailRegex.test(value);
        return {
            valid: isValid,
            errors: isValid ? [] : [`${fieldName} doit être un email valide`]
        };
    },

    numeric: (fieldName: string): Validator<string | number> => (value: string | number) => {
        const isValid = !isNaN(Number(value));
        return {
            valid: isValid,
            errors: isValid ? [] : [`${fieldName} doit être numérique`]
        };
    },

    range: (min: number, max: number, fieldName: string): Validator<number> => (value: number) => {
        const isValid = value >= min && value <= max;
        return {
            valid: isValid,
            errors: isValid ? [] : [`${fieldName} doit être entre ${min} et ${max}`]
        };
    },

    custom: <T>(
        predicate: (value: T) => boolean,
        errorMessage: string
    ): Validator<T> => (value: T) => {
        const isValid = predicate(value);
        return {
            valid: isValid,
            errors: isValid ? [] : [errorMessage]
        };
    }
};

// Fonction pour composer plusieurs validateurs
function composeValidators<T>(...validators: Validator<T>[]): Validator<T> {
    return (value: T): ValidationResult => {
        const results = validators.map(validator => validator(value));
        const allErrors = results.flatMap(result => result.errors);
        
        return {
            valid: allErrors.length === 0,
            errors: allErrors
        };
    };
}

// Fonction pour validation asynchrone
function createAsyncValidator<T>(
    validator: Validator<T>,
    asyncCheck?: (value: T) => Promise<string | null>
): AsyncValidator<T> {
    return async (value: T): Promise<ValidationResult> => {
        const syncResult = validator(value);
        
        if (!syncResult.valid) {
            return syncResult;
        }

        if (asyncCheck) {
            try {
                const asyncError = await asyncCheck(value);
                if (asyncError) {
                    return {
                        valid: false,
                        errors: [asyncError]
                    };
                }
            } catch (error) {
                return {
                    valid: false,
                    errors: [`Erreur de validation: ${error}`]
                };
            }
        }

        return { valid: true, errors: [] };
    };
}

// Classe de validation pour objets
class FormValidator<T extends Record<string, any>> {
    private fieldValidators: Map<keyof T, Validator<any>> = new Map();
    private asyncValidators: Map<keyof T, AsyncValidator<any>> = new Map();

    addValidator<K extends keyof T>(field: K, validator: Validator<T[K]>): this {
        this.fieldValidators.set(field, validator);
        return this;
    }

    addAsyncValidator<K extends keyof T>(field: K, validator: AsyncValidator<T[K]>): this {
        this.asyncValidators.set(field, validator);
        return this;
    }

    validate(data: T): ValidationResult {
        const allErrors: string[] = [];

        for (const [field, validator] of this.fieldValidators.entries()) {
            const result = validator(data[field]);
            if (!result.valid) {
                allErrors.push(...result.errors);
            }
        }

        return {
            valid: allErrors.length === 0,
            errors: allErrors
        };
    }

    async validateAsync(data: T): Promise<ValidationResult> {
        // Validation synchrone d'abord
        const syncResult = this.validate(data);
        if (!syncResult.valid) {
            return syncResult;
        }

        // Puis validation asynchrone
        const asyncErrors: string[] = [];

        for (const [field, validator] of this.asyncValidators.entries()) {
            const result = await validator(data[field]);
            if (!result.valid) {
                asyncErrors.push(...result.errors);
            }
        }

        return {
            valid: asyncErrors.length === 0,
            errors: asyncErrors
        };
    }

    // Validation avec callbacks pour feedback temps réel
    validateWithCallback(
        data: T,
        onFieldValidated: (field: keyof T, result: ValidationResult) => void,
        onComplete: (overallResult: ValidationResult) => void
    ): void {
        const fieldResults = new Map<keyof T, ValidationResult>();
        let completedFields = 0;
        const totalFields = this.fieldValidators.size;

        const checkCompletion = () => {
            if (completedFields === totalFields) {
                const allErrors = Array.from(fieldResults.values())
                    .flatMap(result => result.errors);
                
                onComplete({
                    valid: allErrors.length === 0,
                    errors: allErrors
                });
            }
        };

        if (totalFields === 0) {
            onComplete({ valid: true, errors: [] });
            return;
        }

        for (const [field, validator] of this.fieldValidators.entries()) {
            // Simuler validation asynchrone pour demo
            setTimeout(() => {
                const result = validator(data[field]);
                fieldResults.set(field, result);
                onFieldValidated(field, result);
                completedFields++;
                checkCompletion();
            }, Math.random() * 100); // Délai aléatoire
        }
    }
}

// Interface pour formulaire d'inscription
interface RegistrationForm {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    age: number;
    terms: boolean;
}

// Configuration du validateur
const registrationValidator = new FormValidator<RegistrationForm>()
    .addValidator('username', composeValidators(
        createValidator.required('Nom d\'utilisateur'),
        createValidator.minLength(3, 'Nom d\'utilisateur'),
        createValidator.maxLength(20, 'Nom d\'utilisateur'),
        createValidator.custom(
            (value: string) => /^[a-zA-Z0-9_]+$/.test(value),
            'Le nom d\'utilisateur ne peut contenir que des lettres, chiffres et underscores'
        )
    ))
    .addValidator('email', composeValidators(
        createValidator.required('Email'),
        createValidator.email('Email')
    ))
    .addValidator('password', composeValidators(
        createValidator.required('Mot de passe'),
        createValidator.minLength(8, 'Mot de passe'),
        createValidator.custom(
            (value: string) => /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value),
            'Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre'
        )
    ))
    .addValidator('confirmPassword', (value: string) => {
        // Note: Dans une vraie application, on aurait accès au mot de passe original
        return {
            valid: value.length > 0, // Validation simplifiée pour l'exemple
            errors: value.length === 0 ? ['Confirmation du mot de passe requise'] : []
        };
    })
    .addValidator('age', composeValidators(
        createValidator.required('Âge'),
        createValidator.numeric('Âge'),
        createValidator.range(13, 120, 'Âge')
    ))
    .addValidator('terms', createValidator.custom(
        (value: boolean) => value === true,
        'Vous devez accepter les conditions d\'utilisation'
    ));

// Ajout de validateurs asynchrones (ex: vérifier si username/email sont disponibles)
registrationValidator
    .addAsyncValidator('username', createAsyncValidator(
        () => ({ valid: true, errors: [] }), // Pas de validation sync additionnelle
        async (username: string): Promise<string | null> => {
            // Simulation d'appel API
            await new Promise(resolve => setTimeout(resolve, 300));
            const unavailableUsernames = ['admin', 'root', 'test', 'user'];
            return unavailableUsernames.includes(username.toLowerCase()) 
                ? 'Ce nom d\'utilisateur n\'est pas disponible' 
                : null;
        }
    ))
    .addAsyncValidator('email', createAsyncValidator(
        () => ({ valid: true, errors: [] }),
        async (email: string): Promise<string | null> => {
            await new Promise(resolve => setTimeout(resolve, 200));
            const unavailableEmails = ['admin@example.com', 'test@example.com'];
            return unavailableEmails.includes(email.toLowerCase()) 
                ? 'Cette adresse email est déjà utilisée' 
                : null;
        }
    ));

// Utilisation
const formData: RegistrationForm = {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'StrongPass123',
    confirmPassword: 'StrongPass123',
    age: 25,
    terms: true
};

// Validation synchrone
console.log("=== Validation synchrone ===");
const syncResult = registrationValidator.validate(formData);
console.log('Résultat sync:', syncResult);

// Validation asynchrone
console.log("\n=== Validation asynchrone ===");
registrationValidator.validateAsync(formData).then(asyncResult => {
    console.log('Résultat async:', asyncResult);
});

// Validation avec callbacks temps réel
console.log("\n=== Validation avec callbacks ===");
registrationValidator.validateWithCallback(
    formData,
    (field, result) => {
        const status = result.valid ? '✅' : '❌';
        console.log(`${status} ${String(field)}: ${result.valid ? 'OK' : result.errors.join(', ')}`);
    },
    (overallResult) => {
        console.log(`\n🏁 Validation finale: ${overallResult.valid ? 'SUCCÈS' : 'ÉCHEC'}`);
        if (!overallResult.valid) {
            console.log('Erreurs:', overallResult.errors);
        }
    }
);
```

## 🔧 Bonnes Pratiques

### 1. **Types de Retour Explicites pour l'API Publique**
```typescript
// ✅ Bon - type de retour clair pour l'API
export function calculateTax(amount: number, rate: number): number {
    return amount * rate;
}

// ❌ Moins bon - laissez l'inférence pour les fonctions internes simples
function calculateTax(amount: number, rate: number) {
    return amount * rate; // Type inféré : number
}
```

### 2. **Préférer les Signatures Spécifiques à Function**
```typescript
// ❌ Éviter
let processor: Function;

// ✅ Mieux
let processor: (data: string) => string;

// ✅ Encore mieux avec interface
interface DataProcessor {
    (data: string): string;
    version: string;
}
```

### 3. **Utiliser les Guards de Types**
```typescript
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function processValue(value: unknown) {
    if (isString(value)) {
        // TypeScript sait maintenant que value est string
        return value.toUpperCase();
    }
    return 'Not a string';
}
```

### 4. **Callbacks avec Gestion d'Erreur**
```typescript
// Pattern Node.js style
type NodeCallback<T> = (error: Error | null, result?: T) => void;

function readFileAsync(
    filename: string, 
    callback: NodeCallback<string>
): void {
    setTimeout(() => {
        if (filename.endsWith('.txt')) {
            callback(null, 'Contenu du fichier');
        } else {
            callback(new Error('Format non supporté'));
        }
    }, 100);
}

readFileAsync('data.txt', (error, content) => {
    if (error) {
        console.error('Erreur:', error.message);
    } else {
        console.log('Contenu:', content);
    }
});
```

## ⚠️ Erreurs Communes et Solutions

### 1. **Paramètres Optionnels Mal Placés**
```typescript
// ❌ Problème
function badFunction(optional?: string, required: number) {
    return `${optional || 'default'} - ${required}`;
}

// ✅ Solution - paramètres optionnels à la fin
function goodFunction(required: number, optional?: string) {
    return `${required} - ${optional || 'default'}`;
}

// ✅ Alternative avec paramètres par défaut
function betterFunction(required: number, optional: string = 'default') {
    return `${required} - ${optional}`;
}
```

### 2. **Types Function Trop Génériques**
```typescript
// ❌ Problème
let handler: Function = (x: any) => x.someMethod();

// ✅ Solution
interface EventHandler {
    (event: {type: string, data: any}): void;
}
let handler: EventHandler = (event) => {
    console.log(event.type, event.data);
};
```

### 3. **Callbacks sans Gestion d'Erreur**
```typescript
// ❌ Problématique
function fetchData(callback: (data: any) => void) {
    // Que faire en cas d'erreur ?
}

// ✅ Mieux
function fetchData(
    onSuccess: (data: any) => void,
    onError: (error: Error) => void
) {
    // Gestion claire du succès et de l'erreur
}

// ✅ Ou style Promise
function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
        // Logique async avec resolve/reject
    });
}
```

## 🎯 Résumé

### **Types de Fonctions :**
- **Déclaration classique** : `function name(params): returnType`
- **Fonction fléchée** : `(params): returnType => expression`
- **Signature de fonction** : `(params) => returnType`

### **Paramètres :**
- **Obligatoires** : `param: type`
- **Optionnels** : `param?: type` (à la fin)
- **Par défaut** : `param: type = defaultValue`
- **Rest** : `...params: type[]`

### **Callbacks :**
- **Signature spécifique** plutôt que `Function`
- **Gestion d'erreur** avec patterns établis
- **Types génériques** pour la réutilisabilité

### **Bonnes Pratiques :**
- ✅ **Types explicites** pour les APIs publiques
- ✅ **Signatures spécifiques** pour les callbacks
- ✅ **Gestion d'erreurs** appropriée
- ✅ **Composition** de fonctions pour la réutilisabilité
- ✅ **Validation** des paramètres quand nécessaire

Les fonctions typées en TypeScript offrent une **sécurité et une expressivité** exceptionnelles pour construire des applications web robustes (blogs, e-commerce, formulaires) ! 🚀✨

---

**💡 Ce README couvre tous les aspects des fonctions TypeScript avec des exemples pratiques pour le développement web moderne. Chaque exemple peut être directement utilisé dans vos projets de sites web, blogs ou boutiques en ligne !**
