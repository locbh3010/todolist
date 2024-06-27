import { useAppSelector } from '@/store/hooks'
import { Button } from '@components/button'
import { routes } from '@utils/routes'
import { supabase } from '@utils/supabase'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function PrivateRoute() {
    const { isAuthenticated, isLoadingAuth } = useAppSelector(
        (state) => state.auth
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated && !isLoadingAuth) navigate(routes.login)
    }, [isAuthenticated, isLoadingAuth, navigate])

    if (isLoadingAuth) return null

    return (
        <>
            <Button
                size='large'
                onClick={() => {
                    supabase.auth.signOut()
                }}
            >
                Log Out
            </Button>
            <Outlet />
        </>
    )
}

export default PrivateRoute
