import React from 'react'
import Header from '../../Other/Header.jsx'
import TaskNumber from '../../Other/TaskNumber.jsx'
import Tasklist from '../TaskList/Tasklist.jsx'

const EmployeeDashboard = (props) => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen flex flex-col gap-10">
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskNumber data={props.data} />
            <Tasklist data={props.data} />
        </div>
    )
}

export default EmployeeDashboard