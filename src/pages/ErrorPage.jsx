import { Link, useNavigate } from "react-router-dom";
import Footer from "../layout/footer";
import NavbarComponent from "../layout/navbar";

const ErrorPage = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/')
    }
  return (
    <div>
      <NavbarComponent  />
      <div className="mainContainer">
        <div className="flex gap-2 my-20 font-medium">
          <Link to="/" className="text-gray-300">
            Home
          </Link>
          <p className="text-gray-300">/</p>
          <p className="text-black">404 Error</p>
        </div>
        <div className="text-center">
          <p className="text-8xl font-bold mb-10 mt-20">404 Not Found</p>
          <p>Your visited page not found. You may go home page.</p>
          <button
            onClick={goToHomePage}
            className="text-white rounded bg-[#86d8ce] hover:bg-[#9bd8d1] py-2 px-10 mt-20 mb-32"
          >
            Back to home page
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
