import axiosClient from "../axiosClient";

//Exercises

const getExercises = async () => {
  try {
    const exercises = await axiosClient.get("/exercise");
    return exercises.data;
  } catch (error) {
    console.log("getExercises Catch", error);
  }
};

const getExercise = async (id) => {
  try {
    const response = await axiosClient.get(`/exercise/${id}`);
    return response;
  } catch (error) {
    console.log("error from getExercise/utils", error);
  }
};

const getFilteredExercises = async (filters) => {
  try {
    const exercises = await axiosClient.get("/exercise/filtered", {
      params: filters,
    });
    console.log("FROM FETCH HOOK", exercises);
    return exercises;
  } catch (error) {
    console.log("getExercises Catch", error);
  }
};
//Workouts
const getFilteredWorkouts = async (filters) => {
  try {
    const workouts = await axiosClient.get("/workout", {
      params: filters,
    });
    console.log("FROM FETCH HOOK", workouts);
    return workouts;
  } catch (error) {
    console.log("getExercises Catch", error);
  }
};

const getWorkouts = async () => {
  try {
    const workouts = await axiosClient.get("/workout");
    return workouts.data.workouts;
  } catch (error) {
    console.log("getWorkouts Catch", error);
  }
};

const getUserWorkouts = async () => {
  try {
    const response = await axiosClient.get("/user/workouts");
    return response.data;
  } catch (error) {
    console.log("getUsersWorkout(utils", error);
  }
};

const getWorkout = async (id) => {
  try {
    const response = await axiosClient.get(`/workout/${id}`);
    console.log("getWorkout", response);
    return response.data.data;
  } catch (error) {
    console.log("getWorkout Catch", error);
  }
};

const deleteWorkout = async (id) => {
  try {
    const response = axiosClient.delete(`/workout/${id}`);
    return response;
  } catch (error) {
    console.log("deleteWorkout customHook", error);
  }
};

//Users

const getUsers = async () => {
  try {
    const response = await axiosClient.get("/user");
    return response.data;
  } catch (error) {
    console.log("Error From getUsers customHook", error);
  }
};

//Requests

const getRequests = async () => {
  try {
    const response = await axiosClient.get("/request");
    return response;
  } catch (error) {
    console.log("getRequest in utils", error);
  }
};

export {
  getExercises,
  getExercise,
  getWorkouts,
  getWorkout,
  getFilteredExercises,
  getUserWorkouts,
  deleteWorkout,
  getUsers,
  getRequests,
  getFilteredWorkouts,
};
