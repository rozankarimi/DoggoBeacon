import "./NextStep.scss";
import Lottie from "react-lottie";
import adoption from "../../lotties/Animation - Adoption.json";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: adoption,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
