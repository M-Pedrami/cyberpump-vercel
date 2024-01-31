import WorkoutCard from "../WorkoutCard";
import { getUserWorkouts } from "../../utils/customrHooks";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import UserRequest from "../UserRequest";

export default function UserWorkoutGrid() {

  //state for request Dialog Box
  const [open, setOpen] = useState(false);

  //handleOpen Dialog Box
  const handleOpen = () => setOpen(!open)
  


  const [workoutData, setWorkoutData] = useState([]);
  useEffect(() => {
    getUserWorkouts()
      .then((res) => {
        setWorkoutData(res);
      })
      .catch((err) => console.log("USEEFFECT WorkoutGrid Catch", err));
  }, []);
  return (
    <>
      {workoutData.length > 0 ? (
        workoutData.map((workout) => (
          <section className="p-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
            <WorkoutCard key={workout._id} data={workout} />
          </section>
        ))
      ) : (
        <section className="p-6 flex flex-col gap-10 items-center">
          <p className="text-4xl text-white">
            You do not have any Customized Workouts yet.
          </p>
          <button className="border border-deep-orange-500 text-sm font-bold w-fit py-4 px-6 rounded-xl hover:bg-deep-orange-700 hover:bg-opacity-20 text-white" onClick={handleOpen}>
            REQUEST WORKOUT
          </button>
          {/* Dialog Box */}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="bg-transparent border-b-8 border-deep-orange-700"
      >
       
        <DialogBody className="">
          <UserRequest handleOpen={handleOpen} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
        </section>
      )}
    </>
  );
}
