import { describe, expect, it } from 'vitest'
import { fizzBuzz } from './fizzBuzz'

/*
Print integers one-to-N
  - Print “Fizz” if an integer is divisible by three
  - Print “Buzz” if an integer is divisible by five
  - Print “FizzBuzz” if an integer is divisible by both three and five.
  - Print the number if it isn't divisible by none of above.
*/

describe('fizzBuzz', () => {
  // We have subsequently deactivated this test because it is redundant
  // it('should be a function', () => {
  //   expect(typeof fizzBuzz).toBe('function')
  // })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzBuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzBuzz()).toThrow('Parameter provided must be a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => fizzBuzz(NaN)).toThrow('Parameter provided must be a number')
  })

  it('Should return 1 if 1 is provided as parameter', () => {
    expect(fizzBuzz(1)).toBe(1)
  })

  it('Should return 2 if 2 is provided as parameter', () => {
    expect(fizzBuzz(2)).toBe(2)
  })

  it('Should return "Fizz" if 3 is provided as parameter', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('Should return "Fizz" if number provided is multiple of 3', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
    expect(fizzBuzz(12)).toBe('Fizz')
  })

  // This test is already covered in the algorithm
  // it('Should return 4 if number provided is 4', () => {
  //   expect(fizzBuzz(4)).toBe(4)
  // })

  it('Should return "Buzz" if number provided is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('Should return "Buzz" if number provided is multiple of 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
    expect(fizzBuzz(20)).toBe('Buzz')
  })

  it('Should return "FizzBuzz" if number provided is multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })
})
