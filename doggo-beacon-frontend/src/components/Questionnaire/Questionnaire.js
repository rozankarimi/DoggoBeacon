import "./Questionnaire.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for making HTTP requests

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
  const [answers, setAnswers] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    {
      order: 0,
      question: "Where will your new dog live?",
      answers: ["APARTMENT", "HOUSE"],
      images: [Apartment, House],
    },
    {
      order: 1,
      question: "How much will your dog be able to play with you?",
      answers: ["ONLY INDOOR PLAY", "SHORT WALK", "OCCASIONAL LONG WALK"],
      images: [indoor, Walk],
    },
    {
      order: 2,
      question: "How much time will your new dog be alone?",
      answers: [" < 1 HOUR", "4 HOURS", " > 8 HOURS"],
      images: [lessHour, fourhour, eighthour],
    },
    {
      order: 3,
      question: "Is Shedding OK?",
      answers: ["YES", "NO"],
      images: [shed],
    },
    {
      order: 4,
      question: "How much training will your new dog receive?",
      answers: ["NONE", "BASIC", "ADVANCED"],
      images: [HellNo, basic, advance],
    },
    {
      order: 5,
      question: "How often are you willing to groom the Dog?",
      answers: ["DAILY", "WEEKLY", "OCCASIONALLY"],
      images: [grooming],
    },
    {
      order: 6,
      question: "How big or small will your new dog be?",
      answers: ["20 LBS OR UNDER  ", "20-50 LBS ", "50 LBS OR MORE"],
      images: [weight],
    },
    {
      order: 7,
      question: "How much barking can you tolerate?",
      answers: ["NONE", "SOME BARKING IS OK ", "BARKING IS NOT AN ISSUE  "],
      images: [bark],
    },
  ];

  const handleOptionClick = (questionIndex, answerIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }));
    setSelectedImage(questions[questionIndex].images[answerIndex]);
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex === questions.length - 1) {
      // Send the user input data to the backend
      try {
        await axios.post("/http://localhost:8080/home", answers);
        // Navigate to the result page after successfully sending data
        navigate("/result");
      } catch (error) {
        console.error("Error sending data to the backend:", error);
        // Handle error
      }
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="hero__box">
      <h4>{currentQuestion.question}</h4>
      <div className="hero__box--questioner">
        {currentQuestion.answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(currentQuestion.order, index)}
          >
            <p>{answer}</p>
            {currentQuestion.images.length >= index + 1 && (
              <img
                src={currentQuestion.images[index]}
                className="logoImage"
                alt="questionPic"
              />
            )}
          </div>
        ))}
      </div>
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected option"
          className="selected-image"
        />
      )}
      <button onClick={handleNextQuestion} className="button">
        NEXT
      </button>
    </div>
  );
}

export default Questionnaire;
