import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


let root = document.getElementById('root')

if(root) {
    ReactDOM.createRoot(root).render(
        <App />
    )
}

