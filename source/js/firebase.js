// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjP79cSwQt1pxDrSRlqA8tBV07-FONn0M",
  authDomain: "lubemastock.firebaseapp.com",
  projectId: "lubemastock",
  storageBucket: "lubemastock.firebasestorage.app",
  messagingSenderId: "144232205598",
  appId: "1:144232205598:web:dcd1f461720b55c2478d0f"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Exporta `auth` para ser usado no registro
export { auth };
