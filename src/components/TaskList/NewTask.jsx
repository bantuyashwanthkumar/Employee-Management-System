import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ task }) => {

    const [userData, setUserData] = useContext(AuthContext)

    const handleAccept = () => {
        const employees = [...userData.employees]
        const loggedInUser = JSON.parse(localStorage.getItem('loggedinuser'))
        const employeeIdx = employees.findIndex(e => e.email === loggedInUser.data.email)

        if (employeeIdx !== -1) {
            const taskIdx = employees[employeeIdx].tasks.findIndex(t => t.taskTitle === task.taskTitle)

            if (taskIdx !== -1) {
                employees[employeeIdx].tasks[taskIdx].active = true
                employees[employeeIdx].tasks[taskIdx].newTask = false

                employees[employeeIdx].taskCounts.active += 1
                employees[employeeIdx].taskCounts.newTask -= 1

                const updatedData = { ...userData, employees }
                setUserData(updatedData)
                localStorage.setItem('employees', JSON.stringify(employees))

                const updatedLoggedInUser = { ...loggedInUser, data: employees[employeeIdx] }
                localStorage.setItem('loggedinuser', JSON.stringify(updatedLoggedInUser))

                window.location.reload()
            }
        }
    }

    return (
        <div className='flex-shrink-0 w-[300px] h-full bg-blue-500 rounded-xl'>
            <div className='flex items-center justify-between p-5'>
                <h3 className='bg-red-500 text-white text-sm px-3 py-1 rounded-2xl'>{task.category}</h3>
                <h2 className='text-white text-sm'>{task.taskDate}</h2>
            </div>
            <h4 className='text-white text-xl font-medium px-5'>{task.taskTitle}</h4>
            <p className='text-white text-sm px-5'>{task.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button onClick={handleAccept} className='bg-green-500 hover:bg-green-600 block mx-auto text-white px-3 cursor-pointer py-1 rounded-2xl'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask