"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import styles from "@/css/page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/screens/home";
import Multi from "@/screens/multi";
import { Provider } from 'react-redux';
import store from "@/redux/store";

export default function page() {
  return (
    <>
    <Provider store={store}>
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
      </Provider>
    </>
  );
}
