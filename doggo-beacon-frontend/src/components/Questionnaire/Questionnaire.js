import "./Questionnaire.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Apartment from "../../assets/images/Apartment.jpeg";
import House from "../../assets/images/House.jpeg";
import indoor from "../../assets/images/Indoor.png";
import Walk from "../../assets/images/Walk2.jpeg";
import lessHour from "../../assets/images/Less than an hour.png";
import fourhour from "../../assets/images/4.jpeg";
import eighthour from "../../assets/images/8.jpeg";
import shed from "../../assets/images/Shedding.jpeg";
import HellNo from "../../assets/images/HellNo.png";
import basic from "../../assets/images/basic.png";
import advance from "../../assets/images/Advancedtraining.png";
import grooming from "../../assets/images/Hairbrush and scissors icon.jpeg";
import weight from "../../assets/images/Wiegth.jpeg";
import bark from "../../assets/images/Bark2.jpeg";

function Questionnaire() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      order: 0,
      question: "Where will your new dog live?",
      answers: ["APARTMENT", "HOUSE"],
      image: [Apartment, House],
    },
    {
      order: 1,
      question: "How much will your dog be able to play with you?",
      answers: ["ONLY INDOOR PLAY", "SHORT WALK", "OCCASIONAL LONG WALK"],
      image: [indoor, Walk],
    },
    {
      order: 2,
      question: "How much time will your new dog be alone?",
      answers: [" < 1 HOUR", "4 HOURS", " > 8 HOURS"],
      image: [lessHour, fourhour, eighthour],
    },
    {
      order: 3,
      question: "Is Shedding OK?",
      answers: ["YES", "NO"],
      image: [shed],
    },
    {
      order: 4,
      question: "How much training will your new dog recieve?",
      answers: ["NONE", "BASIC", "ADVANCED"],
      image: [HellNo, basic, advance],
    },
    {
      order: 5,
      question: "How often are you willing to groom the Dog?",
      answers: ["DAILY", "WEEKLY", "OCCASIONALLY"],
      image: [grooming],
    },
    {
      order: 6,
      question: "How big or small your new dog be?",
      answers: ["20 LBS OR UNDER  ", "20-50 LBS ", "50 LBS OR MORE"],
      image: [weight],
    },
    {
      order: 7,
      question: "How much barking can you tolerate?",
      answers: ["NONE", "SOME BARKING IS OK ", "BARKING IS NOT AN ISSUE  "],
      image: [bark],
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  function nextQuestion() {
    console.log(currentQuestion.order, questions.length - 1);
    if (currentQuestion.order == questions.length - 1) {
      navigate("/result");
    } else {
      setCurrentQuestion(questions[currentQuestion.order + 1]);
    }
  }
  return (
    <div className="hero__box">
      <h4>{currentQuestion.question}</h4>
      <div className="hero__box--questioner">
        <div className="answer-container">
          <img
            src={currentQuestion.image[0]}
            className="question-image"
            alt="questionPic"
          />
          <p>{currentQuestion.answers[0]}</p>
        </div>

        <div className="answer-container">
          {currentQuestion.image[1] && (
            <img
              src={currentQuestion.image[1]}
              className="question-image"
              alt="questionPic"
            />
          )}
          <p>{currentQuestion.answers[1]}</p>
        </div>

        <div className="answer-container">
          {currentQuestion.image[2] && (
            <img
              src={currentQuestion.image[2]}
              className="question-image"
              alt="questionPic"
            />
          )}
          <p>{currentQuestion.answers[2]}</p>
        </div>
      </div>
      <button onClick={nextQuestion} className="button">
        NEXT
      </button>
    </div>
  );
}

export default Questionnaire;
