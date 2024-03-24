import "./ResultPage.scss";
import Result from "../../components/Result/Result";
import Footer from "../../components/Footer/Footer";
import React from "react";

export default function ResultPage({ completed, setCompleted }) {
  return (
    <div>
      <Result completed={completed} setCompleted={setCompleted} />
      <Footer />
    </div>
  );
}
