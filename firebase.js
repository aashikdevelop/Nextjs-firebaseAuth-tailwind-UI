// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFynrQQ0w9sAANloP8HfpA2J4vf0kaJrs",
  authDomain: "tailwind-ui-demo-c0471.firebaseapp.com",
  projectId: "tailwind-ui-demo-c0471",
  storageBucket: "tailwind-ui-demo-c0471.appspot.com",
  messagingSenderId: "768094200591",
  appId: "1:768094200591:web:d9fedabbfa563aa0a9947a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
