import { describe } from 'vitest'
import { sumClamp } from './sum-clamp'

describe('Sum clamp', () => {
  it('Should sum up to zero', () => {
    expect(sumClamp([], 10)).toBe(0)
  })

  it('Should sum up to zero from some numbers', () => {
    expect(sumClamp([-1, 1], 10)).toBe(0)
  })

  it('Should sum some numbers', () => {
    expect(sumClamp([1, 2, 3, 4], 20)).toBe(10)
  })

  it('Should sum some numbers then clamp', () => {
    expect(sumClamp([1, 2, 3, 4], 5)).toBe(5)
  })
})
