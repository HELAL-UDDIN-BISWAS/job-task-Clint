// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBynaIJapHlILnoZikntLcuVClPdrRDPqg",
  authDomain: "jobs-task.firebaseapp.com",
  projectId: "jobs-task",
  storageBucket: "jobs-task.appspot.com",
  messagingSenderId: "100337312452",
  appId: "1:100337312452:web:25a59452719bc012e41f91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;