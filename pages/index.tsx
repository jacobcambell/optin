import React from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header";
import BannerImage from "../components/BannerImage/BannerImage";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <div className="my-3">
        <Header></Header>
      </div>

      <div className={styles.center}>
        <BannerImage></BannerImage>
        <Form />
      </div>
    </div>
  );
}
