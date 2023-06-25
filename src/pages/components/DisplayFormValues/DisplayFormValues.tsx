import { Box, Typography } from '@mui/material'
import { FC } from 'react'

type Props = { 
  isDirty: boolean
  isValid: boolean
  values: {
    username: string
    password: string
  }
}

const DisplayFormValues: FC<Props> = ({
  isDirty, isValid, values
}) => (
  <Box color="grey.600" mt="10">
    {isDirty && isValid && (
    <>
      <Typography>
        Username:
        {' '}
        {values.username}
      </Typography>
      <Typography>
        Password:
        {' '}
        {values.password}
      </Typography>
    </>
    )}
  </Box>
)

export default DisplayFormValues
