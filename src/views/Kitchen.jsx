import SmallLogo from '../components/SmallLogo.jsx'
import { Link } from 'react-router-dom'
import { db } from '../firebase - config.js'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export default function Kitchen() {
  const [orders,setOrders] = useState([]);
  const ordersCollectionRef = collection(db, 'orders')
  useEffect(() => {

    const getOrders = async () => {
      const data = await getDocs(ordersCollectionRef)
      console.log(data);
      setOrders(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getOrders()
  }, []);

  return (
    <div>
        <header className='menuUp'>
                <SmallLogo />
                <h1 className='menuKitchen'>Kitchen</h1>
        </header>
        <div className='ordersContainer'>
        {orders.map((order)  => {
           return <div className='orderKitchen'>
             {' '}
           <p> Name: {order.clientName} </p>
           <p> Order: </p>
             <p>Item: {order.order[0]}</p>
             <button type='button' className='btnReady'>Ready to serve</button>
         </div>
        })}
        </div>
       
        <Link to="/" className='return'>Return</Link>
    </div>
  )
}
