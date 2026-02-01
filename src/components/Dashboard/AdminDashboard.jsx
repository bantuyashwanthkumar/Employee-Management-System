import React, { useEffect } from 'react'
import Header from '../../Other/Header.jsx'
import CreateTask from '../../Other/CreateTask.jsx'
import AllTask from '../../Other/AllTask.jsx'
import { setlocalStorage } from '../../utils/LocalStorage'

const AdminDashboard = (props) => {


    return (
        <div className='p-7 h-screen w-full bg-[#1c1c1c]'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard