import React from 'react'

const FailTask = ({ task }) => {
    return (
        <div className='flex-shrink-0 w-[300px] h-full bg-red-500 rounded-xl'>
            <div className='flex items-center justify-between p-5'>
                <h3 className='bg-red-500 text-white text-sm px-3 py-1 rounded-2xl'>{task.category}</h3>
                <h2 className='text-white text-sm'>{task.taskDate}</h2>
            </div>
            <h4 className='text-white text-xl font-medium px-5'>{task.taskTitle}</h4>
            <p className='text-white text-sm px-5'>{task.taskDescription}</p>
            <div className='flex justify-between mt-4'>
                <button className='bg-red-500 hover:bg-red-600 block mx-auto text-white px-3 cursor-pointer py-1 rounded-2xl'>Failed</button>
            </div>
        </div>
    )
}

export default FailTask