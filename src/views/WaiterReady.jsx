import SmallLogo from "../components/SmallLogo.jsx";
import { Link } from "react-router-dom";
import { db } from "../firebase - config.js";
import { collection, updateDoc, doc, orderBy, onSnapshot, query } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Kitchen() {
  const [orders, setOrders] = useState([]);
  

  const updateOrder = async (id, status) => {
    const orderDoc = doc(db, "orders", id);
    const newFields = { status: "Delivered" };
    await updateDoc(orderDoc, newFields);
    console.log(newFields);
  };

  useEffect(() => {
    const ordersCollectionRef = collection(db, "orders");
    const q = query(ordersCollectionRef, orderBy("created", "desc"));
  
  const getOrders = onSnapshot(q,(snapshot) =>
  setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  );
  return getOrders
  }, []);

  // useEffect(() => {
  //   const getOrders = async () => {
  //     const data = await getDocs(ordersCollectionRef);
  //     console.log(data);
  //     setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getOrders();
  // }, []);
  console.log(orders);
  return (
    <div>
      <header className="menuUp">
        <SmallLogo />
        <h1 className="menuKitchen">Orders ready to serve</h1>
      </header>
      <div className="ordersContainer">
        {orders.length !== 0 &&
          orders.map((order) => {
            return (
              <div className="orderKitchen">
                <p> Customer: {order.Customer} </p>
                {order.Order.map((element) => {
                  return (
                    <ul>
                      {" "}
                      <li>
                        {element.qty} {element.name}
                      </li>
                    </ul>
                  );
                })}
                <p>Status: {order.status}</p>
                <button
                  type="button"
                  className="btnReady"
                  onClick={() => {
                    updateOrder(order.id, order.status);
                  }}
                >
                  Delivered
                </button>
              </div>
            );
          })}
      </div>
      <div className="back ready">    
      <Link to="/" className="returnbtn">
        Return
      </Link>
      </div>
    </div>
  );
}
