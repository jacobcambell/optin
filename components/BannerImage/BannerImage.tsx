import React from "react";
import Image from "next/image";
import styles from "./BannerImage.module.scss";

export default function BannerImage() {
  return (
    <div className={styles.image}>
      <Image src={"/tesla.png"} width={1200} height={537} alt={""}></Image>
    </div>
  );
}
