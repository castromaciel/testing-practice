/* eslint-disable react/no-array-index-key */
import { fireEvent, render, screen } from '@testing-library/react'
import { FC, useState } from 'react'
import {
  beforeEach, describe, expect, it
} from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

const operations = ['+', '-', '*', '/']
const equalSign = '='

const Calculator: FC = () => {
  const [value, setValue] = useState<string>('')

  const createHandleClick = (val: string) => setValue(value.concat(val))
  return (
    <section>
      <h1>Calculator</h1>
      <input type="text" value={value} readOnly />
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((num) => (
              <button 
                type="button"
                onClick={() => createHandleClick(num.toString())}
                key={num}
              >
                {num}
              </button>
            ))}
          </div>
        ))}
        { operations.map((operation) => (
          <button
            type="button"
            onClick={() => createHandleClick(operation)} 
            key={operation}
          >
            {operation}
          </button>
        )) }
        <span>{equalSign}</span>
      </div>
    </section>
  ) 
}

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
  
  it('Should user input after clicking a number', () => {
    const one = screen.getByText('1')

    fireEvent.click(one)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('1')
  })
  it('Should user input after clicking several number', () => {
    const one = screen.getByText('1')
    fireEvent.click(one)
    const two = screen.getByText('2')
    fireEvent.click(two)
    const three = screen.getByText('3')
    fireEvent.click(three)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('123')
  })

  it('Should show user input after clicking numers and operations', () => {
    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('1+1')
  })
})
