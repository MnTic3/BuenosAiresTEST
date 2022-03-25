// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH3dB2kpKr2nw4rSlmXlwN81azkKDBxss",
  authDomain: "test-c9bdc.firebaseapp.com",
  projectId: "test-c9bdc",
  storageBucket: "test-c9bdc.appspot.com",
  messagingSenderId: "3173137684",
  appId: "1:3173137684:web:8bf884f77ce9fdb747d601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function viewAllDocs(nameDB) {
    try {
        const response = await getDocs(query(collection(db, nameDB)))
        const elements = response.docs.map((doc) => {
            console.log(doc);
            const documeto = {
                ...doc.data
            }
            return documeto
        })
        return elements
    } catch (error) {
        throw new Error(error.message)
    }
}