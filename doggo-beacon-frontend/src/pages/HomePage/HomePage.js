import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import React from "react";

export default function HomePage({ compelted, setCompelted }) {
  return (
    <div>
      <Header />
      <Questionnaire compelted={compelted} setCompelted={setCompelted} />
      <Footer />
    </div>
  );
}
