import { log } from "react-native-reanimated";
import Competition from "../models/competition";
import { addDoc, collection } from "firebase/firestore";
import db from "./firebaseAuth";

const CreateCompetition = async (competition) => {
  console.log(competition);
//   try {
//     const docRef = await addDoc(collection(db, "Competitions"), {
//       Competition,
//     });
//     console.log("Document written with ID: ", docRef.id);
//     return docRef.id;
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     return error;
//   }
};

export default CreateCompetition;
