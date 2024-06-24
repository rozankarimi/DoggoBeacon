import "./NextStep.scss";
import Lottie from "react-lottie";
import PetStore from "../../lotties/Animation - NextStep.json";
import siteLogo from "../../assets/logo/Logo.jpeg";
import animationData from "../../lotties/Animation - PAW.json";

export default function App() {
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
    animationData: PetStore,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
      <div>
        <Lottie options={defaultOptions2} height={500} width={800} />
      </div>
    </div>
  );
}
