import React from "react";
import "./App.css";
import "./Root.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Contract from "./components/Contract";
import Tokenomics from "./components/Tokenomics";
import Secure from "./components/Secure";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Social from "./components/Social";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className=" overflow-hidden">
      <Hero />
      <About />
      <Contract />
      <Tokenomics />
      <Secure />
      <Roadmap />
      <Faq />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
