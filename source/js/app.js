import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Manipular o formulário de login
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login realizado com sucesso!');
      window.location.href = "./source/pages/home.html"; // Redireciona para a próxima página
    })
    .catch((error) => {
      alert('Erro no login: ' + error.message);
    });
});
