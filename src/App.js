import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import { Link, Route, Routes } from "react-router-dom";
import FAQ from "./Faq";
import VaccineForm from "./containers/VaccineForm";
import VaccineList from "./containers/VaccineList";

const App = () => {
  let routes = (
    <Routes>
      <Route path="/" exact element={<VaccineForm />} />
      <Route path="/vaccinelist" element={<VaccineList />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  return (
    <>
      {/* <h3>Routers</h3> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vaccinelist" className="nav-link">
                  List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {routes}
    </>
  );
};

export default App;
