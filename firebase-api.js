import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyD0cYYncFHIOLOxZaUmlOHCbZqE3hYjz5E",
  authDomain: "geniusgame-8c472.firebaseapp.com",
  projectId: "geniusgame-8c472",
  storageBucket: "geniusgame-8c472.appspot.com",
  messagingSenderId: "217218175562",
  appId: "1:217218175562:web:af265fb840f4f5cfa44cb3",
  measurementId: "G-6J5LL4ENVV",
  databaseURL: "https://geniusgame-8c472-default-rtdb.firebaseio.com/:null",

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase();

export default firebaseConfig;
