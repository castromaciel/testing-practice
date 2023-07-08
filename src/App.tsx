import { Box, Typography } from '@mui/material'
import { LoginForm } from './pages'
import { Calculator } from './pages/Calculator/Calculator'

const App = () => (
  <Box
    className="App"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
  >
    <Typography variant="h2" mb="20px" textAlign="center">
      Gentleman class - Testing
    </Typography>
    <LoginForm />
    <Calculator />
  </Box>
)

export default App
