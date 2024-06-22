import { routes } from '@utils/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login'

const router = createBrowserRouter([
    {
        path: routes.home,
        element: <h1>Home</h1>
    },

    // auth
    {
        path: routes.login,
        element: <Login />
    }
])

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
