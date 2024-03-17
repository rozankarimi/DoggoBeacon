import "./Questionnaire.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      order: 0,
      question: "Where will your new dog live?",
      answers: ["APARTMENT", "HOUSE"],
      image: [
        "../../assets/images/Apartment.jpeg",
        "../../assets/images/House.jpeg",
        "",
      ],
    },
    {
      order: 1,
      question: "How much will your dog be able to play with you?",
      answers: ["ONLY INDOOR PLAY", "SHORT WALK", "OCCASIONAL LONG WALK"],
      image: [
        "../../assets/images/indoor.jpeg",
        "../../assets/images/Walk2.jpeg",
      ],
    },
    {
      order: 2,
      question: "How much time will your new dog be alone?",
      answers: [" < 1 HOUR", "4 HOURS", " > 8 HOURS"],
      image: [
        "../../assets/images/Less than an hour.png",
        "../../assets/images/4.jpeg",
        "../../assets/images/8.jpeg",
      ],
    },
    {
      order: 3,
      question: "Is Shedding OK?",
      answers: ["YES", "NO"],
      image: ["../../assets/images/Shedding.jpeg"],
    },
    {
      order: 4,
      question: "How much training will your new dog recieve?",
      answers: ["NONE", "BASIC", "ADVANCED"],
      image: [
        "../../assets/images/HellNo.png",
        "../../assets/images/basic.png",
        "../../assets/images/Advancedtraining.png",
      ],
    },
    {
      order: 5,
      question: "How often are you willing to groom the Dog?",
      answers: ["DAILY", "WEEKLY", "OCCASIONALLY"],
      image: ["../../assets/images/Hairbrush and scissors icon.jpeg"],
    },
    {
      order: 6,
      question: "How big or small your new dog be?",
      answers: ["20 LBS OR UNDER  ", "20-50 LBS ", "50 LBS OR MORE"],
      image: ["../../assets/images/Wiegth.jpeg"],
    },
    {
      order: 7,
      question: "How much barking can you tolerate?",
      answers: ["NONE", "SOME BARKING IS OK ", "BARKING IS NOT AN ISSUE  "],
      image: ["../../assets/images/Bark2.jpeg"],
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
        <div>
          <img
            src={currentQuestion.image[0]}
            className="logoImage"
            alt="questionPic"
          />
          <p>{currentQuestion.answers[0]}</p>
        </div>
        <div>
          <img
            src={currentQuestion.image[1]}
            className="logoImage"
            alt="questionPic"
          />
          <p>{currentQuestion.answers[1]}</p>
        </div>
        <div>
          <img
            src={currentQuestion.image[2]}
            className="logoImage"
            alt="questionPic"
          />
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
