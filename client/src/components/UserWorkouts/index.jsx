import WorkoutCard from "../WorkoutCard"
import {getUserWorkouts} from "../../utils/customrHooks"
import { useEffect } from "react"
import { useState } from "react";
export default function UserWorkoutGrid() {
  const [workoutData, setWorkoutData] = useState([]);
  useEffect(()=>{
    getUserWorkouts()
    .then(res=>{setWorkoutData(res)})
    .catch(err=>(console.log("USEEFFECT WorkoutGrid Catch", err)))
  }, [])
  return (
    
    <section className="p-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
    {workoutData.length > 0 ? (
      workoutData.map(workout => (
        <WorkoutCard key={workout._id} data={workout} />
      ))
    ) : (
      <p className="text-4xl text-white m-auto w-96">Your Requested Workouts Will Be Displayed Here </p>
    )}
  </section>
  )
}
