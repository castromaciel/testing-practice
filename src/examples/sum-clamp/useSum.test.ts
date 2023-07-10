import { act, renderHook } from '@testing-library/react'
import { describe } from 'vitest'
import { useSum } from './useSum'

describe('useSum', () => {
  it('should start with zero', () => {
    const { result } = renderHook(() => useSum())

    expect(result.current.sum).toBe(0)
  })

  it('should sum a number', () => {
    const { result } = renderHook(() => useSum())
    act(() => {
      result.current.add(10)
    })

    expect(result.current.sum).toBe(10)
  })

  it('should sum a number', () => {
    const { result } = renderHook(() => useSum())
    act(() => {
      result.current.add(1)
    })

    act(() => {
      result.current.add(1)
    })

    expect(result.current.sum).toBe(2)
  })
})
