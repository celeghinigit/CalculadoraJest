
const { somar, subtrair, multiplicar, dividir } = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', () => {
  expect(somar(2, 3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 10', () => {
  expect(somar(3, 7)).toBe(10);
});

test('Deve subtrair 7 - 3 e retornar 4', () => {
  expect(subtrair(7, 3)).toBe(4);
});

test('Deve multiplicar 4 * 3 e retornar 12', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('Deve dividir 10 / 2 e retornar 5', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('Deve retornar NaN ao dividir por zero', () => {
  expect(dividir(10, 0)).toBeNaN();
});
