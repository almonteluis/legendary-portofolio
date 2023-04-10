import React from "react";

import { Header, About, Skills, Testimonials, Work, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
