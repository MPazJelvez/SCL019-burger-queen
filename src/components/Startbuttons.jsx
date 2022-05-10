import { Link } from "react-router-dom"

const Startbuttons = () => {
  return (
    <div className='buttons'>
        <Link to="/breakfast" className='waiter'>Waiter</Link>
        <Link to="/kitchen" className='kitchen'>Kitchen</Link>
    </div>
  )
}

export default Startbuttons