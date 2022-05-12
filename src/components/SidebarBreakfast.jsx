import { useState } from "react";
import { db } from '../firebase - config.js'
import {collection, addDoc } from 'firebase/firestore'

const SidebarBreakfast = (props) => {
  const {cartItems, onAdd, onRemove} = props;
  const [newName, setNewName] = useState('');
  const userCollectionRef = collection(db, 'orders');

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const tip = itemsPrice * 0.1;
  const totalPrice = itemsPrice + tip;

  const createOrder = async () => {
    console.log('creado')
    await addDoc(userCollectionRef, {Customer: newName, order: cartItems})
  }

  

  return (
    <aside className="col-1">
    <input type="text" placeholder="Customer's name" className='customer' 
    onChange={(e) => {setNewName(e.target.value)} } />
    <h2 className="order">Order:</h2>
    <div>{cartItems.length === 0 && <div> Cart is Empty </div>}</div>
    {cartItems.map((item) => (
      <div key={item.id} className="row">
        <div className="col-2 cart">{item.name}</div>
        <div className="col-2">
          <button onClick={() => onAdd(item)} className="add">
            +
          </button>
          <button onClick={() => onRemove(item)} className="remove">
            -
          </button>
        </div>
        <div className="col-2 text-right cart">
          {item.qty} x $ {item.price}.00
        </div>
      </div>
    ))}
    {cartItems.length !== 0 && (
      <>
      <hr />
      <div className="row">
        <div className="col-2 cart">Items Price</div>
        <div className="col-1 text-right cart">$ {itemsPrice}.00</div>
      </div>
      <div className="row">
        <div className="col-2 cart">Tip 10%</div>
        <div className="col-1 text-right cart">$ {tip.toFixed(2)}</div>
      </div>
      <div className="row">
        <div className="col-2 cartTotal"><strong>Total</strong></div>
        <div className="col-1 text-right cartTotal">$ {totalPrice.toFixed(2)}</div>
      </div>
      </>
    )}
    <button className='sendOrder' onClick={createOrder}>Send Order to Kitchen</button>
    </aside>
  )
}

export default SidebarBreakfast