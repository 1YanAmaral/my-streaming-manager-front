import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/SignIn/Login";
import Register from "./components/Register";
import MainPage from "./components/Pages/mainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./contexts/userContext";

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
