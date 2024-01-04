import axios from 'axios'

const getExercises = async() =>{
  try {
    const exercises = await axios.get("http://localhost:3001/exercise")
    return exercises.data
  } catch (error) {
    console.log("getExercises Catch", error)
  }
}

const getWorkouts = async() =>{
  try {
    const workouts = await axios.get("http://localhost:3001/workout")
    return workouts.data.workouts
  } catch (error) {
    console.log("getWorkouts Catch", error)
  }
}

export  {getExercises, getWorkouts}




