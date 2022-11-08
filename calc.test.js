const calc = require('./Task3');
const math = new calc();

describe('add', () => {
    test('should return the sum of two numbers', () => {
        expect(math.add(1, 2)).toBe(3);
    });
    test('should throw an error if a is greater than b', () => {
        expect(() => math.add(2, 1)).toThrow();
    });
    test('should throw an error if a is equal to b', () => {
        expect(() => math.add(1, 1)).toThrow();
    });
    test('should throw an error if a is equal to 0', () => {
        expect(() => math.add(0, 1)).toThrow();
    });
});

describe('subtract', () => {
    test('should return the difference of two numbers', () => {
        expect(math.subtract(2, 1)).toBe(1);
    });
    test('should throw an error if b is greater than a', () => {
        expect(() => math.subtract(1, 2)).toThrow();
    });
    test('should throw an error if a is equal to b', () => {
        expect(() => math.subtract(1, 1)).toThrow();
    });
    test('should throw an error if a is equal to 1', () => {
        expect(() => math.subtract(1, 0)).toThrow();
    });
});

describe('multiply', () => {
    test('should return the product of two numbers', () => {
        expect(math.multiply(2, 1)).toBe(2);
    });
    test('should throw an error if a and b are greater than 10', () => {
        expect(() => math.multiply(11, 11)).toThrow();
    });
    test('should throw an error if a is equal to 0', () => {
        expect(() => math.multiply(0, 1)).toThrow();
    });
    test('should throw an error if b is equal to 0', () => {
        expect(() => math.multiply(1, 0)).toThrow();
    });
});

describe('divide', () => {
    test('should return the quotient of two numbers', () => {
        expect(math.divide(2, 1)).toBe(2);
    });
    test('should throw an error if b is equal to 0', () => {
        expect(() => math.divide(1, 0)).toThrow();
    });
    test('should throw an error if a is equal to 0', () => {
        expect(() => math.divide(0, 1)).toThrow();
    });
    test('should throw an error if b is greater than a', () => {
        expect(() => math.divide(1, 2)).toThrow();
    });
});