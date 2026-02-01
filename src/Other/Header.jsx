import React from 'react'

const Header = (props) => {
    //const Header = ({changeUser, data}) => {

    const logOutUser = () => {
        localStorage.removeItem('loggedinuser')
        props.changeUser('')
        //window.location.reload()
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl font-semibold'>{props.data ? props.data.firstName : 'Admin'} 👋</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm hover:bg-red-700 transition-colors active:scale-95'>Log Out</button>
        </div>
    )
}


export default Header