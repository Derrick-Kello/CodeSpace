import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC1RsI24zdZxxUsB_bCck4li7w3EN05Bzg",
    authDomain: "codespace-43113.firebaseapp.com",
    projectId: "codespace-43113",
    storageBucket: "codespace-43113.firebasestorage.app",
    messagingSenderId: "446107643695",
    appId: "1:446107643695:web:bb173dba45a2c1d86cbbda"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
