const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 10', () => {
    expect(somar(3, 7)).toBe(10);
});

test('Divisão por zero deve retornar NaN', () => {
    expect(dividir(10, 0)).toBeNaN();
});