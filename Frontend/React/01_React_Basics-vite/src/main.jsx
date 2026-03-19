import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyName from './MyName.jsx'


createRoot(document.getElementById("root")).render(
  App() // After all App is a function, so they can be called !
);
