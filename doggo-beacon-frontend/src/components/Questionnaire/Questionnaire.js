import "./Questionnaire.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Apartment from "../../assets/images/Apartment.jpeg";
import House from "../../assets/images/House.jpeg";
import indoor from "../../assets/images/Indoor.png";
import Walk from "../../assets/images/Walk2.jpeg";
import longWalk from "../../assets/images/LongWalk.jpeg";
import lessHour from "../../assets/images/hour.jpg";
import fourhour from "../../assets/images/4.jpeg";
import eighthour from "../../assets/images/8.jpeg";
import shedNo from "../../assets/images/Shedding.jpeg";
import shedYes from "../../assets/images/SheddingYes.jpeg";
import HellNo from "../../assets/images/HellNo.png";
import basic from "../../assets/images/basic.png";
import advance from "../../assets/images/Advancedtraining.png";
import grooming from "../../assets/images/Hairbrush and scissors icon.jpeg";
import weight1 from "../../assets/images/20LBS.jpeg";
import weight2 from "../../assets/images/20-50.jpeg";
import weight3 from "../../assets/images/50LBS.jpeg";
import barkNone from "../../assets/images/BarkNone.jpeg";
import medBark from "../../assets/images/MedBark.jpeg";
import highBark from "../../assets/images/HighBark.jpeg";
import axios from "axios";

function Questionnaire({ completed, setCompleted }) {
  const navigate = useNavigate();
  const [questions] = useState([
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
      image: [indoor, Walk, longWalk],
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
      image: [shedYes, shedNo],
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
      image: [grooming, grooming, grooming],
    },
    {
      order: 6,
      category: "weight",
      question: "How big or small your new dog be?",
      answers: ["20 LBS OR UNDER  ", "20-50 LBS ", "50 LBS OR MORE"],
      image: [weight1, weight2, weight3],
    },
    {
      order: 7,
      category: "bark",
      question: "How much barking can you tolerate?", //key
      answers: ["NONE", "SOME BARKING IS OK ", "BARKING IS NOT AN ISSUE  "], //value
      image: [barkNone, medBark, highBark],
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});

  const handleAnswerClick = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const questionCategory = currentQuestion.category;
    // const questionCategory = questions[currentQuestionIndex].category; // match to category

    // setUserResponses({ ...userResponses, [questionCategory]: answer });
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [questionCategory]: answer,
    }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      sendToBackendAndNavigate(userResponses);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const sendToBackendAndNavigate = async (userResponses) => {
    try {
      // Send userResponses to the backend for comparison with the database
      const response = await axios.post(
        "http://localhost:8080/compare",
        userResponses
      );
      console.log(response.data);

      console.log(response.data.matchedCategories);
      // Navigate to the result page based on the backend response
      if (
        response.data.matchedCategories &&
        response.data.matchedCategories.length > 0
      ) {
        setCompleted(true);
        navigate("/result", {
          state: { matchedCategories: response.data.matchedCategories },
        });
      } else {
        console.log("User responses don't match database.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const currentQuestion =
    questions.length > 0 ? questions[currentQuestionIndex] : null;
  if (!currentQuestion) {
    return null; // Or any other rendering for when there are no questions
  }

  return (
    <div className="hero__box">
      <h4>{currentQuestion.question}</h4>
      <div className="hero__box--questioner">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className={"answer-container"}>
            {currentQuestion.image[index] && (
              <img
                src={currentQuestion.image[index]}
                className="question-image"
                alt={`Answer ${index + 1}`}
              />
            )}
            <button
              onClick={() => handleAnswerClick(answer)}
              className="answer-button"
            >
              {answer}
            </button>
          </div>
        ))}
      </div>
      <div className="button--box">
        <button onClick={nextQuestion} className="button">
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Questionnaire;
