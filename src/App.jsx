import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { auth } from "../auth/firebase";


// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;