import MenuButtons from '../components/MenuButtons.jsx'
import SidebarLunch from '../components/SidebarLunch.jsx'
import SmallLogo from '../components/SmallLogo.jsx'
import { Link } from 'react-router-dom'
import Menu from '../components/data.json'
import { useState } from 'react'

export default function WaiterLunch() {

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (item) => {
        const exist = cartItems.find((x) => x.id === item.id)
        if(exist) {
          setCartItems(cartItems.map((x) => 
          x.id === item.id ? {...exist, qty: exist.qty + 1} : x
            )
          );
        } else {
          setCartItems([...cartItems, {...item, qty: 1}])
        }
      };
    
      const onRemove = (item) => {
         const exist = cartItems.find((x) => x.id === item.id);
         if(exist.qty === 1) {
           setCartItems(cartItems.filter((x) => x.id !== item.id));
         } else {
          setCartItems(cartItems.map((x) => 
          x.id === item.id ? {...exist, qty: exist.qty - 1} : x
            )
          );
         }
      }
    
    
  return (
    <div className='containerWaiter'>
        <div className='rightSide'>
        <div>
            <header className='menuUp'>
                <SmallLogo />
                <h1 className='menuKitchen'>Menu</h1>
            </header>
            <MenuButtons />
        </div>
        <div className='box'>
        { Menu.lunch.map(item => {
            return (                
                    <button type='button'  
                    key={item.id} className='btn' 
                    onClick={() => onAdd(item)}>
                    {item.name} <br/> $ {item.price}.00
                    </button> 
            )
        })}
        </div>
        <Link to="/" className='back'>Return</Link>
        <Link to="/orders" className="ordersBtn">
          Orders
        </Link>
        </div>
        
        <div className='sideBar'>
            <SidebarLunch
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems} />
        </div>
    </div>
  )
}
