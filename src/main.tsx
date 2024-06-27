import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import App from './pages'
import store from './store'

import '@styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastContainer
                draggablePercent={50}
                closeOnClick
                closeButton
                newestOnTop
            />
            <App />
        </Provider>
    </React.StrictMode>
)
