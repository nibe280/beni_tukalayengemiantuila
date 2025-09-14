"use strict";
// Intersection 
var shark1 = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
    test: "abc"
};
var obj;
var RedRose = {
    pollen: true,
    type: "vegetal",
    color: "Rose",
    thorn: true
};
var automaticResponse = function (country) {
    if (country.lang === "JA") {
        console.log("Hello Japan");
    }
    else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
};
var Japanese1 = {
    lang: "JA",
    food: ["Ramen", "Sushis"]
};
automaticResponse(Japanese1);
var spainTrip = {
    john: { id: 1 },
    tom: { id: 2 },
    julia: { id: 3 },
};
