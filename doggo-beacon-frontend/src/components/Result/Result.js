import "./Result.scss";
import Lottie from "react-lottie";
import siteLogo from "../../assets/logo/Logo.jpeg";
import animationData from "../../lotties/Animation - PAW.json";
import animationData2 from "../../lotties/Animation -Slipper.json";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Result({ completed, setCompleted }) {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    async function fetchRandomDogFact() {
      try {
        const randomIndex = Math.floor(Math.random() * 21);
        const response = await axios.get("http://localhost:8080/result");
        // console.log(response);
        setRandomFact(response.data[randomIndex].description);
      } catch (error) {
        console.error("Error fetching random dog fact:", error);
      }
    }

    fetchRandomDogFact();
  }, []);

  const [matchedCategories, setMatchedCategories] = useState([]);
  const extractedData = matchedCategories.map(({ name, image_link }) => ({
    name,
    image_link,
  }));

  useEffect(() => {
    // Make an API call to fetch matched categories from the backend
    const fetchMatchedCategories = async () => {
      try {
        const response = await axios.post("http://localhost:8080/compare");
        // Extract matched categories from the response data
        const categories = response.data.matchedCategories;
        setMatchedCategories(categories);
      } catch (error) {
        console.error("Error fetching matched categories:", error);
      }
    };

    fetchMatchedCategories();
  }, []); // Empty dependency array ensures useEffect only runs once after component mounts
  function compeletedQ() {
    navigate("/");
    setCompleted(false);
    setMatchedCategories([]);
  }
  return (
    <div>
      <div className="App--header">
        <div className="App--header__logo">
          <img className="logoImageHeader" src={siteLogo} alt="siteLog" />
        </div>
        <div className="App--header__text">
          <h1>Doggo Beacon</h1>
        </div>
        <div className="lottie-container">
          <Lottie
            options={defaultOptions}
            height={90}
            width={90}
            className="lottie-animation"
          />
        </div>
      </div>
      <div className="App--hero">
        <div style={{ paddingLeft: "80px" }} className="lottie-container2">
          <Lottie
            options={defaultOptions2}
            height={300}
            width={350}
            className="lottie-animation2"
          />
        </div>
      </div>
      <div className="App--main">
        <h3>Here is your Breed Matches:</h3>
        {/* {matchedCategories.map((name, image_link) => (
          <div>
            <h2>{name}</h2>
            <img className="App--main__resultPic" src={image_link} alt={name} />
          </div>
        ))} */}
        {extractedData.map((name, image_link) => (
          <div>
            <h2>{name}</h2>
            <img className="App--main__resultPic" src={image_link} alt={name} />
          </div>
        ))}
        {/* 
        {matchedCategories.map((row, index) => (
          <div key={index}>
            <h2>{row.name}</h2>
            <img
              className="App--main__resultPic"
              src={row.image}
              alt={row.name}
            />
          </div>
        ))} */}
      </div>
      <div className="App--main">
        <h4>DOG FACT</h4>
        <p>{randomFact}</p>
      </div>

      <button onClick={() => compeletedQ()} className="button">
        DONE
      </button>
    </div>
  );
}
export default Result;
