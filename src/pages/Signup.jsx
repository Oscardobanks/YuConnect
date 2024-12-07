import googleLogo from "../assets/icons/search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../auth/firebase";
import {
  signupFailure,
  signupStart,
  signupSuccess,
} from "../actions/authActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.jpg";
import NavbarComponent from "../layout/navbar";
import "../styles/Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../layout/footer";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, "Full Name must be at least 5 characters")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const handleGoogleSignin = async () => {
    console.log("Google Sign-in clicked");
    const provider = new GoogleAuthProvider();
    setIsLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast.success("User Registered Successfully!!");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error) {
      let errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email address is already in use.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password is too weak. Please use a stronger password.";
      } else if (error.code === "auth/popup-closed-by-user") {
        errorMessage = "";
      } else if (error.code === "auth/cancelled-popup-request") {
        errorMessage = "";
      }
      dispatch(signupFailure(errorMessage));
      {
        errorMessage && toast.error(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleGoToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <NavbarComponent active={""} />
      <div className="flex lg:flex-row flex-col md:items-center lg:gap-20 xl:gap-28 gap-10 xl:me-[150px] lg:me-[80px]">
        <div>
          <img src={signupImg} alt="signup image" className="signupImg" />
        </div>
        <div className="flex flex-col gap-2 lg:px-0 sm:px-20 px-10 w-full sm:max-w-[75%] mx-auto lg:max-w-full">
          <h1 className="text-3xl font-bold">Create an account </h1>
          <p className="font-semibold">Enter your details below</p>
          <ToastContainer />
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              dispatch(signupStart());
              setIsLoading(true);
              try {
                await createUserWithEmailAndPassword(
                  auth,
                  values.email,
                  values.password
                );
                dispatch(signupSuccess(auth.currentUser));
                toast.success("User Registered Successfully!!");
                setTimeout(() => {
                  navigate("/login");
                }, 3000);
                setSubmitting(false);
              } catch (error) {
                let errorMessage = error.message;
                if (error.code === "auth/email-already-in-use") {
                  errorMessage = "Email address is already in use.";
                } else if (error.code === "auth/weak-password") {
                  errorMessage =
                    "Password is too weak. Please use a stronger password.";
                } else if (error.code === "auth/invalid-email") {
                  errorMessage =
                    "Invalid email address. Please check your input.";
                }
                dispatch(signupFailure(errorMessage));
                toast.error(errorMessage);
                setSubmitting(false);
              } finally {
                setIsLoading(false);
              }
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="mt-5">
                  <div className="mb-5">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className={`rounded w-full p-2 border border-gray-400 focus:ring-[#86d8ce] focus:border-[#86d8ce] ${
                        touched.name && errors.name && "border-red-500"
                      }`}
                      placeholder="Full Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-5">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={`rounded w-full p-2 border border-gray-400 focus:ring-[#86d8ce] focus:border-[#86d8ce] ${
                        touched.email && errors.email && "border-red-500"
                      }`}
                      placeholder="Email Address"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div className="mb-5 pb-5">
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        className={`rounded w-full p-2 border border-gray-400 focus:ring-[#86d8ce] focus:border-[#86d8ce] ${
                          touched.password &&
                          errors.password &&
                          "border-red-500"
                        }`}
                        placeholder="Password"
                      />
                      <div className="password-icons">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                      </div>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#86d8ce] hover:bg-[#9bd8d1] py-2 px-5 w-full rounded text-white font-semibold"
                    disabled={isSubmitting || isLoading}
                  >
                    {isLoading ? "Creating account...." : "Create account"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <button
            type="submit"
            className="flex justify-center gap-3 w-full rounded cursor-pointer border-2 border-gray-400 hover:border-gray-500 mt-4 py-2"
            onClick={handleGoogleSignin}
          >
            <img src={googleLogo} alt="" className="w-6" />
            <p className="font-semibold">Sign up with Google</p>
          </button>
          <p className="text-center text-black mt-6">
            Already have account?
            <a
              onClick={handleGoToLogin}
              className="text-[#86d8ce] font-bold hover:text-[#a7e8e0] cursor-pointer ml-2"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
