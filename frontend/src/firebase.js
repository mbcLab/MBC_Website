import {
  GoogleAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAy7_9hYIJqnEhu0wRwjQ9k9lTIu024sJQ",
  authDomain: "website-c8177.firebaseapp.com",
  projectId: "website-c8177",
  storageBucket: "website-c8177.appspot.com",
  messagingSenderId: "795164772274",
  appId: "1:795164772274:web:4b3625f0cd3203267fc6ab",
  measurementId: "G-R6997RZPZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
