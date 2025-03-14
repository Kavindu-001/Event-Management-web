import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignIn from '../src/pages/signIn'
import AdminDashboard from '../src/pages/Dashboards/AdminDashboard'
import EventOrganizerDashboard from '../src/pages/Dashboards/EventOrganizerDashboard'
import ArtistDashboard from '../src/pages/Dashboards/ArtistDashboard'
import BandDashboard from '../src/pages/Dashboards/BandDashboard'
import ConsumersDashboard from '../src/pages/Dashboards/ConsumersDashboard'
import SecurityTeamDashboard from '../src/pages/Dashboards/SecurityTeamDashboard'
import SponsorsDashboard from '../src/pages/Dashboards/SponsorsDashboard'
import DesignersDashboard from '../src/pages/Dashboards/DesignersDashboard'
import ProtectRoute from '../src/components/ProtectRoute'


const App = () => {
    
  return (
    <Router>
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />

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
