import styles from "@/app/css/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Link href="/screens/multimedia?element=movies">
          <button className={styles.button}>Movies</button>
        </Link>
        <Link href="/screens/multimedia?element=series">
          <button className={styles.button}>Series</button>
        </Link>
      </div>
    </>
  );
}
