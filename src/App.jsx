
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

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
import Quiz from "./pages/Quiz";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>

            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Learning */}
            <Route
              path="/start-learning"
              element={<StartLearning />}
            />

            {/* Lesson */}
            <Route
              path="/lesson/:lesson_no"
              element={<Lesson />}
            />

            {/* Quiz */}
            <Route
              path="/lesson/:lesson_no/quiz"
              element={<Quiz />}
            />

            {/* Tutorials */}
            <Route
              path="/tutorials"
              element={<Tutorials />}
            />

            {/* About */}
            <Route
              path="/about-us"
              element={<AboutUs />}
            />

            {/* Authentication */}
            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/forgot-password"
              element={<ForgotPassword />}
            />

            {/* Profile */}
            <Route
              path="/my-profile"
              element={<MyProfile />}
            />

            <Route
              path="/update-profile"
              element={<UpdateProfile />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<ErrorPage />}
            />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
