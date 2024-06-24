import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";
import NextStepPage from "./pages/NextStep/NextStepPage";
import { useState } from "react";

function App() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage completed={completed} setCompleted={setCompleted} />
            }
          />
          <Route
            path="/result"
            element={
              <ResultPage completed={completed} setCompleted={setCompleted} />
            }
          />
          <Route
            path="/nextStep"
            element={
              <NextStepPage completed={completed} setCompleted={setCompleted} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
