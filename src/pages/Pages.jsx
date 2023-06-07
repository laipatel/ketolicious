import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Results from "./Results";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/ketolicious/" element={<Home />} />
        <Route path="/ketolicious/cuisine/:type" element={<Cuisine />} />
        <Route path="/ketolicious/results/:search" element={<Results />} />
        <Route path="/ketolicious/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
