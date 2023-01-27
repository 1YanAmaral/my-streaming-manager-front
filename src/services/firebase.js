import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9_FIJOM5guH5YcDK_Y76D9hLy5BNnBMg",
  authDomain: "my-streaming-manager.firebaseapp.com",
  projectId: "my-streaming-manager",
  storageBucket: "my-streaming-manager.appspot.com",
  messagingSenderId: "799531635021",
  appId: "1:799531635021:web:66ef01700812d2cb2be704",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
