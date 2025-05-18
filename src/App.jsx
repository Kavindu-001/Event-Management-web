import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/signIn';
import SignUp from './pages/SignUp';

import AdminDashboard from './pages/Dashboards/AdminDashboard';
import EventOrganizerDashboard from './pages/Dashboards/EventOrganizerDashboard';
import ArtistDashboard from './pages/Dashboards/ArtistDashboard';
import BandDashboard from './pages/Dashboards/BandDashboard';
import ConsumersDashboard from './pages/Dashboards/ConsumersDashboard';
import SecurityTeamDashboard from './pages/Dashboards/SecurityTeamDashboard';
import SponsorsDashboard from './pages/Dashboards/SponsorsDashboard';
import DesignersDashboard from './pages/Dashboards/DesignersDashboard';

import ProtectRoute from './components/ProtectRoute';

import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

import AdminUsers from './pages/AdminPanel/AdminUsers';
import AdminEvents from './pages/AdminPanel/AdminEvents';
import AdminSettings from './pages/AdminPanel/AdminSettings';
import ViewDetail from './pages/AdminPanel/ViewDetail';
import AdminReport from './pages/AdminPanel/AdminReport';
import AdminMail from './pages/AdminPanel/AdminMail';

import OrganizerEvents from './pages/OrganizerPanel/OrganizerEvents';
import OrganizerReports from './pages/OrganizerPanel/OrganizerReports';
import OrganizerSettings from './pages/OrganizerPanel/OrganizerSettings';
import OrganizerBookings from './pages/OrganizerPanel/OrganizerBookings';

import SidebarOverview from './components/ChildComponents/SidebarOverview';
import SidebarEvents from './components/ChildComponents/SidebarEvents';
import SidebarBookings from './components/ChildComponents/SidebarBookings';
import SidebarCalendar from './components/ChildComponents/SidebarCalendar';
import SidebarProfile from './components/ChildComponents/SidebarProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/* Admin-only routes */}
        <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AdminUsers" element={<AdminUsers />} />
          <Route path="/AdminEvents" element={<AdminEvents />} />
          <Route path="/AdminSettings" element={<AdminSettings />} />
          <Route path="/ViewDetail/:id" element={<ViewDetail />} />
          <Route path="/AdminReport" element={<AdminReport />} />
          <Route path="/AdminMail" element={<AdminMail />} />
        </Route>

        {/* Organizer-only routes */}
        <Route element={<ProtectRoute allowedRoles={["organizer"]} />}>
          <Route path="/EventOrganizerDashboard" element={<EventOrganizerDashboard />} />
          <Route path="/OrganizerEvents" element={<OrganizerEvents />} />
          <Route path="/OrganizerReports" element={<OrganizerReports />} />
          <Route path="/OrganizerSettings" element={<OrganizerSettings />} />
          <Route path="/OrganizerBookings" element={<OrganizerBookings />} />
        </Route>

        {/* Artist-only routes */}
        <Route element={<ProtectRoute allowedRoles={["artist"]} />}>
          <Route path="/ArtistDashboard" element={<ArtistDashboard />} />
          <Route path="/SidebarOverview" element={<SidebarOverview />} />
          <Route path="/SidebarEvents" element={<SidebarEvents />} />
          <Route path="/SidebarBookings" element={<SidebarBookings />} />
          <Route path="/SidebarCalendar" element={<SidebarCalendar />} />
          <Route path="/SidebarProfile" element={<SidebarProfile />} />
        </Route>

        {/* Bands-only routes */}
        <Route element={<ProtectRoute allowedRoles={["bands"]} />}>
          <Route path="/BandDashboard" element={<BandDashboard />} />
          <Route path="/SidebarOverview" element={<SidebarOverview />} />
          <Route path="/SidebarEvents" element={<SidebarEvents />} />
          <Route path="/SidebarBookings" element={<SidebarBookings />} />
          <Route path="/SidebarCalendar" element={<SidebarCalendar />} />
          <Route path="/SidebarProfile" element={<SidebarProfile />} />
        </Route>

        {/* Consumer-only routes */}
        <Route element={<ProtectRoute allowedRoles={["consumer"]} />}>
          <Route path="/ConsumersDashboard" element={<ConsumersDashboard />} />
          <Route path="/SidebarOverview" element={<SidebarOverview />} />
          <Route path="/SidebarEvents" element={<SidebarEvents />} />
          <Route path="/SidebarBookings" element={<SidebarBookings />} />
          <Route path="/SidebarCalendar" element={<SidebarCalendar />} />
          <Route path="/SidebarProfile" element={<SidebarProfile />} />
        </Route>

        {/* Security-team-only routes */}
        <Route element={<ProtectRoute allowedRoles={["security"]} />}>
          <Route path="/SecurityTeamDashboard" element={<SecurityTeamDashboard />} />
          <Route path="/SidebarOverview" element={<SidebarOverview />} />
          <Route path="/SidebarEvents" element={<SidebarEvents />} />
          <Route path="/SidebarBookings" element={<SidebarBookings />} />
          <Route path="/SidebarCalendar" element={<SidebarCalendar />} />
          <Route path="/SidebarProfile" element={<SidebarProfile />} />
        </Route>

        {/* Sponsors-only routes */}
        <Route element={<ProtectRoute allowedRoles={["sponsors"]} />}>
          <Route path="/SponsorsDashboard" element={<SponsorsDashboard />} />
          <Route path="/SidebarOverview" element={<SidebarOverview />} />
          <Route path="/SidebarEvents" element={<SidebarEvents />} />
          <Route path="/SidebarBookings" element={<SidebarBookings />} />
          <Route path="/SidebarCalendar" element={<SidebarCalendar />} />
          <Route path="/SidebarProfile" element={<SidebarProfile />} />
        </Route>

        {/* Designers-only routes (lighting and sound, stage) */}
        <Route element={<ProtectRoute allowedRoles={["lighting and sound", "stage"]} />}>
          <Route path="/DesignersDashboard" element={<DesignersDashboard />} />
          <Route path="/SidebarOverview" element={<SidebarOverview />} />
          <Route path="/SidebarEvents" element={<SidebarEvents />} />
          <Route path="/SidebarBookings" element={<SidebarBookings />} />
          <Route path="/SidebarCalendar" element={<SidebarCalendar />} />
          <Route path="/SidebarProfile" element={<SidebarProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;