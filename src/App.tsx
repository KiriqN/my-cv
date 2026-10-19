import { useState } from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar.tsx";
import Hero from "./components/hero/Hero.tsx";
import Terminal from "./components/terminal/TerminalSection.tsx";
import Slider from "./components/slider/Slider.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-16 md:gap-24 pt-16 md:pt-24">
        <Hero />

        <Terminal />
        <Slider />
      </div>
    </>
  );
}

export default App;
