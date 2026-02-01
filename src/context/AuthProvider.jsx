import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
            setlocalStorage()
        }
        const { employees, admin } = getlocalStorage()
        setUserData({ employees, admin })
    }, [])

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider