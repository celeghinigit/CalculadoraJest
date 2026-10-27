const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});
test('Deve subtrair 15 - 4 e retornar 11', ()=>{
    expect(subtrair(15,4)).toBe(11);
});
test('Deve multiplicar 5 * 5 e retornar 25', ()=>{
    expect(multiplicar(5,5)).toBe(25);
});
test('Deve dividir 35 / 7 e retornar 5', ()=>{
    expect(dividir(35,7)).toBe(5);
});
test('Deve retornar NaN ao dividir por 0', ()=>{
    expect(dividir(10,0)).toBeNaN();
});