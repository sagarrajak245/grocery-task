// grocery-app/src/App.jsx

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import  GroceryDashboard from './pages/Dashboard.jsx';
import LoginPage from './pages/Loginpage.jsx';
import SignupPage from './pages/Signuppage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/dashboard" element={<GroceryDashboard/>} />
        <Route path="/" exact element={<LoginPage/>} /> {/* Redirect to login by default */}
      </Routes>
    </Router>
  );
}

export default App;
