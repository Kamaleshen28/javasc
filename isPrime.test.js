const file = require('./isPrime');
const isPrimeFun = file.isPrime;
const isArmstrong = file.isArmstrong;

test('Testing isPrime', () => {
    expect(isPrimeFun(7)).toBe(true);
    expect(isPrimeFun(1)).toBe(false);
    expect(isPrimeFun(2)).toBe(true);
    expect(isPrimeFun(89)).toBe(true);    
})

test('Testing isAmrstrong', () => {
    expect(isArmstrong(1634)).toBe(true);
    expect(isArmstrong(371)).toBe(true);
    expect(isArmstrong(10)).toBe(false);
    expect(isArmstrong(407)).toBe(true);    
})