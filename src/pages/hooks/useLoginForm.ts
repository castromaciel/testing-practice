import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../schemas'

const useLoginForm = () => {
  const methods = useForm({
    defaultValues: { username: '', password: '' },
    mode: 'onChange',
    resolver: yupResolver(loginSchema)
  })

  const {
    register, handleSubmit, watch, formState: { errors, isDirty, isValid }, reset
  } = methods

  const onSubmit = async (data: any) => {
    console.log(data)
  }

  const usernameWatch = watch('username')
  const passwordWatch = watch('password')

  return {
    methods,
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    isDirty,
    isValid,
    reset,
    usernameWatch,
    passwordWatch
  }
}

export default useLoginForm
