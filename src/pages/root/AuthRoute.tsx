import { useAppSelector } from '@/store/hooks'
import { routes } from '@utils/routes'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function AuthRoute() {
    const { isAuthenticated, isLoadingAuth } = useAppSelector(
        (state) => state.auth
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoadingAuth && isAuthenticated) navigate(routes.dashboard)
    }, [isAuthenticated, isLoadingAuth, navigate])

    return <Outlet />
}

export default AuthRoute
