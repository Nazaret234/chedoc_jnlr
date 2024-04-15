"use client";
import Multi from "@/app/components/multi";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import { Provider } from "react-redux";
import store from "@/redux/store";
import styles from "@/app/css/page.module.css";
import { Suspense } from 'react'

export default function Multimedia() {
  return (
    <>
      <body className={styles.body}>
        <Provider store={store}>
          <div>
            <Header />
          </div>
          <Suspense>
            <Multi />
          </Suspense>
          <Footer />
        </Provider>
      </body>
    </>

  );
}
