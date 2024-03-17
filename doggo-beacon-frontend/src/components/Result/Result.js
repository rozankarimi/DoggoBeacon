import "./Result.scss";
import Lottie from "react-lottie";
import siteLogo from "../../assets/logo/Logo.jpeg";
import animationData from "../../lotties/Animation - PAW.json";
import animationData2 from "../../lotties/Animation -Slipper.json";

function Result() {
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
    </div>
  );
}
export default Result;
