import Image from "next/image";
import styles from "./page.module.css";

export default function header() {
 return (
  <body className={styles.body}>
    <div className={styles.container}>
      <h1>Demo Streaming</h1>
      <div>
        <button className={styles.buttont}>Login</button>
        <button className={styles.button}>Start you free trial</button>
      </div>
    </div>
    <div className={styles.boxBlack}>
      <h2>
        Popular Titles
      </h2>
    </div>
  </body>
  );
}
