import { Navigate } from 'react-router-dom';
import { useAuth } from './authenticate.jsx';
import PropTypes from 'prop-types'; // Import PropTypes

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
};

// Add prop types validation
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired, // Validate 'element' prop
};

export default ProtectedRoute;
