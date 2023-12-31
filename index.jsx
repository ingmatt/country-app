import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import CountryDetail from "./pages/CountryDetail"
import RegionDetail from "./pages/RegionDetail";
import RegionSelect from "./components/RegionSelect"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<RegionSelect/>} />
          <Route path="/country/:country" element={<CountryDetail />} />
          <Route path="/region/:region" element={<RegionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)