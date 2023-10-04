import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMvZpIXBtsTEgh-wEhPobUcl5GJcj5P30",
  authDomain: "linkedin-clone-e18c1.firebaseapp.com",
  projectId: "linkedin-clone-e18c1",
  storageBucket: "linkedin-clone-e18c1.appspot.com",
  messagingSenderId: "498202348541",
  appId: "1:498202348541:web:81dda24fb1ec49b7942794",
  measurementId: "G-YHDDR8DPY8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
