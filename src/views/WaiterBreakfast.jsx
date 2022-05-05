import MenuButtons from '../components/MenuButtons.jsx'
// import Sidebar from '../components/Sidebar.jsx'
import SmallLogo from '../components/SmallLogo.jsx'
import { Link } from 'react-router-dom'

const WaiterBreakfast = () => {
  return (
    <div>
        <div>
            <header className='menuUp'>
                <SmallLogo />
                <h1 className='menuKitchen'>Menu</h1>
            </header>
            <MenuButtons />
        </div>
        <h1>Here goes the breakfast menu</h1>
        <Link to="/" className='return'>Return</Link>
        {/* <div className='sideBar'>
            <Sidebar />
        </div> */}
    </div>
  )
}

export default WaiterBreakfast