import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../actions/authActions";
import { auth } from "../../auth/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.jpg";
import NavbarComponent from "../layout/navbar";
import "../styles/Signup.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../layout/footer";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleGoToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <NavbarComponent active={"login"} />
      <div className="flex lg:flex-row flex-col md:items-center xl:gap-28 gap-10 xl:me-[150px] lg:me-[80px]">
        <div>
          <img src={signupImg} alt="Login Image" className="signupImg" />
        </div>
        <div className="flex flex-col gap-2 lg:px-0 sm:px-20 px-10 w-full sm:max-w-[75%] mx-auto lg:max-w-full">
          <h1 className="text-3xl font-bold">Log in to Exclusive </h1>
          <p className="font-semibold">Enter your details below</p>
          <ToastContainer />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              try {
                const credentials = {
                  email: values.email,
                  password: values.password,
                };
                await signInWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                const user = dispatch(login(credentials));
                dispatch({ type: "UPDATE_USER", payload: user });
                setTimeout(() => {
                  navigate("/home");
                }, 1000);
                setSubmitting(false);
              } catch (error) {
                if (error.code === "auth/wrong-password") {
                  toast.error("Incorrect password. Please try again.");
                } else if (error.code === "auth/user-not-found") {
                  toast.error(
                    "User not found. Please check your email address."
                  );
                } else if (error.code === "auth/invalid-email") {
                  toast.error(
                    "Invalid email address. Please check your input."
                  );
                } else if (error.code === "auth/invalid-credential") {
                  toast.error("Invalid email or password. Please try again.");
                } else {
                  toast.error("An error occurred. Please try again later.");
                }
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mt-5">
                  <div className="mb-5">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="rounded w-full p-2 border border-gray-400 focus:ring-[#86d8ce] focus:border-[#86d8ce]"
                      placeholder="Email Address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-5 pb-5">
                    <div className="password-input">
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className="rounded w-full p-2 border border-gray-400 focus:ring-[#86d8ce] focus:border-[#86d8ce]"
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      type="submit"
                      className={`bg-[#86d8ce] hover:bg-[#9bd8d1] py-2 text-white font-semibold rounded-sm ${isSubmitting ? "px-5" : "px-10"}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in...." : "Log In"}
                    </button>
                    <a
                      href=""
                      className="text-[#86d8ce] font-bold hover:text-[#a7e8e0] capitalize"
                    >
                      forget password?
                    </a>
                  </div>
                  <p className="text-center text-black mt-6">
                    Don&#39;t have account?
                    <a
                      onClick={handleGoToSignup}
                      className="text-[#86d8ce] font-bold hover:text-[#a7e8e0] cursor-pointer ml-2"
                    >
                      Signup
                    </a>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
