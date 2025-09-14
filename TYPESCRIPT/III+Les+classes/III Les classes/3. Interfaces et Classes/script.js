"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Norway = /** @class */ (function () {
    function Norway(name, population, lang, Capital) {
        this.name = name;
        this.population = population;
        this.lang = lang;
        this.Capital = Capital;
    }
    return Norway;
}());
var NorwayData = new Norway('Norway', 9, ["Norwegian"], "Oslo");
console.log(NorwayData);
var France = /** @class */ (function () {
    function France(name, population, lang) {
        this.name = name;
        this.population = population;
        this.lang = lang;
    }
    return France;
}());
var FranceData = new France('France', 70, ["Français", "Breton", "Basque"]);
console.log(FranceData);
var Aquitaine = /** @class */ (function (_super) {
    __extends(Aquitaine, _super);
    function Aquitaine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Aquitaine;
}(France));
var AquitaineData = new Aquitaine("Aquitaine", 4, ["Français", "Basque", "Gascon"]);
