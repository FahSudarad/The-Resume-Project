import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import MyInfo from "./components/MyInfo";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="my-profile-blog">
        <Header />
        <MyInfo />
        <WorkExperience />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
