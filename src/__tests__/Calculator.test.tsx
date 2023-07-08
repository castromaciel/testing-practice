import {
  act,
  render, screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  beforeEach, describe, expect, it
} from 'vitest'
import { Calculator, numbers, operations } from '../pages/Calculator/Calculator'

describe('Calculator', () => {
  beforeEach(() => {
    render(<Calculator />)
  })

  it('Should render title correctly', () => {
    expect(screen.getByText('Calculator')).toBeInTheDocument()
  })

  it('Should render numbers', () => {
    numbers.forEach((num) => screen.getByText(num))
  })

  it('Should render four rows', () => {
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(4)
  })

  it('Should render operations', () => {
    operations.forEach(
      (oper) => screen.getByText(oper)
    )
  })

  it('Should render equal sign', () => {
    expect(screen.getByText('=')).toBeInTheDocument()
  })

  it('Should render an input', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  
  it('Should user input after clicking a number', async () => {
    const one = screen.getByText('1')

    await act(async () => {
      await userEvent.click(one)
    })

    waitFor(() => {
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.value).toBe('1')
    })
  })
  it('Should user input after clicking several number', async () => {
    await act(async () => {
      const one = screen.getByText('1')
      await userEvent.click(one)
      const two = screen.getByText('2')
      await userEvent.click(two)
      const three = screen.getByText('3')
      await userEvent.click(three)
    })

    waitFor(() => {
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.value).toBe('123')
    })
  })

  it('Should show user input after clicking numers and operations', async () => {
    await act(async () => {
      const one = screen.getByText('1')
      await userEvent.click(one)
  
      const plus = screen.getByText('+')
      await userEvent.click(plus)
      await userEvent.click(one)
    })

    waitFor(() => {
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.value).toBe('1+1')
    })
  })

  it('Should calculate based on user input and show result', async () => {
    await act(async () => {
      const one = screen.getByText('1')
      await userEvent.click(one)
  
      const plus = screen.getByText('+')
      await userEvent.click(plus)
      await userEvent.click(one)
      
      const equal = screen.getByText('=')
      await userEvent.click(equal)
    })

    waitFor(() => {
      const input = screen.getByRole('textbox') as HTMLInputElement
      expect(input.value).toBe('2')
    })
  })
})
