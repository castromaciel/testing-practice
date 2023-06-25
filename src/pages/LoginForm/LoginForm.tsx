import { Box } from '@mui/material'
import { FormProvider } from 'react-hook-form'
import { CustomButton, CustomInput } from '../../components'
import { DisplayFormValues } from '../components'
import { useLoginForm } from '../hooks'

const LoginForm = () => {
  const {
    onSubmit, isDirty, isValid, usernameWatch, passwordWatch, methods
  } = useLoginForm()

  return (
    <Box
      sx={{
        bgcolor: 'grey.300',
        borderRadius: '30px',
        p: '50px',
        width: '50%'
      }}  
    >
      <FormProvider {... methods}>
        <form onSubmit={onSubmit}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <CustomInput
              name="username"
              label="Username"
              required
            />
            <CustomInput
              name="password"
              label="Password"
              required
            />
            <CustomButton isDirty={isDirty} isValid={isValid} type="submit">
              Sign in
            </CustomButton>
          </Box>
        </form>
      </FormProvider>

      <DisplayFormValues
        isDirty={isDirty}
        isValid={isValid}
        values={{ username: usernameWatch, password: passwordWatch }}
      />
    </Box>
  )
}

export default LoginForm
