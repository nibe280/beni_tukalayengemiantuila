// Intersection 

type Fish = {
    fin: number;
    element: "water";
    gills: true;
}
type Shark = {
    weight: number;
    length: number;
}
type HammerheadShark = Fish & Shark & {
    test: "abc"
};

const shark1: HammerheadShark = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
    test: "abc"
}

let obj: {
    prop1: "a"
} & {
    prop2: "b"
}

// Lier des interfaces

interface Flower {
    pollen: true;
    type: "vegetal"
}
interface Rose extends Flower {
    color: string;
    thorn: boolean;
}
const RedRose: Rose = {
    pollen: true,
    type: "vegetal",
    color: "Rose",
    thorn: true
}

// Union discriminante

type Japan = {
    lang: "JA";
    food: string[];
}
type Italy = {
    lang: "IT";
    food: string[];
}
type Country = Japan | Italy;

const automaticResponse = (country: Country) => {
    if(country.lang === "JA") {
        console.log("Hello Japan");
    } else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
}
const Japanese1 : Country = {
    lang: "JA",
    food: ["Ramen", "Sushis"]
}
automaticResponse(Japanese1)


// Unknown number of props

interface Group {
    [name: string] : object;
}
const spainTrip: Group = {
    john: {id: 1},
    tom: {id: 2},
    julia: {id: 3},
}