import SmallLogo from '../components/SmallLogo.jsx'
import { Link } from 'react-router-dom'

export default function Kitchen() {
  return (
    <div>
        <header className='menuUp'>
                <SmallLogo />
                <h1 className='menuKitchen'>Kitchen</h1>
        </header>
        <Link to="/" className='return'>Return</Link>
    </div>
  )
}
