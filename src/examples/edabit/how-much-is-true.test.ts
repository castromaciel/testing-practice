import { describe } from 'vitest'

/**
 * Create a function which returns the number of true values there are in an array.
 * Notes
 * Return 0 if given an empty array.
 * All array items are of the type bool (true or false).
 */

export const countTrueValues = (param: boolean[]) => {
  if (!Array.isArray(param)) throw Error('Value must be an array')
  
  let trueCounts = 0

  for (let i = 0; i < param.length; i += 1) {
    if (param[i] === true) {
      trueCounts += 1
    }
  }

  return trueCounts
}

describe('How much is true?', () => {
  it('Should throw if the param its not an array', () => {
    expect(() => countTrueValues(false)).toThrow()
  })

  it('Should return 0 if the array of values has empty', () => {
    expect(countTrueValues([])).toBe(0)
  })

  it('should return 1 if the array of values has 1 true value', () => {
    expect(countTrueValues([''])).toBe(0)
    expect(countTrueValues(['true'])).toBe(0)
  })

  it('should return count of true in the array', () => {
    expect(countTrueValues([true, true, true])).toBe(3)
    expect(countTrueValues([false, false, true])).toBe(1)
    expect(countTrueValues([true, false, false])).toBe(1)
    expect(countTrueValues([false, false, false])).toBe(0)
  })
})
