import { useState } from "react";
import "./App.css";
import Navbar from "./components/navigation/Navbar.tsx";
import Hero from "./components/hero/Hero.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col gap-16 md:gap-24 pt-16 md:pt-24">
        <Hero />
      </div>
    </>
  );
}

export default App;
