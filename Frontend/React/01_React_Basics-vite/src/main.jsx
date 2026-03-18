import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyName from './MyName.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyName/>
  </StrictMode>,
)
