import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBkgpGxNqprvwyE-I90MEeCyOvyPFHRpLA",
  authDomain: "rene-app-react-v1-d7773.firebaseapp.com",
  projectId: "rene-app-react-v1-d7773",
  storageBucket: "rene-app-react-v1-d7773.appspot.com",
  messagingSenderId: "959254981763",
  appId: "1:959254981763:web:eeac6879b72d6254eb3fb6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)