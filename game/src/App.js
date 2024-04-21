import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGame from "./pages/StartGame";
import SageStart from "./pages/SageStart";
import CardManager from "./pages/CardManager";
import SequenceMemory from "./pages/SequenceMemory";
import SendEmail from "./pages/SendEmail";
import BackwardWords from "./pages/BackwardWords";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGame />}></Route>
          <Route path="SageStart" element={<SageStart />}></Route>
          <Route path="SageStart/CardManager" element={<CardManager />}></Route>
          <Route
            path="SageStart/BackwardWords"
            element={<BackwardWords />}
          ></Route>
          <Route
            path="SageStart/SequenceMemory"
            element={<SequenceMemory />}
          ></Route>
          <Route
            path="SageStart/SequenceMemory/SendEmail"
            element={<SendEmail />}
          ></Route>
          <Route
            path="SageStart/CardManager/SendEmail"
            element={<SendEmail />}
          ></Route>
          <Route
            path="SageStart/BackwardWords/SendEmail"
            element={<SendEmail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
