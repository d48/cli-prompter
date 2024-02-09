// Import the function to be tested
const getChoice = require('./index.js');

// Test case 1: Testing with "people" list
test('Testing with "people" list', () => {
  const list = "people";
  const result = getChoice(list);
  expect(result).toBeDefined();
  expect(result).toEqual(expect.any(String))
});

// Test case 2: Testing with "relationships" list
test('Testing with "relationships" list', () => {
  const list = "relationships";
  const result = getChoice(list);
  expect(result).toBeDefined();
  expect(result).toEqual(expect.any(String))
});

// Test case 3: Testing with "public" list
test('Testing with "public" list', () => {
  const list = "public";
  const result = getChoice(list);
  expect(result).toBeDefined();
  expect(result).toEqual(expect.any(String))
});

// Test case 4: Testing with "youpick" list
test('Testing with "youpick" list', () => {
  const list = "youpick";
  const result = getChoice(list);
  expect(result).toBeDefined();
  expect(result).toEqual(expect.any(String))
});
