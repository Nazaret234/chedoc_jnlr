import styles from "@/css/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1>NazaCinema</h1>
        <div>
          <button className={styles.buttont}>Login</button>
          <button className={styles.button}>Start you free trial</button>
        </div>
      </div>
      <div className={styles.boxBlack}>
        <h2>Popular Titles</h2>
      </div>
    </>
  );
}
