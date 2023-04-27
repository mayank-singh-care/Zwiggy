import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
  // authDomain: "restaurantapp-c2ed6.firebaseapp.com",
  // databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
  // projectId: "restaurantapp-c2ed6",
  // storageBucket: "restaurantapp-c2ed6.appspot.com",
  // messagingSenderId: "174416156605",
  // appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",

  apiKey: "AIzaSyCgqwof1-EL01UYxXGqXixP_9Hhq0fl7fg",
  authDomain: "food-pipeline.firebaseapp.com",
  databaseURL: "https://food-pipeline-default-rtdb.firebaseio.com",
  projectId: "food-pipeline",
  storageBucket: "food-pipeline.appspot.com",
  messagingSenderId: "232615375009",
  appId: "1:232615375009:web:a59de946cbe4c6afcdc0e0",
  measurementId: "G-KW79KX79HX",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
