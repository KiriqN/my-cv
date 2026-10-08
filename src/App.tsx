import { useState } from "react";
import "./App.css";
import Navbar from "./components/navigation/navbar.tsx";
import Hero from "./components/hero/hero.tsx";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <h1>Hello world</h1>
        <p>Hello world again</p>
        <label>hello world more more</label>
      </div>
    </>
  );
}

export default App;
