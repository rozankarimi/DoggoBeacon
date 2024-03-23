import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ResultPage from "./pages/ResultPage/ResultPage";
import { useState } from "react";

function App() {
  const [compelted, setCompelted] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage compelted={compelted} setCompelted={setCompelted} />
            }
          />
          <Route
            path="/result"
            element={
              <ResultPage compelted={compelted} setCompelted={setCompelted} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
