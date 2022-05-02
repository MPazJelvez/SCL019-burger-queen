import React from 'react'
import MenuButtons from './MenuButtons.jsx'
import Sidebar from './Sidebar.jsx'
import SmallLogo from './SmallLogo.jsx'

const Waiter = () => {
  return (
    <div className='containerWaiter'>
        <div>
            <div className='menuUp'>
                <SmallLogo />
                <h1 className='menu'>Menu</h1>
            </div>
            <MenuButtons />
        </div>
        <div className='sideBar'>
            <Sidebar />
        </div>
    </div>
  )
}

export default Waiter