import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { GoalProvider } from './context/goalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GoalProvider>
      <App />
      <ToastContainer />
    </GoalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
