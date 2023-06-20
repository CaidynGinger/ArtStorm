import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebaseAuth";

export const CreateUserCollection = async (uid) => {
  try {
    const docRef = await setDoc(doc(db, "Users", JSON.stringify(uid)), {
      Competitions: [],
      Submissions: [],
      Judge: true,
    });
    // console.log("Document written with ID: ", docRef)
  } catch (error) {
    console.log("error" + error);
  }
};

export const GetUser = async (uid) => {
  const docRef = doc(db, "Users", JSON.stringify(uid));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return {};
  }

//   try {
//     console.log(docSnap.data());
//     console.log('data');
//     // return docSnap.data();
//     return {};
//   } catch (error) {
//     console.log("Error getting document:", error);
//   }
};
