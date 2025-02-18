import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/Styles/style.css'

import { App } from './Pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
