import Home from "@/app/components/home";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import styles from "@/app/css/page.module.css";

export default function Inicio() {
  return (
    <>
      <body className={styles.body}>
        <div>
          <Header />
        </div>
        <Home />
        <Footer />
      </body>
    </>
  );
}
