import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxNHvM-orxiv86FMd5P3QIF4aC5ft_ems",
  authDomain: "labmbc2023-e1f23.firebaseapp.com",
  projectId: "labmbc2023-e1f23",
  storageBucket: "labmbc2023-e1f23.appspot.com",
  messagingSenderId: "1001110107168",
  appId: "1:1001110107168:web:df552f3818bed38bd2f845",
  measurementId: "G-1JXSWTR1FX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
