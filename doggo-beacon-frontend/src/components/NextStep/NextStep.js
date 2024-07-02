import "./NextStep.scss";
import Lottie from "react-lottie";
import PetStore from "../../lotties/Animation - NextStep.json";
import siteLogo from "../../assets/logo/Logo.jpeg";
import animationData from "../../lotties/Animation - PAW.json";
import MapComponent from "../MapComponent";

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
      <hr />
      <div className="App--Main">
        <div className="App--Main__text">
          <h2>Training And Behaviour Tips For Dog Parents</h2>
          <p>
            Welcoming a new dog is such a fun, exciting time. But it can also be
            challenging, Dogs thrive on routine and consistency. Establish a
            regular schedule for feeding, walks, playtime, and bedtime. This
            helps your dog feel secure and understand what to expect each day.
            Consistent routines also aid in house training and behavior
            management.
          </p>
          <p>
            Use positive reinforcement techniques to train your dog. Reward good
            behavior with treats, praise, or playtime, and avoid
            punishment-based methods. Positive reinforcement helps build a
            strong bond with your dog and encourages them to repeat desired
            behaviors.
          </p>
          <p>
            Early socialization is crucial for your dog's development. Expose
            your dog to different people, environments, and other dogs in a
            controlled and positive manner. Regular exercise is also essential
            for your dog's physical and mental well-being. Daily walks,
            playtime, and interactive toys can help keep your dog happy and
            healthy.
          </p>
        </div>
        <div className="App--Main__map">
          <h2>Nearby PetStore</h2>
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
