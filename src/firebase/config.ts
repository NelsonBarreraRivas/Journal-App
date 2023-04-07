// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDatabase = getFirestore(FirebaseApp)


export const firebaseAuthErrorCodes: { [key: string]: string } = {
    'auth/invalid-email': 'Firebase: Error (Correo electrónico inválido)',
    'auth/wrong-password': 'Firebase: Error (Contraseña incorrecta)',
    'auth/user-not-found': 'Firebase: Error (Usuario no encontrado)',
    'auth/email-already-in-use': 'Firebase: Error (Correo electrónico en uso)',
    'auth/weak-password': 'Firebase: Error (Contraseña débil)',
    'auth/account-exists-with-different-credential': 'Firebase: Error (Cuenta existe con otra credencial)',
    'auth/credential-already-in-use': 'Firebase: Error (Credencial ya en uso)',
    'auth/network-request-failed': 'Firebase: Error (Error de red)',
    'auth/claims-too-large': 'Los atributos personalizados exceden el tamaño máximo permitido.',
    'auth/email-already-exists': 'La dirección de correo electrónico ya está siendo utilizada por otra cuenta.',
    'auth/id-token-expired': 'El token de ID proporcionado ha expirado.',
    'auth/id-token-revoked': 'El token de ID proporcionado ha sido revocado.',
    'auth/insufficient-permission': 'Credenciales insuficientes para acceder a la solicitud.',
    'auth/internal-error': 'Un error interno ha ocurrido.',
    'auth/invalid-argument': 'Argumento no válido proporcionado para una función.',
    'auth/invalid-claims': 'Los atributos personalizados proporcionados no son válidos.',
    'auth/invalid-continue-uri': 'La dirección URL de redirección proporcionada en la solicitud no es válida.',
    'auth/invalid-creation-time': 'La hora de creación de la cuenta no es válida.',
};
