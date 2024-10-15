// grocery-app/src/App.jsx

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GroceryDashboard from './pages/Dashboard.jsx';
import LoginPage from './pages/Loginpage.jsx';
import SignupPage from './pages/Signuppage.jsx';
import ForgotPassword from './components/forgotpassword.jsx';
import Loader from "./components/loader.jsx";
import { useState, useEffect } from 'react'; // Import React and hooks

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or some loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader>
          {/* You can add any additional content here if needed */}
        </Loader>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password" element={<ForgotPassword />} />
          <Route 
            path="/dashboard" 
            element={<GroceryDashboard />} /> {/* in future we can use Protected route */}
          
          <Route path="/" exact element={<LoginPage />} /> {/* Redirect to login by default */}
        </Routes>
      )}
    </Router>
  );
}

export default App;
