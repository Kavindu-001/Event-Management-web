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
        
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["EventOrganizer"]}/>}>
        <Route path="/EventOrganizerDashboard" element={ <EventOrganizerDashboard /> } />
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["Artist"]}/>}>
        <Route path="/ArtistDashboard" element={<ArtistDashboard /> } />
        </Route>

        <Route element ={<ProtectRoute allowedRoles={["Bands"]}/>}>
        <Route path="/BandDashboard" element={<BandDashboard /> } />
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
