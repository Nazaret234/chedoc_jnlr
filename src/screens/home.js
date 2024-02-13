import styles from "@/css/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <a>
          <button className={styles.button}>Movies</button>
        </a>
        <a>
          <button className={styles.button}>Series</button>
        </a>
      </div>
    </>
  );
}
