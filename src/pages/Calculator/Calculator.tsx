/* eslint-disable react/no-array-index-key */
import { evaluate } from 'mathjs'
import { FC, useState } from 'react'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  [0]
]

export const operations = ['+', '-', '*', '/']
export const equalSign = '='

export const Calculator: FC = () => {
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
        <button
          type="button"
          onClick={() => setValue(evaluate(value))}
        >
          {equalSign}

        </button>
      </div>
    </section>
  ) 
}
