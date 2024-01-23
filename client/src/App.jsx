import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import WorkoutGrid from "./components/WorkoutGrid";
import WorkoutPage from "./components/WorkoutPage";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { useUser } from "./utils/UserContext";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import AddExercise from "./components/AddExercise";
import ExerciseDirectory from "./components/ExerciseDirectory";
import AddWorkout from "./components/AddWorkout";
import AdminDashboard from "./components/AdminDashboard";
import RequestPage from "./components/RequestPage";
import ExercisePage from "./components/ExercisePage";
import Footer from "./components/Footer";
import UserWorkoutGrid from "./components/UserWorkouts";

function App() {
  const { activeUser, setActiveUser } = useUser();
  const getUser = async () => {
    try {
      const response = await axiosClient.get("/user/profile");
      setActiveUser(response.data);
    } catch (error) {
      console.log("ERROR GETUSER APP.JSX", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home user={activeUser} />} />
        <Route path="/login" element={<Login onSignup={() => getUser()} />} />
        <Route path="/signup" element={<Signup onSignup={() => getUser()} />} />
        <Route path="/workout" element={<WorkoutGrid />} />
        <Route path="/workout/:id" element={<WorkoutPage />} />
        <Route path="/exercise/:id" element={<ExercisePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addexercise" element={<AddExercise />} />
        <Route path="/addworkout" element={<AddWorkout />} />
        <Route path="/directory" element={<ExerciseDirectory />} />
        <Route path="/dashboard/users" element={<AdminDashboard />} />
        <Route path="/user/:id/addworkout" element={<AddWorkout />} />
        <Route path="/dashboard/requests" element={<RequestPage />} />
        <Route path="/profile/workout" element={<UserWorkoutGrid />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
