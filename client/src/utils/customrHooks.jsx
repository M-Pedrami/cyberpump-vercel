import axios from "axios";

//Exercises

const getExercises = async () => {
  try {
    const exercises = await axios.get("http://localhost:3001/exercise");
    return exercises.data;
  } catch (error) {
    console.log("getExercises Catch", error);
  }
};


//Workouts

const getFilteredExercises = async (filters) => {
  try {
    const exercises = await axios.get(
      "http://localhost:3001/exercise/filtered",
      {
        params: filters,
      }
    );
    console.log("FROM FETCH HOOK", exercises);
    return exercises;
  } catch (error) {
    console.log("getExercises Catch", error);
  }
};

const getWorkouts = async () => {
  try {
    const workouts = await axios.get("http://localhost:3001/workout",
    {withCredentials:  true});
    return workouts.data.workouts;
  } catch (error) {
    console.log("getWorkouts Catch", error);
  }
};

const getUserWorkouts = async () =>{
  try {
   const response = await axios.get("http://localhost:3001/user/workouts", {withCredentials: true})
   return response.data 
  } catch (error) {
    console.log("getUsersWorkout(utils", error )
  }
}

const getWorkout = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/workout/${id}`);
    console.log("getWorkout", response);
    return response.data.data;
  } catch (error) {
    console.log("getWorkout Catch", error);
  }
};



const deleteWorkout = async (id) => {
  try {
    const response = axios.delete(`http://localhost:3001/workout/${id}`, {
      withCredentials: true,
    });
    return response
  } catch (error) {
    console.log("deleteWorkout customHook", error);
  }
};

//Users

const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/user", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("Error From getUsers customHook", error);
  }
};


//Requests

const getRequests = async () => {
  try {
    const response = await axios.get("http://localhost:3001/request", {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log("getRequest in utils", error);
  }
};

export {
  getExercises,
  getWorkouts,
  getWorkout,
  getFilteredExercises,
  getUserWorkouts,
  deleteWorkout,
  getUsers,
  getRequests
};
