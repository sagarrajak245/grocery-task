import { Link, useNavigate } from "react-router-dom"; // Importing necessary modules for navigation and linking
import { Formik, Form, Field, ErrorMessage } from "formik"; // Importing Formik components for form handling
import * as Yup from "yup"; // Importing Yup for form validation schema

const SignupPage = () => {
  // Defining the form validation schema using Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"), // Username is required
    email: Yup.string().email("Invalid email").required("Required"), // Email must be a valid format and is required
    password: Yup.string().required("Required"), // Password is required
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match") // Password confirmation must match the password
      .required("Required"), // Confirm password is required
  });

  // Using navigate from react-router-dom for programmatic navigation
  const navigate = useNavigate();
  console.log(navigate);
  console.log("sagar");

  // Form submission handler
  const handleSubmit = (values) => {
    console.log("Signup submitted", values); // Logs form values when submitted
    alert("Signed up successfully"); // Alert message for successful signup
    navigate("/login"); // Redirects the user to the login page after successful signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Container for the signup form with adjusted width */}
      <div className="max-w-sm w-full space-y-8">
        <div>
          {/* Heading for the signup page */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <Formik
          // Initial form values
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          // Applying validation schema
          validationSchema={validationSchema}
          // Handling form submission
          onSubmit={handleSubmit}
        >
          {/* Destructuring errors and touched from Formik for error handling */}
          {({ errors, touched }) => (
            <Form className="mt-8 space-y-6">
              {/* Hidden field to store a value, often used in forms */}
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                {/* Username Field */}
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      errors.username && touched.username
                        ? "border-red-500"
                        : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Username"
                  />
                  {/* Displaying error message for the username field */}
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <Field
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Email address"
                  />
                  {/* Displaying error message for the email field */}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Password"
                  />
                  {/* Displaying error message for the password field */}
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                  </label>
                  <Field
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
                      errors.confirmPassword && touched.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                    placeholder="Confirm Password"
                  />
                  {/* Displaying error message for the confirm password field */}
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Link to navigate to login page for existing users */}
        <div className="text-center">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account?{" "}
            <span className="text-violet-500 font-bold">Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
