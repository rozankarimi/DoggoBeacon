import "./NextStepPage.scss";
import NextStep from "../../components/NextStep/NextStep";
import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
import React from "react";

export default function NextPage({ completed, setCompleted }) {
  return (
    <div>
      {/* <Header /> */}
      <NextStep completed={completed} setCompleted={setCompleted} />
      <Footer />
    </div>
  );
}
