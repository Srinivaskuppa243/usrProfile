import { createRoot } from 'react-dom/client'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
