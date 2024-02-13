import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/css/page.module.css";

export default function page() {
  return (
    <>
      <body className={styles.body}>
        <div className={styles.container}>
          <Header />
        </div>
        <Footer />
      </body>
    </>
  );
}
