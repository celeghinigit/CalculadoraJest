const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});
test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});
test('Deve subtrair 8 - 3 e retornar 5', ()=>{
    expect(subtrair(8,3)).toBe(5);
});
test('Deve subtrair 7 - 3 e retornar 4', ()=>{
    expect(subtrair(7,3)).toBe(4);
});
test('Deve multiplicar 3 * 7 e retornar 21', ()=>{
    expect(multiplicar(3,7)).toBe(21);
});
test('Deve multiplicar 3 * 9 e retornar 27', ()=>{
    expect(multiplicar(3,9)).toBe(27);
});
test('Deve somar 6 / 2 e retornar 3', ()=>{
    expect(dividir(6,2)).toBe(3);
});
test('Deve dividir 6 / 0 e retornar Infinity', ()=>{
    expect(dividir(6,0)).toBe(Infinity);
});