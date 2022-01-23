import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import FAQ from "./Faq";

const App = () => {
  let routes = (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  return (
    <>
      <h3>Routers</h3>
      {routes}
    </>
  );
};

export default App;
