
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAudUqfF25C9n3Ofxdy268YRiS_GNFKbgA",
  authDomain: "proyecto-react-coder-9634e.firebaseapp.com",
  projectId: "proyecto-react-coder-9634e",
  storageBucket: "proyecto-react-coder-9634e.firebasestorage.app",
  messagingSenderId: "673640003822",
  appId: "1:673640003822:web:d865e87facf0ad83c81bff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
