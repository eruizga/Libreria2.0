import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

import FirebaseConfiguration from "./FirebaseConfiguration";

// Initialize Firebase
const app = initializeApp(FirebaseConfiguration);

const FirebaseDB = getFirestore(app);

export default FirebaseDB;