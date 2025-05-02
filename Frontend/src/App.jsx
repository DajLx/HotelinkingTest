import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import MainView from "./components/mainView";
import LoginForm from "./components/Login";
import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";

import "./App.css";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOfferts } from "./state/oferts";
import { setPromo } from "./state/promos";
import Promos from "./components/Promos";

console.log("levante el server");

function App() {
  const user = useSelector((state) => state.user);
  const promos = useSelector((state) => state.promos);
  const dis = useDispatch();
  const getPromos = async () => {
    console.log("ENTRE ACA");
    const res = await axios.get("http://localhost:8000/getCodes", {
      withCredentials: true,
    });
    dis(setPromo(res.data.res));
  };
  const getOfferts = async () => {
    const offerts = await axios.get("http://localhost:8000/getOfferts");
    dis(setOfferts(offerts.data));
  };
  useEffect(() => {
    getOfferts();
  }, []);
  useEffect(() => {
    if (user.name) {
      getPromos();
    }
  }, [user]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/promos" element={<Promos />} />
      </Routes>
    </>
  );
}

export default App;
