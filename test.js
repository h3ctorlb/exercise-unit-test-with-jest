// Importar las 3 funciones del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Test 1: Euro → Dólar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; // 3.745
    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

// Test 2: Dólar → Yen
test("One dollar should be 146.26 yen", function() {
    const yen = fromDollarToYen(1);
    // 1 USD → 1/1.07 EUR → (1/1.07)*156.5 JPY
    const expected = (1 / 1.07) * 156.5; // ≈ 146.26
    expect(yen).toBeCloseTo(146.26, 2);
})

// Test 3: Yen → Libra
test("One yen should be 0.0056 pounds", function() {
    const pounds = fromYenToPound(1);
    // 1 JPY → 1/156.5 EUR → (1/156.5)*0.87 GBP
    const expected = (1 / 156.5) * 0.87; // ≈ 0.0056
    expect(pounds).toBeCloseTo(0.0056, 4);
})

