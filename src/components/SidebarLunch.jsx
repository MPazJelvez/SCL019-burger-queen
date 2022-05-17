import { useState } from "react";
import { db } from "../firebase - config.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const SidebarLunch = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const [newName, setNewName] = useState("");
  const userCollectionRef = collection(db, "orders");

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const tip = itemsPrice * 0.1;
  const totalPrice = itemsPrice + tip;

  const createOrder = async () => {
    console.log("creado");
    await addDoc(userCollectionRef, {
      Customer: newName,
      Order: cartItems,
      status: "Pending",
      created: Timestamp.fromDate(new Date()),
    });
    console.log();
    const MySwal = withReactContent(Swal);

    await MySwal.fire({
      title: <strong>Good job!</strong>,
      html: <i>Order sent to Kitchen!!</i>,
      icon: "success",
    });
  };

  return (
    <aside className="col-1">
      <input
        type="text"
        placeholder="Customer's name"
        className="customer"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <h2 className="order">Order:</h2>
      <div className="containerOrderWaiter">
        <div>{cartItems.length === 0 && <div className="cartEmpty"> Cart is Empty </div>}</div>
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
      </div>
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
            <div className="col-2 cartTotal">
              <strong>Total</strong>
            </div>
            <div className="col-1 text-right cartTotal">
              $ {totalPrice.toFixed(2)}
            </div>
          </div>
          <br />
          <br />
        </>
      )}
      <div className="sendOrderContainer">
        <button className="sendOrder" onClick={createOrder}>
          Send Order to Kitchen
        </button>
      </div>
    </aside>
  );
};

export default SidebarLunch;
