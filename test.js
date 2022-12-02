const mathOperations = require('./calculator');
const utilFunctions = require('./functions');

describe("Calculator tests", () => {
  test('adding 1 + 2 should return 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
 })
 
describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   // arrange and act
   var result = mathOperations.sum(1,2)
 
   // assert
   expect(result).toBe(3);
 });
 
 test("subtracting 2 from 10 should return 8", () => {
   // arrange and act
   var result = mathOperations.diff(10,2)
 
   // assert
   expect(result).toBe(8);
 });
 
 test("multiplying 2 and 8 should return 16", () => {
   // arrange and act
   var result = mathOperations.product(2,8)
 
   // assert
   expect(result).toBe(16);
 });
})

describe("Uility Functions Test", () => {
  test('Converting 10 inches to 25.4 CM', () => {
    expect(utilFunctions.inch_to_cm(10)).toBe(25.4);
  });
 })

 describe("Uility Functions Test", () => {
  test('Converting 6 inches to 15.24 CM', () => {
    expect(utilFunctions.inch_to_cm(6)).toBe(15.24);
  });
 })

 describe("Uility Functions Test", () => {
  test('Determining if "bob" is palindrome', () => {
    expect(utilFunctions.palindrome("bob")).toBe(true);
  });
 })

 describe("Uility Functions Test", () => {
  test('Determining if "bobby" is palindrome', () => {
    expect(utilFunctions.palindrome("bobby")).toBe(false);
  });
 })

 describe("Uility Functions Test", () => {
  test('Calculate area of Square', () => {
    expect(utilFunctions.square_area(12.5)).toBe(156.25);
  });
 })

 describe("Uility Functions Test", () => {
  test('Calculate area of Square', () => {
    expect(utilFunctions.square_area(30)).toBe(900);
  });
 })

 describe("Uility Functions Test", () => {
  test('Calculate area of Circle', () => {
    expect(utilFunctions.circle_area(10)).toBeCloseTo(314.159);
  });
 })

 describe("Uility Functions Test", () => {
  test('Calculate area of Circle', () => {
    expect(utilFunctions.circle_area(16.2)).toBeCloseTo(824.4795);
  });
 })