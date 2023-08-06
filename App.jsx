import React from "react";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import CountryDetail from "./pages/CountryDetail"
import RegionDetail from "./pages/RegionDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/country/:country" element={<CountryDetail />} />
          <Route path="/region/:region" element={<RegionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
