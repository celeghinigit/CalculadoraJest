const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', () => {
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 6 + 7 e retornar 13', () => {
    expect(somar(6,7)).toBe(13);
});

test('Deve somar números negativos', () => {
    expect(somar(-2,-3)).toBe(-5);
});

test('Deve somar positivo com negativo', () => {
    expect(somar(5,-2)).toBe(3);
});

test('Deve subtrair 10 - 4 e retornar 6', () => {
    expect(subtrair(10,4)).toBe(6);
});

test('Deve multiplicar 3 * 4 e retornar 12', () => {
    expect(multiplicar(3,4)).toBe(12);
});

test('Deve dividir 10 / 2 e retornar 5', () => {
    expect(dividir(10,2)).toBe(5);
});

test('Deve retornar NaN ao dividir por zero', () => {
    expect(dividir(10,0)).toBeNaN();
});
