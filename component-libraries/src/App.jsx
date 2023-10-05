import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Van from "./pages/Van";

import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./pages/hosts/Dashboard";
import Income from "./pages/hosts/Income";
import Reviews from "./pages/hosts/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./pages/hosts/HostVans";
import HostVanDetails from "./pages/hosts/HostVanDetails";
import HostVanInfo from "./pages/hosts/HostVanInfo";
import HostVanPricing from "./pages/hosts/HostVanPricing";
import HostVanPhotos from "./pages/hosts/HostVanPhotos";
import Login from "./pages/Login";
import AuthRequire from "./components/AuthRequire";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="van" element={<Van />} />
            
            <Route path="van/:id" element={<VanDetails />} />
            <Route path="login" element={<Login />} />

            <Route element={<AuthRequire />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />

                <Route path="reviews" element={<Reviews />} />
                <Route path="vans/:id" element={<HostVanDetails />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photo" element={<HostVanPhotos />} />
                </Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
