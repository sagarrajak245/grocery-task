// Import necessary components and hooks from libraries
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup'; // Yup is used for form validation

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigating between pages

  // Initial form field values
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false
  };

  // Validation schema for form fields using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'), // Email field validation
    password: Yup.string().required('Required') // Password field validation
  });

  // Function to handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Login submitted', values); // Log form values for now
    setSubmitting(false); // Stop the form from showing 'submitting' state
    navigate('/dashboard'); // Redirect to dashboard after successful login
  };

  return (
    // Main container for the login page with some styling
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          {/* Page title */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* Formik used for form creation and validation */}
        <Formik
          initialValues={initialValues} // Set initial form values
          validationSchema={validationSchema} // Set validation rules
          onSubmit={handleSubmit} // Function to handle form submission
        >
          {({ isSubmitting }) => (
            // Form layout and structure
            <Form className="mt-8 space-y-6 ">
              <div className="rounded-lg shadow-sm -space-y-px ">
                {/* Email input field */}
                <div className='py-2 '>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <Field
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                  {/* Error message for email field */}
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                {/* Password input field */}
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {/* Error message for password field */}
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              {/* Remember me checkbox and forgot password link */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Field
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 mx-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 mx-1 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm mx-1">
                  <Link to="/password" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting} // Disable button when submitting
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {/* Display 'Signing in...' when form is being submitted */}
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Link to signup page */}
        <div className="text-center">
          <Link   to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Dont have an account? <span className='text-violet-500 font-bold'> Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
