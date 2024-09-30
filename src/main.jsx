import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider value={{ name: "Geeksforgeeks", id: 195 }}>
      <App />
    </Provider>
  </StrictMode>,
)
