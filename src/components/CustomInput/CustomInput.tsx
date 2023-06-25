import { TextField, Typography } from '@mui/material'
import { FC, HTMLInputTypeAttribute } from 'react'
import { FieldErrors, FieldValues, useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label: string
  type?: HTMLInputTypeAttribute,
  disabled?: boolean
  required?: boolean
}

const formValidations = (errors: FieldErrors<FieldValues>, errorKey: string) => (
  errors[errorKey]
    ? <Typography color="red">{errors[errorKey]?.message?.toString()}</Typography>
    : ''
)

const CustomInput: FC<Props> = ({
  name, label = '', type = 'text', disabled = false, required = false
}) => {
  const { register, formState: { errors } } = useFormContext()
  
  return (
    <div>
      <TextField
        {...register(name)}
        {...(disabled) ? { disabled } : {}}
        error={errors && !!errors[name]}
        fullWidth
        id={name}
        label={label}
        required={required}
        type={type}
        variant="outlined"
      />
      {errors && formValidations(errors, name)}
    </div>
  ) 
}

export default CustomInput
