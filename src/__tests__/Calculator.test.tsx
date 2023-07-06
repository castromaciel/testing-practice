import { cleanup, render, screen } from '@testing-library/react'
import { FC } from 'react'
import { describe, it } from 'vitest'

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Calculator: FC = () => (
  <div>
    <h1>Calculator</h1>
    {numbers.map((num) => (
      <span key={num}>{num}</span>
    ))}
  </div>
)

describe('Calculator', () => {
  afterEach(cleanup)

  it('Should render component', () => {
    render(<Calculator />)
  })

  it('Should render title correctly', () => {
    render(<Calculator />)

    expect(screen.getByText('Calculator')).toBeInTheDocument()
  })

  it('Should render numbers', () => {
    render(<Calculator />)

    numbers.forEach((num) => screen.getByText(num))
  })
})
