import { NavLink } from "react-router-dom"

const MenuButtons = () => {
  return (
    <div className='menuButtonContainer'>
        <NavLink className={({isActive}) => isActive ? 'active' : 'normal' } to='/breakfast'>Breakfast</NavLink>
        <NavLink className={({isActive}) => isActive ? 'active' : 'normal' }to='/lunch'>Lunch</NavLink>
    </div>
  )
}

export default MenuButtons