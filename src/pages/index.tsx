import store from '@/store'
import { initalAuthThunk } from '@/store/auth/thunks'
import { routes } from '@utils/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './dashboard'
import Login from './login'
import Register from './register'
import Root from './root'
import AuthRoute from './root/AuthRoute'
import PrivateRoute from './root/PrivateRoute'

const router = createBrowserRouter([
    {
        path: routes.root,
        element: <Root />,
        loader: () => {
            store.dispatch(initalAuthThunk())
            return {}
        },
        children: [
            // auth
            {
                path: routes.home,
                element: <AuthRoute />,
                children: [
                    {
                        index: true,
                        element: <h1>Home</h1>
                    },
                    {
                        path: routes.auth,
                        children: [
                            {
                                path: routes.login,
                                element: <Login />
                            },
                            {
                                path: routes.register,
                                element: <Register />
                            }
                        ]
                    }
                ]
            },

            // private
            {
                path: routes.dashboard,
                element: <PrivateRoute />,
                children: [
                    {
                        path: routes.root,
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
])

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
