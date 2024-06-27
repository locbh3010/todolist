import { useAppSelector } from '@/store/hooks'
import { Outlet } from 'react-router-dom'

function Root() {
    const { isLoadingAuth } = useAppSelector((state) => state.auth)

    if (isLoadingAuth) return <></>

    return (
        <>
            <Outlet />
        </>
    )
}

export default Root
