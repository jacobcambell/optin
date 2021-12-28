import React from "react";
import Image from "next/image";

export default function BannerImage() {
  return (
    <div>
      <Image src={"/tesla.png"} width={1200} height={537} alt={""}></Image>
    </div>
  );
}
