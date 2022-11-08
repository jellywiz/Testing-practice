const cap = require('./Task4');
const str = 'hello';

test('the capital', () => {
    expect(cap(str)).toBe('Hello');
    expect((str) => cap()).toThrow(Error);
})