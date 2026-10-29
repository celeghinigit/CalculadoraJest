const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('soma 2 + 3 e retorna 5', () => {
    expect(somar(2, 3)).toBe(5);
});

test('soma 6 + 7 e retorna 13', () => {
    expect(somar(6, 7)).toBe(13);
});

test('subtrai 5 - 3 e retorna 2', () => {
    expect(subtrair(5, 3)).toBe(2);
});

test('multiplica 5 * 3 e retorna 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});

test('divide 8 / 2 e retorna 4', () => {
    expect(dividir(8, 2)).toBe(4);
});

test('dividir por zero retorna NaN', () => {
    expect(dividir(10, 0)).toBeNaN();
});
