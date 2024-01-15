import WorkoutCard from "../WorkoutCard"
import {getWorkouts} from "../../utils/customrHooks"
import { useEffect } from "react"
import { useState } from "react";
export default function WorkoutGrid() {
  const [workoutData, setWorkoutData] = useState([]);
  useEffect(()=>{
    getWorkouts()
    .then(res=>setWorkoutData(res))
    .catch(err=>(console.log("USEEFFECT WorkoutGrid Catch", err)))
  }, [workoutData])
  return (
    <section className="p-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
   {workoutData.map(workout=><WorkoutCard key={workout._id} data={workout}/>)}
    </section>
  )
}
