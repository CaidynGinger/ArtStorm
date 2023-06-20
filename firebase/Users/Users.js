import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseAuth";
import { CreateUserCollection } from "./userCollectionService";

// export const createUserWithEmailAndPassword => (auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const createUser = async (email, password, username) => {
  console.log("creating user");
  await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
    console.log(err)
  );
  await updateProfile(auth.currentUser, { displayName: username }).catch(
    (err) => console.log(err)
  );
  console.log(auth.currentUser.uid);
  await CreateUserCollection(auth.currentUser.uid).catch((err) =>
    console.log(err)
  );
  console.log("created user");
  return auth.currentUser;
};

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password).catch((err) =>
    console.log(err)
  );
  return auth.currentUser;
};

export const signOutUser = async () => {
  await auth.signOut().catch((err) => console.log(err));
};
