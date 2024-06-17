import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../screens/Homepage";
import FindJob from "../screens/FindJob";
import Pricing from "../screens/Pricing";
import Support from "../screens/Support";
import Register from "../screens/Register";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find/job" element={<FindJob />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}
