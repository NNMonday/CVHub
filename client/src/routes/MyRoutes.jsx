import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../screens/Homepage";
import FindJob from "../screens/FindJob";
import Pricing from "../screens/Pricing";
import Support from "../screens/Support";
import Register from "../screens/Register";

import ConfirmSignUp from "../screens/ConfirmSignUp";
import Login from "../screens/Login";
import Setting from "../screens/account/dashboard/Setting";
import ForgotPassword from "../screens/ForgotPassword";
import PersonalInfo from "../screens/account/setup/PersonalInfo";
import ProfileInfo from "../screens/account/setup/ProfileInfo";
import Social from "../screens/account/setup/Social";
import Contact from "../screens/account/setup/Contact";
import Finish from "../screens/account/setup/Finish";
import JobListView from "../screens/JobListView";
import BrowseCompanies from "../screens/BrowseCompanies";
import BrowseCompaniesDetail from "../screens/BrowseCompaniesDetail";
import JobPortal from "../screens/account/dashboard/Overview";
import Singlejob from "../screens/SingleJob";

import { Toast, ToastContainer } from "react-bootstrap";
import BrowseCandidate from "../screens/BrowseCandidate";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/find/job" element={<FindJob />} />
        <Route path="/singlejob" element={<Singlejob />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/viewAllJob" element={<JobListView />} />
        <Route path="/confirmSignUp/:token" element={<ConfirmSignUp />} />
        <Route path="/browsecompanies" element={<BrowseCompanies />} />
        <Route path="/browsecandidate" element={<BrowseCandidate />} />
        <Route
          path="/browsecompanies/:id"
          element={<BrowseCompaniesDetail />}
        />
        {/* <Route path="/jobdetai" element={<JobDetailScreen />} /> */}
        <Route
          path="/account/setting/personal"
          element={<Setting type={"personal"} />}
        />
        <Route path="/account/setup/personal" element={<PersonalInfo />} />
        <Route path="/account/setup/profile" element={<ProfileInfo />} />
        <Route path="/account/setup/social" element={<Social />} />
        <Route path="/account/setup/contact" element={<Contact />} />
        <Route path="/account/setup/finish" element={<Finish />} />
  
        <Route  path="/account/dashboard/overview" element={<JobPortal />} />


        <Route path="/browsecompanies" element={<BrowseCompanies />} />
        <Route path="/browsecompanies/detail" element={<BrowseCompaniesDetail />} />
      </Routes>
    </BrowserRouter>
  );
}