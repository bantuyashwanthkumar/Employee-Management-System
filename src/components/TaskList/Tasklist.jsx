import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import FailTask from './FailTask'
import CompleteTask from './CompleteTask'

const Tasklist = ({ data }) => {
    return (
        <div className='h-[55%] overflow-x-auto flex flex-nowrap items-center justify-center gap-5 w-full py-5 mt-10'>
            {data.tasks.map((task, idx) => {
                if (task.active) {
                    return <AcceptTask key={idx} task={task} />
                }
                if (task.newTask) {
                    return <NewTask key={idx} task={task} />
                }
                if (task.completed) {
                    return <CompleteTask key={idx} task={task} />
                }
                if (task.failed) {
                    return <FailTask key={idx} task={task} />
                }
                return null
            })}
        </div>
    )
}

export default Tasklist