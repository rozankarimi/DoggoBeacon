import "./Result.scss";
import Lottie from "react-lottie";
import siteLogo from "../../assets/logo/Logo.jpeg";
import animationData from "../../lotties/Animation - PAW.json";
import animationData2 from "../../lotties/Animation -Slipper.json";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";

function Result() {
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

  // useEffect(() => {
  //   fetchDogFacts();
  // });

  // async function fetchDogFacts() {
  //   try {
  //     const res = await axios.get("http://localhost:8080/result");
  //   } catch (error) {
  //     console.error("Failed to fetch inventories:", error);
  //   }
  // }

  return (
    <div>
      <div className="App--header">
        <div className="App--header__logo">
          <img className="logoImage" src={siteLogo} alt="siteLog" />
        </div>
        <div className="App--header__text">
          <h1>Doggo Beacon</h1>
        </div>
        <div>
          <Lottie options={defaultOptions} height={80} width={80} />
        </div>
      </div>
      <div className="App--hero">
        <div>
          <Lottie options={defaultOptions2} height={300} width={300} />
        </div>
      </div>
      <div className="App--main">
        <h3>Your Breed Results:</h3>
      </div>
      <div>
        <p>Dogg Fact</p>
      </div>

      <button onClick={() => navigate("/")} className="button">
        DONE
      </button>
    </div>
  );
}
export default Result;
