import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC-ns1tX3xyKgDDVFV61HXHyVY6Xw60TN4",
  authDomain: "art-storm-cedbd.firebaseapp.com",
  projectId: "art-storm-cedbd",
  storageBucket: "art-storm-cedbd.appspot.com",
  messagingSenderId: "657784455041",
  appId: "1:657784455041:web:de04d76d08f51e2ca93280",
});
export const app = initializeApp(firebaseApp);
export const db = getFirestore(app);
export const auth = getAuth(app);

// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
