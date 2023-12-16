import React from "react";
import Header from "../Header/Header";
import Home from "../Mainpages/Home";
import Store from "../Mainpages/Store";
import Productview from "../Mainpages/Productview";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Mainlayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/' element={<Productview />} />
      </Routes>
      <Footer />
    </>
  );
}
