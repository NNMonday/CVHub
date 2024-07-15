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
import Finish from "../screens/account/setup/Finish";
import JobListView from "../screens/JobListView";
import BrowseCompanies from "../screens/BrowseCompanies";
import BrowseCompaniesDetail from "../screens/BrowseCompaniesDetail";
import JobPortal from "../screens/account/dashboard/Overview";
import Singlejob from "../screens/SingleJob";
import BrowseCandidate from "../screens/BrowseCandidate";
import PrivateRoute from "./PrivateRoute";
import PostAJob from "../screens/PostAJob";
import CandidateDashboard from "../screens/CandidateDashboard";
import AppliedJobs from "../screens/AppliedJobs";
import FavoriteJobs from "../screens/FavoriteJobs";
import JobAlerts from "../screens/JobAlerts";
import SettingPersonal from "../screens/SettingPersonal";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/viewAllJob" element={<JobListView />} />
        <Route path="/singlejob" element={<Singlejob />} />
        <Route path="/postajob" element={<PostAJob />} />
        <Route path="/candidatedashboard" element={<CandidateDashboard />} />
        <Route path="/appliedjobs" element={<AppliedJobs />} />
        <Route path="/favoritejobs" element={<FavoriteJobs />} />
        <Route path="/jobalerts" element={<JobAlerts />} />
        <Route path="/settingpersonal" element={<SettingPersonal />} />
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
        <Route
          path="/account/dashboard/setting/personal"
          element={
            <PrivateRoute>
              <Setting type={"personal"} />
            </PrivateRoute>
          }
        />
        <Route
          path="/account/setup/personal"
          element={
            <PrivateRoute>
              <PersonalInfo />
            </PrivateRoute>
          }
        />
        <Route
          path="/account/setup/profile"
          element={
            <PrivateRoute>
              <ProfileInfo />
            </PrivateRoute>
          }
        />
        <Route
          path="/account/setup/social"
          element={
            <PrivateRoute>
              <Social />
            </PrivateRoute>
          }
        />
        <Route
          path="/account/setup/finish"
          element={
            <PrivateRoute>
              <Finish />
            </PrivateRoute>
          }
        />
        <Route
          path="/account/dashboard/overview"
          element={
            <PrivateRoute>
              <JobPortal />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
