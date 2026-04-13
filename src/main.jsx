import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductCartContext from './context/ProductCartContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProductCartContext>
    <App />
  </ProductCartContext>,
)
