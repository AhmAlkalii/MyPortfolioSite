import { render } from 'react-dom'
import App from './App.jsx'
import { ThemeProvider } from './context/theme'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
