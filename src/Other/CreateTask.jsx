import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [tasktitle, setTaskTitle] = useState("")
    const [taskdescription, setTaskDescription] = useState("")
    const [taskdate, setTaskDate] = useState("")
    const [taskcategory, setTaskCategory] = useState("")
    const [taskassignee, setTaskAssignee] = useState("")

    const SubmitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            taskTitle: tasktitle,
            taskDescription: taskdescription,
            taskDate: taskdate,
            category: taskcategory,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const employeesData = [...userData.employees]

        employeesData.forEach(function (elem) {
            if (taskassignee === elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData({ ...userData, employees: employeesData })
        localStorage.setItem('employees', JSON.stringify(employeesData))

        setTaskTitle("")
        setTaskDescription("")
        setTaskDate("")
        setTaskCategory("")
        setTaskAssignee("")
    }
    return (
        <div className='flex items-center justify-center mt-10'>
            <form onSubmit={(e) => {
                SubmitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between bg-[#2a2a2a] p-10 rounded-xl border-[1px] border-gray-600 shadow-2xl'>
                {/* Left Side: Inputs */}

                <div className='w-1/2 flex flex-col gap-4'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={tasktitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 focus:border-emerald-500 transition-all'
                            type="text"
                            placeholder='Make a UI design'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskdate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 focus:border-emerald-500 transition-all'
                            type="date"
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input
                            value={taskassignee}
                            onChange={(e) => setTaskAssignee(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 focus:border-emerald-500 transition-all'
                            type="text"
                            placeholder='Employee name'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={taskcategory}
                            onChange={(e) => setTaskCategory(e.target.value)}
                            className='text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 focus:border-emerald-500 transition-all'
                            type="text"
                            placeholder='design, dev, etc'
                        />
                    </div>
                </div>

                {/* Right Side: Textarea & Button */}
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskdescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 focus:border-emerald-500 transition-all'
                        placeholder='Detailed description of task...'
                    ></textarea>

                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full font-semibold transition-all active:scale-95'>
                        Create Task
                    </button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask