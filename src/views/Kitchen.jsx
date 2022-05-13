import SmallLogo from "../components/SmallLogo.jsx";
import { Link } from "react-router-dom";
import { db } from "../firebase - config.js";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Kitchen() {
  const [orders, setOrders] = useState([]);
  const ordersCollectionRef = collection(db, "orders");
  useEffect(() => {
    const getOrders = async () => {
      const data = await getDocs(ordersCollectionRef);
      console.log(data);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getOrders();
  }, []);
  console.log(orders);
  return (
    <div>
      <header className="menuUp">
        <SmallLogo />
        <h1 className="menuKitchen">Kitchen</h1>
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
                <button type="button" className="btnReady">
                  Ready to serve
                </button>
              </div>
            );
          })}
      </div>

      <Link to="/" className="back">
        Return
      </Link>
    </div>
  );
}
