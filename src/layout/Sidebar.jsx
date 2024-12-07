import PropTypes from "prop-types";
import {
  FaBell,
  FaEnvelope,
  FaHeart,
  FaHome,
  FaStar,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const Sidebar = ({ active }) => {
  const dispatch = useDispatch();

  const sidebarItems = [
    {
      icon: <FaHome />,
      title: "Home",
      link: "/",
    },
    {
      icon: <FaBell />,
      title: "Notifications",
      link: "/notifications",
    },
    {
      icon: <FaHeart />,
      title: "Shop",
      link: "/shop",
    },
    {
      icon: <FaEnvelope />,
      title: "Conversation",
      link: "/conversation",
    },
    {
      icon: <FaWallet />,
      title: "Wallet",
      link: "/wallet",
    },
    {
      icon: <FaStar />,
      title: "Subscription",
      link: "/subscription",
    },
    {
      icon: <FaUser />,
      title: "My Profile",
      link: "/my-profile",
    },
    {
      icon: <FaPerson />,
      title: "Settings",
      link: "/settings",
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="bg-white h-[80vh] w-60 rounded-xl relative">
        <div className="py-10">
          <div className="relative flex flex-col gap-5 w-full">
            {sidebarItems.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className={`relative flex items-center gap-4 font-semibold ${
                  active === item.title.toLowerCase()
                    ? "ps-7 border-s-4 border-[#88C2BB] text-black"
                    : "ps-8 text-[#8D8D8D]"
                }`}
              >
                <div>{item.icon}</div>
                <p>{item.title}</p>
              </a>
            ))}
          </div>
        </div>
            <a
              href="/login"
              className="flex items-center gap-4 font-semibold absolute bottom-5 ps-8 text-[#88C2BB]"
              onClick={handleLogout}
            >
              <img src="src/assets/icons/logout.svg" alt="" />
              <p>Log out</p>
            </a>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Sidebar;
