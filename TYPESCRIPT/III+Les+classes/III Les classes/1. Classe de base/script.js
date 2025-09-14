"use strict";
var Book = /** @class */ (function () {
    function Book(t, p, dop, a, th) {
        this.title = t;
        this.price = p;
        this.dateOfParution = dop;
        this.author = a;
        this.theme = th;
    }
    Book.prototype.promo = function () {
        return this.price * 0.5;
    };
    return Book;
}());
var book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
// console.log(book1);
// console.log(book1.promo());
var addToShelter = function (obj) {
    console.log("ADDED TO SHELTER", obj);
};
// addToShelter(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))
var onlyBook = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]));
console.log(onlyBook);
