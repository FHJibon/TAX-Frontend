'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => boolean
  logout: () => void
  user: { email: string } | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ email: string } | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on mount
    const authStatus = localStorage.getItem('isAuthenticated')
    const userEmail = localStorage.getItem('userEmail')
    if (authStatus === 'true' && userEmail) {
      setIsAuthenticated(true)
      setUser({ email: userEmail })
    }
  }, [])

  const login = (email: string, password: string): boolean => {
    // Dummy authentication
    if (email === 'admin@gmail.com' && password === '1234') {
      setIsAuthenticated(true)
      setUser({ email })
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', email)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
