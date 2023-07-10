import { render, screen } from '@testing-library/react'
import { FC, ReactNode } from 'react'
import { describe } from 'vitest'

type Props = {
  children: ReactNode
}

const CustomDialog: FC<Props> = ({ children }) => (<div role="textbox">{children}</div>)

describe('CustomDialog', () => {
  it('should wrap child text', () => {
    render(<CustomDialog>My text</CustomDialog>)
    expect(screen.getByRole('textbox')).toHaveTextContent(/My text/)
  })
})
