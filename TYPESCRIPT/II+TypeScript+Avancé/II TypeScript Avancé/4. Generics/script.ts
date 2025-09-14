// Generics

// Interface Reutilisable

interface City<T> {
    name: string, 
    pop: number,
    additionalData: T
}
const Londres : City<object> = {
    name: "Londres",
    pop: 10,
    additionalData: {area: 1572}
}
const Paris : City<object[]> = {
    name: "Paris",
    pop: 5,
    additionalData: [{underground: true, lines: 57}, {restaurant: true, number: 558}]
}


// Generics with functions

const addRepairDate = <T extends object> (obj: T) => {
    const lastRepair = new Date()
    return {...obj, lastRepair}
}

const auto1 = addRepairDate({model: "A1", km: 70000, price: 10000})
const auto2 = addRepairDate({model: "A1", km: 70000, price: 10000, color: "white"})
console.log(auto1.model);
