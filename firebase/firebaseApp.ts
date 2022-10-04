import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCJ--U-jcm5XOhjnVud5KhnJXlyzZXSUxg",
  authDomain: "project-management-poc-36d18.firebaseapp.com",
  projectId: "project-management-poc-36d18",
  storageBucket: "project-management-poc-36d18.appspot.com",
  messagingSenderId: "528610827356",
  appId: "1:528610827356:web:3976a660e8e86cfa895a99",
  measurementId: "G-PGXS9NJ4KD"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => {
    return app;
}