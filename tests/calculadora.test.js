const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 10', ()=>{
    expect(somar(3,7)).toBe(10);
});
test('Deve subtrair 4 - 2 e retornar 2', ()=>{
    expect(subtrair(4,2)).toBe(2);
});
test('Deve subtrair 34 - 17 e retornar 17', ()=>{
    expect(subtrair(34,17)).toBe(17);
});
test('Deve multiplicar 22 x 2 e retornar 44', ()=>{
    expect(multiplicar(22,2)).toBe(44);
});
test('Deve multiplicar 32 x 64 e retornar 2048', ()=>{
    expect(multiplicar(32,64)).toBe(2048);
});
test('Deve dividir 2048 / 64 e retornar 32', ()=>{
    expect(dividir(2048,64)).toBe(32);
});
test('Deve dividir 2048 / 1 e retornar 2045', ()=>{
    expect(dividir(2048,1)).toBe(2048);
});
test('Deve dividir 4096 / 0 e retornar NaN', ()=>{
    expect(dividir(4096,0)).toBe(NaN);
});