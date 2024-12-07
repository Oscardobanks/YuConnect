import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import PropTypes from "prop-types";

const NavbarComponent = ({ active }) => {
  NavbarComponent.propTypes = {
    active: PropTypes.string.isRequired,
  };

  return (
    <div>
      <div className="bg-white py-2 border-gray-200 dark:bg-gray-900 drop-shadow-sm px-8 lg:px-[80px] xl:px-[150px]">
        <Navbar className="sm:px-0 px-0">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              YuConnect
            </span>
          </NavLink>
          <div className="flex items-center md:order-2">
            <div className="relative hidden md:block">
              <input
                type="text"
                id="search-navbar"
                className="block md:w-52 lg:w-60 w-full p-2 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-[#86d8ce] focus:border-[#86d8ce] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#86d8ce] dark:focus:border-[#86d8ce]"
                placeholder="Looking for something?"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div>
            <Navbar.Toggle className="ms-2 mt-3" />
          </div>
          <Navbar.Collapse>
            <div className="relative md:hidden">
              <input
                type="text"
                id="mobile-search-navbar"
                className="block md:w-60 w-full p-2 pe-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-[#86d8ce] focus:border-[#86d8ce] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#86d8ce] dark:focus:border-[#86d8ce]"
                placeholder="Looking for something?"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
            </div>
            <div className="md:flex">
              <Navbar>
                <NavLink
                  to="/"
                  className={`block hover:text-[#86d8ce] ${
                    active == "home"
                      ? "border-b hover:border-b-0 text-[#86d8ce] border-b-[#86d8ce]"
                      : "text-black"
                  }`}
                >
                  Home
                </NavLink>
              </Navbar>
              <Navbar>
                <NavLink
                  to="/contact"
                  className={`block hover:text-[#86d8ce] ${
                    active == "contact"
                      ? "border-b hover:border-b-0 text-[#86d8ce] border-b-[#86d8ce]"
                      : "text-black"
                  }`}
                >
                  Contact
                </NavLink>
              </Navbar>
              <Navbar>
                <NavLink
                  to="/about"
                  className={`block hover:text-[#86d8ce] ${
                    active === "about"
                      ? "border-b hover:border-b-0 text-[#86d8ce] border-b-[#86d8ce]"
                      : "text-black"
                  }`}
                >
                  About
                </NavLink>
              </Navbar>
              <Navbar>
                <NavLink
                  to="/login"
                  className={`block hover:text-[#86d8ce] ${
                    active === "login"
                      ? "border-b hover:border-b-0 text-[#86d8ce] border-b-[#86d8ce]"
                      : "text-black"
                  }`}
                >
                  Login
                </NavLink>
              </Navbar>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
