import * as yup from 'yup'

export const loginSchema = yup.object({
  username: yup.string()
    .required('Username is required')
    .max(12, 'Username mustn\'t have more than 12 characters'),
  password: yup.string()
    .required('Password is required')
    .max(12, 'Password mustn\'t have more than 12 characters')
    .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must be alphanumeric, and contain a maximum of 12 characters, one capital letter and one special character')
})
