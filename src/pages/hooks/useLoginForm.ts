import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { callEndpoint } from '../../services'
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
    const result = await callEndpoint(data)
    console.log({ result })
    reset()
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
