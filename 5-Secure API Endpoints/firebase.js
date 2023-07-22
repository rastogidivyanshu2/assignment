
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCb9MNoYdBVADUmyg2eNOxeea7vHRen-3I",
  authDomain: "chat-db185.firebaseapp.com",
  projectId: "chat-db185",
  storageBucket: "chat-db185.appspot.com",
  messagingSenderId: "60300313065",
  appId: "1:60300313065:web:cce978b97a85f123b1cb78"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();