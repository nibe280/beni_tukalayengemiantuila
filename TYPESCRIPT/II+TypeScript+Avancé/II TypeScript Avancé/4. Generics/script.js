"use strict";
// Generics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Londres = {
    name: "Londres",
    pop: 10,
    additionalData: { area: 1572 }
};
var Paris = {
    name: "Paris",
    pop: 5,
    additionalData: [{ underground: true, lines: 57 }, { restaurant: true, number: 558 }]
};
// Generics with functions
var addRepairDate = function (obj) {
    var lastRepair = new Date();
    return __assign(__assign({}, obj), { lastRepair: lastRepair });
};
var auto1 = addRepairDate({ model: "A1", km: 70000, price: 10000 });
var auto2 = addRepairDate({ model: "A1", km: 70000, price: 10000, color: "white" });
console.log(auto1.model);
