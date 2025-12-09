// Reemplaza los siguientes valores con tu propia configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROJECT_ID.firebaseapp.com",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_PROJECT_ID.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Exporta los servicios que usarás
const auth = firebase.auth();
const db = firebase.firestore();

// *Asegúrate de agregar este archivo DESPUÉS de los scripts de Firebase SDK en tu HTML:*
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-firestore.js"></script>
// <script src="/js/firebase_config.js"></script>
