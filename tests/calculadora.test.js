const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});

test('Deve subtrair 10 - 5 e retornar 5', ()=>{
    expect(subtrair(10,5)).toBe(5);
});

test('Deve multiplicar 4 * 3 e retornar 12', ()=>{
    expect(multiplicar(4,3)).toBe(12);
});

test('Deve dividir 10 / 2 e retornar 5', ()=>{
    expect(dividir(10,2)).toBe(5);
});

test('Deve retornar NaN ao dividir por 0', ()=>{
    expect(Number.isNaN(dividir(10,0))).toBe(true);
});