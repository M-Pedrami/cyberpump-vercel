import axios from 'axios'

const getExercises = async() =>{
  try {
    const exercises = await axios.get("http://localhost:3001/exercise")
    console.log("getExercises Try",exercises.data)
    return exercises.data
  } catch (error) {
    console.log("getExercises Catch", error)
  }
}

export default getExercises