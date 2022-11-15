import { describe, expect, test } from "@jest/globals";
import Calculator, { stringLength, reverseString, capitalize } from "../index";

describe("string count", () => {
  test("string character count to equal 5", () => {
    expect(stringLength("Hello")).toBe(5);
  });
});

describe("string reverse", () => {
  test("String reversed successfuly", () => {
    expect(reverseString('Hello')).toBe('olleH')
  })
})

describe ("Calculator", () => {

  test('Answer is 5!', () => {
    expect( Calculator.add(2, 3)).toBe(5)
  })

  test('Answer is 10!', () => {
    expect( Calculator.multiply(2, 5)).toBe(10)
  })

  test('Answer is 2!', () => {
    expect( Calculator.devide(8, 4)).toBe(2)
  })
})

describe ("first char uppercase", () => {
  test("First char in upper case", () => {
    expect(capitalize('hello')).toBe('Hello')
  })
})