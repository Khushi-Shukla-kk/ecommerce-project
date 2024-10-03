// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this line
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN9hrBxBae2wJ0hpKxOn48q2C87Wr7gzI",
  authDomain: "ecommerce-e19e2.firebaseapp.com",
  projectId: "ecommerce-e19e2",
  storageBucket: "ecommerce-e19e2.appspot.com",
  messagingSenderId: "141499718108",
  appId: "1:141499718108:web:a1f735babe4eada0695719",
  measurementId: "G-9J4CYM8HYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { auth }; // Export auth for use in other files
