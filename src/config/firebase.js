// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV7qPIpVdB1sbpd7tnl7ZoZMeEX1wAwLw",
    authDomain: "js09-e6f62.firebaseapp.com",
    projectId: "js09-e6f62",
    storageBucket: "js09-e6f62.appspot.com",
    messagingSenderId: "230239778211",
    appId: "1:230239778211:web:b1737c806e98d231ee5616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)