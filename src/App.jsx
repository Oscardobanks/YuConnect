import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./features/store";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

// ProtectedRoute component is not needed here, so it's removed.  You can keep it separately if needed for other routes.

export default App;