import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainView from "./components/mainView";
import LoginForm from "./components/Login";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";

import "./App.css";
import { useState } from "react";
import Register from "./components/Register";

console.log("levante el server");

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
