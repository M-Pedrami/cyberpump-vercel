import WorkoutCard from "../WorkoutCard"
import {getUserWorkouts} from "../../utils/customrHooks"
import { useEffect } from "react"
import { useState } from "react";
export default function UserWorkoutGrid() {
  const [workoutData, setWorkoutData] = useState([]);
  useEffect(()=>{
    getUserWorkouts()
    .then(res=>{setWorkoutData(res); console.log(":::::::::",res)})
    .catch(err=>(console.log("USEEFFECT WorkoutGrid Catch", err)))
  }, [])
  return (
    <section className="p-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
   {workoutData && workoutData.map(workout=><WorkoutCard key={workout._id} data={workout}/>)}
    </section>
  )
}
