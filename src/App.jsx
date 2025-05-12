import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import SignIn from '../src/pages/signIn'
import SignUp from '../src/pages/SignUp'
import AdminDashboard from '../src/pages/Dashboards/AdminDashboard'
import EventOrganizerDashboard from '../src/pages/Dashboards/EventOrganizerDashboard'
import ArtistDashboard from '../src/pages/Dashboards/ArtistDashboard'
import BandDashboard from '../src/pages/Dashboards/BandDashboard'
import ConsumersDashboard from '../src/pages/Dashboards/ConsumersDashboard'
import SecurityTeamDashboard from '../src/pages/Dashboards/SecurityTeamDashboard'
import SponsorsDashboard from '../src/pages/Dashboards/SponsorsDashboard'
import DesignersDashboard from '../src/pages/Dashboards/DesignersDashboard'
import ProtectRoute from '../src/components/ProtectRoute'
import Events from '../src/pages/Events'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AdminUsers from './pages/AdminPanel/AdminUsers'
import AdminEvents from './pages/AdminPanel/AdminEvents'
import AdminSettings from './pages/AdminPanel/AdminSettings'
import ViewDetail from './pages/AdminPanel/ViewDetail'
import AdminReport from './pages/AdminPanel/AdminReport'
import OrganizerEvents from './pages/OrganizerPanel/OrganizerEvents'
import OrganizerReports from './pages/OrganizerPanel/OrganizerReports'
import OrganizerSettings from './pages/OrganizerPanel/OrganizerSettings'
import OrganizerBookings from './pages/OrganizerPanel/OrganizerBookings'
import SidebarOverview from '../src/components/ChildComponents/SidebarOverview';
import SidebarEvents from './components/ChildComponents/SidebarEvents'
import SidebarBookings from './components/ChildComponents/SidebarBookings'
import SidebarCalendar from './components/ChildComponents/SidebarCalendar'
import SidebarProfile from './components/ChildComponents/SidebarProfile'


const App = () => {
    
  return (
    <Router>
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path ="/SignUp" element={<SignUp />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />

        {/*Role-Based Routing and protected routes*/}
        <Route element ={<ProtectRoute allowedRoles={["Admin"]}/>}>
        <Route path="/AdminDashboard" element={ <AdminDashboard /> } />
        <Route path="/AdminUsers" element={ <AdminUsers /> } />
        <Route path="/AdminEvents" element={ <AdminEvents /> } />
        <Route path="/AdminSettings" element={ <AdminSettings /> } /> 
        <Route path="/ViewDetail/:id" element={ <ViewDetail /> } />
        <Route path ="/AdminReport" element={<AdminReport />} />
        
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["EventOrganizer"]}/>}>
        <Route path="/EventOrganizerDashboard" element={ <EventOrganizerDashboard /> } />
        <Route path="/OrganizerEvents" element={ <OrganizerEvents /> } />
        <Route path="/OrganizerReports" element={ <OrganizerReports /> } />
        <Route path="/OrganizerSettings" element={ <OrganizerSettings /> } />
        <Route path="/OrganizerBookings" element={ <OrganizerBookings /> } />
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["Artist"]}/>}>
        <Route path="/ArtistDashboard" element={<ArtistDashboard /> } />
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["Bands"]}/>}>
        <Route path="/BandDashboard" element={<BandDashboard /> } />
        <Route path="SidebarOverview" element={<SidebarOverview />} />
        <Route path="SidebarEvents" element={<SidebarEvents />} />
        <Route path="SidebarBookings" element={<SidebarBookings />} />
        <Route path="SidebarCalendar" element={<SidebarCalendar />} />
        <Route path="SidebarProfile" element={<SidebarProfile />} />
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["Consumer"]}/>}>
        <Route path="/ConsumersDashboard" element={<ConsumersDashboard />} />
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["SecurityTeam"]}/>}>
        <Route path="/SecurityTeamDashboard" element={<SecurityTeamDashboard />} />
        </Route>
        
        <Route element ={<ProtectRoute allowedRoles={["Sponsor"]}/>}>
        <Route path="/SponsorsDashboard" element={<SponsorsDashboard />} />
        </Route>
        
        <Route element ={<ProtectRoute allowedRoles={["Designer"]}/>}>
        <Route path="/DesignersDashboard" element={<DesignersDashboard />} />        
        </Route>
       

      </Routes>
    </Router>

  )
}

export default App
