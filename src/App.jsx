import "./App.css";
import Login from "./pages/Login";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { NavBar } from "./components";
import Profile from "./pages/Profile";
import Test from "./pages/Test";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      {user && <NavBar />}
      <Routes>
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/home"} />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to={"/home"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
