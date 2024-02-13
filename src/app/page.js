"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/css/page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/screens/home";
import Multi from "@/screens/multi";

export default function page() {
  return (
    <>
      <BrowserRouter>
        <body className={styles.body}>
          <div>
            <Header />
          </div>
          <Routes>
            <Route path="/sd" element={<Home />} />
            <Route path="/" element={<Multi />} />
          </Routes>
          <Footer />
        </body>
      </BrowserRouter>
    </>
  );
}
