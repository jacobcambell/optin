import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import BannerImage from "../components/BannerImage/BannerImage";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <BannerImage></BannerImage>
      <Form />
    </div>
  );
}
