import "./ResultPage.scss";
import Result from "../../components/Result/Result";
import Footer from "../../components/Footer/Footer";
import React from "react";

export default function ResultPage({ compelted, setCompelted }) {
  return (
    <div>
      <Result compelted={compelted} setCompelted={setCompelted} />
      <Footer />
    </div>
  );
}
