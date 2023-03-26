

import { RouterProvider } from 'react-router-dom'
import { useCheckAuth } from './hooks'
import { router } from './router'
import { CheckingAuth } from './ui'

export const JournalApp = () => {

    const status = useCheckAuth()


    if (status === 'checking') return <CheckingAuth />

    return (

        <RouterProvider router={router} />
    )
}
