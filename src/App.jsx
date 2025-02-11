import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/signIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import SideNavBar from './pages/sideNavBar';

const App = () => {
return (
<Router>
<Routes>
<Route path="/" element={<SignIn />} />
<Route path="/SignUp" element={<SignUp />} />
<Route path="/ForgotPassword" element={<ForgotPassword />} />
<Route path="/SideNavBar" element={<SideNavBar />} />

</Routes>
</Router>
);
};

export default App;


