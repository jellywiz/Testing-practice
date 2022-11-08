const stringLength = require('./Task-1.js');
const str = 'hello';

test('string length', () => {
  expect(stringLength(str)).toBe(5);
  
  expect((str) => stringLength(str)).toThrow(Error);
});