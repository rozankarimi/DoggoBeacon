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
import axios from "axios";

function Questionnaire() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      order: 0,
      category: "height",
      question: "Where will your new dog live?",
      answers: ["APARTMENT", "HOUSE"],
      image: [Apartment, House],
    },
    {
      order: 1,
      category: "playfulness",
      question: "How much will your dog be able to play with you?",
      answers: ["ONLY INDOOR PLAY", "SHORT WALK", "OCCASIONAL LONG WALK"],
      image: [indoor, Walk],
    },
    {
      order: 2,
      category: "energy",
      question: "How much time will your new dog be alone?",
      answers: [" < 1 HOUR", "4 HOURS", " > 8 HOURS"],
      image: [lessHour, fourhour, eighthour],
    },
    {
      order: 3,
      category: "shedding",
      question: "Is Shedding OK?",
      answers: ["YES", "NO"],
      image: [shed],
    },
    {
      order: 4,
      category: "training",
      question: "How much training will your new dog recieve?",
      answers: ["NONE", "BASIC", "ADVANCED"],
      image: [HellNo, basic, advance],
    },
    {
      order: 5,
      category: "grooming",
      question: "How often are you willing to groom the Dog?",
      answers: ["DAILY", "WEEKLY", "OCCASIONALLY"],
      image: [grooming],
    },
    {
      order: 6,
      category: "weight",
      question: "How big or small your new dog be?",
      answers: ["20 LBS OR UNDER  ", "20-50 LBS ", "50 LBS OR MORE"],
      image: [weight],
    },
    {
      order: 7,
      category: "bark",
      question: "How much barking can you tolerate?", //key
      answers: ["NONE", "SOME BARKING IS OK ", "BARKING IS NOT AN ISSUE  "], //value
      image: [bark],
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  const handleAnswerClick = (answer) => {
    const questionCategory = questions[currentQuestionIndex].category; // match to category

    setUserResponses({ ...userResponses, [questionCategory]: answer });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      sendToBackendAndNavigate();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const sendToBackendAndNavigate = async () => {
    try {
      // Send userResponses to the backend for comparison with the database
      const response = await axios.post(
        "http://localhost:8080/compare",
        userResponses
      );
      console.log(response.data.matchedCategories);
      // Navigate to the result page based on the backend response
      if (response.data.matchedCategories.length > 0) {
        navigate(
          `/result`
          // `/result?name=${response.data.matchedCategories[0].name}&image=${response.data.matchedCategories[0].image}`
        );
      } else {
        console.log("User responses don't match database.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="hero__box">
      <h4>{currentQuestion.question}</h4>
      <div className="hero__box--questioner">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="answer-container">
            {currentQuestion.image[index] && (
              <img
                src={currentQuestion.image[index]}
                className="question-image"
                alt={`Answer ${index + 1}`}
              />
            )}
            <p>{answer}</p>
            <button onClick={() => handleAnswerClick(answer)}>Select</button>
          </div>
        ))}
      </div>
      <button onClick={nextQuestion} className="button">
        NEXT
      </button>
    </div>
  );
}

export default Questionnaire;
