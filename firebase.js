// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs, onSnapshot, doc, deleteDoc     
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDujIHGOg_4JPs6_58I_DgQMNAm5JSBw2Q",
  authDomain: "despesappcurs.firebaseapp.com",
  projectId: "despesappcurs",
  storageBucket: "despesappcurs.firebasestorage.app",
  messagingSenderId: "461147858876",
  appId: "1:461147858876:web:d03432acdb7ad01ad66db9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveDespesa = async (despesa) => {
  console.log(despesa);
  const docRef = await addDoc(collection(db, "despeses"), despesa);

  return docRef.id;   
}

export const getDespeses = () => 
  getDocs(collection(db, "despeses"));

export const onGetDespeses = (callback) =>
  onSnapshot(collection(db, "despeses"), callback);

export const deleteDespesa = async (id) => {
  deleteDoc(doc(db, "despeses", id));
  // try {
  //   await delete(doc(db, "despeses", id));
  //   console.log("Despesa eliminada amb ID: ", id);
  // } catch (error){
  //   console.error("Error eliminant despesa; ", error);
  // }
}
