import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Questionnaire from "../../components/Questionnaire/Questionnaire";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Questionnaire />
      <Footer />
    </div>
  );
}
