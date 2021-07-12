const add = (a, b) => a + b;

const users = ['roman', 'fava', 'basoa'];

it('Adds two values', () => {
  expect(add(2, 4)).toBe(6);
  expect(users).not.toContain('apples');
});
