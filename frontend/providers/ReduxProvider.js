'use client'

import { store } from '@/redux/store'
import { Provider } from 'react-redux'

const ReduxProvider = ({ children }) => {
    return (
        <div className="">
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}
export default ReduxProvider