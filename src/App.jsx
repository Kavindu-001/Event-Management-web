import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignIn from './pages/SignIn'
import AdminDashboard from './pages/DashBoards/AdminDashboard'
import EventOrganizerDashboard from './pages/DashBoards/EventOrganizerDashboard'
import ArtistDashboard from './pages/DashBoards/ArtistDashboard'
import BandDashboard from './pages/DashBoards/BandDashboard'
import ConsumersDashboard from './pages/DashBoards/ConsumersDashboard'
import SecurityTeamDashboard from './pages/DashBoards/SecurityTeamDashboard'
import SponsorsDashboard from './pages/DashBoards/SponsorsDashboard'
import DesignersDashboard from './pages/DashBoards/DesignersDashboard'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
    
  return (
    <Router>
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />

        {/*Role-Based Routing and protected routes*/}
        <Route element ={<PrivateRoute allowedRoles={["Admin"]}/>}>
        <Route path="/AdminDashboard" element={ <AdminDashboard /> } />
        </Route>

        <Route element ={<PrivateRoute allowedRoles={["EventOrganizer"]}/>}>
        <Route path="/EventOrganizerDashboard" element={ <EventOrganizerDashboard /> } />
        </Route>

        <Route element ={<PrivateRoute allowedRoles={["Artist"]}/>}>
        <Route path="/ArtistDashboard" element={<ArtistDashboard /> } />
        </Route>

        <Route element ={<PrivateRoute allowedRoles={["Bands"]}/>}>
        <Route path="/BandDashboard" element={<BandDashboard /> } />
        </Route>

        <Route element ={<PrivateRoute allowedRoles={["Consumer"]}/>}>
        <Route path="/ConsumerDashboard" element={<ConsumersDashboard />} />
        </Route>

        <Route element ={<PrivateRoute allowedRoles={["SecurityTeam"]}/>}>
        <Route path="/SecurityDashboard" element={<SecurityTeamDashboard />} />
        </Route>
        
        <Route element ={<PrivateRoute allowedRoles={["Sponsor"]}/>}>
        <Route path="/SponsorDashboard" element={<SponsorsDashboard />} />
        </Route>
        
        <Route element ={<PrivateRoute allowedRoles={["Designer"]}/>}>
        <Route path="/DesignerDashboard" element={<DesignersDashboard />} />        
        </Route>
       

      </Routes>
    </Router>

   
  )
}

export default App
