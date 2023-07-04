import { describe } from 'vitest'
import { canReconfigure } from './canReconfigure'

describe('Can reconfigure', () => {
  it('Should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('Should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(1)).toThrow()
  })

  it('Should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('XBOX')).toThrow()
  })

  it('Should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })
  
  it('should return false, if strings provided have different length', () => {
    expect(canReconfigure('a', 'bc')).toBe(false)
  })

  it('should return false, if strings provided have different length', () => {
    expect(canReconfigure('a', 'bc')).toBe(false)
  })

  it('should return false if strings provided have different length even with same unique letters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('Should return false if strings has different order of transformations', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
