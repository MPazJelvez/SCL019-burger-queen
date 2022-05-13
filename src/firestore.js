// import { db } from './firestoreConfiguration.js';
// import { collection, getDocs, getDoc, doc, addDoc, onSnapshot, deleteDoc, updateDoc, orderBy, Timestamp } from "firebase/firestore"

// const ordersData = collection(db, 'orders');

// export const createOrder = async (cart, nameClient) => {
//     try {
//         console.log('create Order');

//         console.log(cartItems, nameClient);
//         const docRef = await addDoc(ordersData, {
//             Order: cart,
//             nameClient: nameClient || null,
//             status: 'pendiente',
//             orderDate: Timestamp.fromFate(new Date())
//         });
//         console.log('done', docRef.id);
//         } catch (e) {
//             console.log('error', e);
//         }
// }

