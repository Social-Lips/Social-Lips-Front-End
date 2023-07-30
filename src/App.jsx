import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FileUpload from "./components/FileUpload";
import Login from "./pages/Login";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { NavBar } from "./components";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const user = useAuthContext();
  // const user = false;
  return (
    <div>
      {user.user && <NavBar />}
      <Routes>
        <Route
          path="/"
          element={user.user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!user.user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user.user ? <SignUp /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile"
          element={user.user ? <Profile /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
