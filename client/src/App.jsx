import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import WorkoutGrid from "./components/WorkoutGrid";
import WorkoutPage from "./components/WorkoutPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user/profile", {
        withCredentials: true,
      });
      setActiveUser(response.data);
    } catch (error) {
      console.log("ERROR GETUSER APP.JSX", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log("Active User:", activeUser);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={activeUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup onSignup={() => getUser()} />} />
        <Route path="/workout" element={<WorkoutGrid />} />
        <Route path="/workout/:id" element={<WorkoutPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
