const reverseString = require('./Task-2');
const str = 'hello';

test('reverseString function exists', () => {
    expect(reverseString(str)).toBe(str.split('').reverse().join(''));
    expect((str) => reverseString(str)).toThrow(Error);
});