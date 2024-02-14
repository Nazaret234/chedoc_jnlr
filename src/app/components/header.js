import styles from "@/app/css/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Link
          href="/screens/home"
          style={{ color: "inherit", textDecoration: "none", marginLeft: "2%" }}
        >
          <h1>NazaCinema</h1>
        </Link>
        <div>
          <h3>Login</h3>
          <h3>Start you free trial</h3>
        </div>
      </div>
      <div className={styles.boxBlack}>
        <h2>Popular Titles</h2>
      </div>
    </>
  );
}
