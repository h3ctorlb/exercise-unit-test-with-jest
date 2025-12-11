// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función 1: Euro → Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// Función 2: Dólar → Yen (conversión indirecta)
const fromDollarToYen = function(valueInDollar) {
    // Primero convertir dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego convertir euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
}

// Función 3: Yen → Libra (conversión indirecta)
const fromYenToPound = function(valueInYen) {
    // Primero convertir yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego convertir euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
}

// Exportar las 3 funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };