import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import StartLearning from "./pages/StartLearning";
import Tutorials from "./pages/Tutorials";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import Lesson from "./pages/Lesson";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-learning" element={<StartLearning />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/lessons/:lesson_no" element={<Lesson />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;