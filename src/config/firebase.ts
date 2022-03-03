import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_STORAGE_BUCKET,
    appId: process.env.FIREBASE_STORAGE_BUCKET,
    measurementId: process.env.FIREBASE_STORAGE_BUCKET,
};

export const firebaseApp = initializeApp(firebaseConfig);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _analytics = getAnalytics(firebaseApp);
