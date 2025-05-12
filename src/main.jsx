import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MenuProvider } from './contexts/MenuContext.jsx'
import AuthProvider from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
    <MenuProvider>
      <App />
    </MenuProvider>
    </AuthProvider>
  </BrowserRouter>
)
