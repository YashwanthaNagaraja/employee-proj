import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD2Shmz87zVErYPhDAoOdizAzK5PEox2UI",
  authDomain: "testemp-a2cde.firebaseapp.com",
  projectId: "testemp-a2cde",
  storageBucket: "testemp-a2cde.appspot.com",
  messagingSenderId: "659238550192",
  appId: "1:659238550192:web:52c5e5b46553b14f459975"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let database = getFirestore(app);
export default database;
