import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

    const [userData] = useContext(AuthContext)

    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium'>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium'>Active Task</h5>
                <h5 className='w-1/5 text-lg font-medium'>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium'>Failed</h5>
            </div>
            <div className=''>
                {userData && userData.employees.map((item, idx) => (
                    <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded text-white'>
                        <h2 className='w-1/5 text-lg font-medium'>{item.firstName}</h2>
                        <h3 className='w-1/5 text-lg font-medium text-blue-400'>{item.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-lg font-medium text-yellow-400'>{item.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-white'>{item.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-lg font-medium text-red-600'>{item.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask