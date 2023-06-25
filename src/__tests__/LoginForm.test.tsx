import {
  act, cleanup, render, screen, waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { vi } from 'vitest'
import { loginFormMock, loginFormMockError } from '../__mocks__/LoginForm.mock'
import { LoginForm } from '../pages'

vi.mock('axios')
vi.mock('../pages/components/DisplayFormValues/DisplayFormValues.tsx', async () => ({
  __esModule: true,
  default: () => (<div>Mocked DisplayFormValues</div>)
}))

describe('Login Form', () => {
  afterEach(cleanup)
  afterEach(vi.clearAllMocks)

  beforeEach(() => {
    (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValue({
      data: loginFormMock
    })
    render(<LoginForm />)
  })

  it('Should render 2 inputs at the screen', () => {
    const usernameInput = screen.getByRole('textbox', { name: /Username/i })
    const passwordInput = screen.getByRole('textbox', { name: /Password/i })
    const signInButton = screen.getByRole('button', { name: /Sign in/i })

    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(signInButton).toBeInTheDocument()

    expect(usernameInput).toHaveValue('')
    expect(usernameInput).toHaveValue('')
    expect(signInButton).toBeDisabled()
  })

  it('Should enable submit button if the forms values are valid', async () => {
    const signInButton = screen.getByRole('button', { name: /Sign in/i })
    const usernameInput = screen.getByRole('textbox', { name: /Username/i })
    const passwordInput = screen.getByRole('textbox', { name: /Password/i })

    expect(signInButton).toBeDisabled()

    await act(async () => {
      await userEvent.type(usernameInput, loginFormMock.username)
      await userEvent.type(passwordInput, loginFormMock.password)
    })

    await waitFor(() => {
      expect(usernameInput).toHaveValue(loginFormMock.username)
      expect(passwordInput).toHaveValue(loginFormMock.password)
      expect(signInButton).not.toBeDisabled()
    })
  })

  it('Should disabled submit button if the form values are not valid', async () => {
    const usernameInput = screen.getByRole('textbox', { name: /Username/i })
    const passwordInput = screen.getByRole('textbox', { name: /Password/i })
    const signInButton = screen.getByRole('button', { name: /Sign in/i })

    expect(signInButton).toBeDisabled()

    await act(async () => {
      await userEvent.type(usernameInput, loginFormMockError.username)
      await userEvent.type(passwordInput, loginFormMockError.password)
    })

    await waitFor(() => {
      expect(usernameInput).toHaveValue(loginFormMockError.username)
      expect(passwordInput).toHaveValue(loginFormMockError.password)
      expect(screen.getByText(/Username mustn't have more than 12 characters/i)).toBeInTheDocument()
      expect(screen.getByText(/Password must be alphanumeric, and contain a maximum of 12 characters, one capital letter and one special character/i)).toBeInTheDocument()
      expect(signInButton).toBeDisabled()
    })
  })

  it('Should call the onSubmiit function when the user clicks Sign in button', async () => {
    const usernameInput = screen.getByRole('textbox', { name: /Username/i })
    const passwordInput = screen.getByRole('textbox', { name: /Password/i })
    const signInButton = screen.getByRole('button', { name: /Sign in/i })

    await act(async () => {
      await userEvent.type(usernameInput, loginFormMock.username)
      await userEvent.type(passwordInput, loginFormMock.password)      
    })

    await waitFor(() => {
      expect(signInButton).not.toBeDisabled()
    })
    await act(async () => {
      await userEvent.click(signInButton)
    })

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled()
    })
  })

  it('Should mock DisplayFormValues', () => {
    expect(screen.getByText(/Mocked DisplayFormValues/i)).toBeInTheDocument()
  })
})
