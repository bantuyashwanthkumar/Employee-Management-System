import React, { useState, useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [currentView, setCurrentView] = useState('login')
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedinuser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  
// Authentication
  
  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedinuser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.employees.find((e) => email === e.email && e.password === password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedinuser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("Invalid Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleRegister = (firstName, email, password) => {
    const newUser = {
      id: Date.now(),
      firstName: firstName,
      email: email,
      password: password,
      taskCounts: { active: 0, newTask: 0, completed: 0, failed: 0 },
      tasks: []
    }

    const updatedEmployees = [...userData.employees, newUser]
    setUserData({ ...userData, employees: updatedEmployees })
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    alert("Registration Successful! Please login.")
    setCurrentView('login')
  }

  return (
    <>
      {!user ? (
        currentView === 'login' ? (
          <Login handleLogin={handleLogin} setView={setCurrentView} />
        ) : (
          <Register handleRegister={handleRegister} setView={setCurrentView} />
        )
      ) : null}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    </>
  )
}
// hello
export default App
