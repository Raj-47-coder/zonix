import React from "react";
import Header from "../Header/Header";
import Home from "../Mainpages/Home";
import Store from "../Mainpages/Store";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      <Footer />
    </>
  );
}
