import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Day1Art from "./art/Day1Art";
import Day2Art from "./art/Day2Art";
import Day3Art from "./art/Day3Art";
import Day4Art from "./art/Day4Art";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <React.StrictMode>
            <App />
          </React.StrictMode>
        }
      />
      <Route path="day1" element={<Day1Art />} />
      <Route path="day2" element={<Day2Art />} />
      <Route path="day3" element={<Day3Art />} />
      <Route path="day4" element={<Day4Art />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
