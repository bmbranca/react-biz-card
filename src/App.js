import React from "react";
import About from "./About.js";
import Info from "./Info.js";
import Interests from "./Interests.js";
import Mantra from "./Mantra.js";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Mantra />
    </div>
  );
}
