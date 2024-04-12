import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCfgxiX98IpCJRkImCcO_7xQrXJhAegDPs",
  authDomain: "example-1f0af.firebaseapp.com",
  databaseURL: "https://example-1f0af-default-rtdb.firebaseio.com",
  projectId: "example-1f0af",
  storageBucket: "example-1f0af.appspot.com",
  messagingSenderId: "71204245174",
  appId: "1:71204245174:web:b635844a879e204af12017",
};

let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getDatabase(app);
export { db };
