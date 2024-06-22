import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '.'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector = useSelector.withTypes<RootState>()
