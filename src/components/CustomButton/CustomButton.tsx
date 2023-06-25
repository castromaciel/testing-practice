import { Button } from '@mui/material'
import { FC, ReactNode } from 'react'

type Props = {
  isDirty: boolean
  isValid: boolean
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
}

const CustomButton: FC<Props> = ({
  children, isDirty, isValid, type
}) => (
  <Button
    type={type}
    variant="contained"
    fullWidth
    disabled={!isValid || !isDirty}
  >
    {children}
  </Button>
)

export default CustomButton
