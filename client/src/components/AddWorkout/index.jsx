import {
  Input,
  Textarea,
  Select,
  Option,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { getFilteredExercises } from "../../utils/customrHooks";
import { MdLabelImportantOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import AddExercise from "../AddExercise";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function AddWorkout() {
  const { id } = useParams();
  const [workout, setWorkout] = useState({
    name: "",
    description: "",
    exercises: [],
    category: "",
    level: "",
    createdFor: id,
    thumbnail: "",
  });

  //state for Dialog
  const [open, setOpen] = useState(false);

  //handleOpen for Dialog
  const handleOpen = () => setOpen(!open);

  //state for exercises to be displayed in the dropDown Menue
  const [exercises, setExercises] = useState([]);

  //state for the added exercises to the workout
  const [selectedExercise, setSelectedExercise] = useState("");

  //handleExercise for add Exercises button
  const handleAddExercise = () => {
    // Add the selected exercise to the workout state
    if (selectedExercise) {
      setWorkout((prevWorkout) => ({
        ...prevWorkout,
        exercises: [...prevWorkout.exercises, selectedExercise],
      }));

      // Reset the selected exercise
    }
    console.log(workout.exercises);
  };

  //fething the exercises to be added in the workout
  useEffect(
    () => {
      getFilteredExercises()
        .then((res) => {
          setExercises(res.data.exercises);
          setSelectedExercise(res.data.exercises[0]);
        })
        .catch((err) => console.log("useEffect/Addworkout", err));
    },
    [
      /* exercises */
    ]
  );

  //handleWorkout
  const handleClick = async () => {
    try {
      const formData = new FormData();
      for (const key in workout) {
        if (key === "exercises") {
          // Handle exercises as an array
          workout[key].forEach((exercise, index) => {
            formData.append(`exercises[${index}]`, exercise);
          });
        } else {
          formData.append(key, workout[key]);
        }
      }
      const response = await axiosClient.post("/workout", formData);
      console.log(response);
      toast.success("Workout Created Successfully", {
        theme: "dark",
      })
    } catch (error) {
      console.log("handleSubmit/addExercise.jsx", error);
    }
  };

  return (
    <section className="p-6">
      <ToastContainer theme="dark" />

      <div className="card form-container w-fit m-auto bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500">
        <div className="header border-deep-orange-500 border-l-8 mb-6 text-left p-2 text-black">
          <h1 className="text-2xl font-bold italic">Add Workout</h1>
          <p className="text-xs italic">
            {" "}
            Enter Information for the Workout Plan
          </p>
        </div>

        <div className=" flex flex-col gap-4 m-auto w-[26rem]">
          <Input
            type="text"
            size="lg"
            label="Workout Title"
            value={workout.name}
            className="bg-transparent text-black"
            onChange={(e) => {
              setWorkout((prevWorkout) => ({
                ...prevWorkout,
                name: e.target.value,
              }));
            }}
          />
          <Textarea
            type="text"
            size="lg"
            label="Description"
            value={workout.description}
            className="bg-transparent text-black"
            onChange={(e) => {
              setWorkout((prevWorkout) => ({
                ...prevWorkout,
                description: e.target.value,
              }));
            }}
          />
          <Select
            variant="outlined"
            value={workout.category}
            label="Category"
            onChange={(value) => {
              setWorkout((prevWorkout) => ({
                ...prevWorkout,
                category: value,
              }));
            }}
          >
            <Option value="Muscle Building">Muscle Building</Option>
            <Option value="Cardio">Cardio</Option>
            <Option value="Fat Loss">Fat Loss</Option>
            <Option value="Strength">Strength</Option>
            <Option value="Celebrity">Celebrity</Option>
          </Select>
          <Select
            variant="outlined"
            value={workout.level}
            label="Level"
            onChange={(value) => {
              setWorkout((prevWorkout) => ({
                ...prevWorkout,
                level: value,
              }));
            }}
          >
            <Option value="Beginner">Beginner</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
          </Select>
          <Input
            type="file"
            size="lg"
            label="Upload"
            className="bg-transparent text-black"
            onChange={(e) => {
              const file = e.target.files[0];
              setWorkout((prevWorkout) => ({
                ...prevWorkout,
                thumbnail: file,
              }));
            }}
          />
          <div className="flex flex-wrap">
            <MdLabelImportantOutline className="text-deep-orange-500" />
            <p className="text-xs italic">
              {" "}
              Select an Exercise From the Menu and Add, or Create from Scratch
              and Add
            </p>
          </div>
          <div className="selectExercises flex items-center gap-4 ">
            {!!exercises.length && (
              <Select
                variant="outlined"
                value={selectedExercise}
                label="exercise"
                onChange={(value) =>
                  setSelectedExercise(() => {
                    console.log(value);
                    return value;
                  })
                }
              >
                {exercises.map((exercise) => {
                  return <Option value={exercise._id}>{exercise.name}</Option>;
                })}
              </Select>
            )}
            <div className="selectExercise"></div>
            <Button
              onClick={handleAddExercise}
              className="rounded-full flex flex-col content-center items-center px-1 py-1 w-12 "
            >
              <IoMdAdd className="text-2xl" />
            </Button>
            <Button
              size="sm"
              onClick={handleOpen}
              className="text-xs py-2 w-32"
              type="button"
            >
              Create
            </Button>
          </div>

          <Button type="button" onClick={handleClick} className=" mt-3 w-52">
            Add Workout
          </Button>
        </div>

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
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody className="">
            <AddExercise
              updateExercises={setExercises}
              handleOpen={handleOpen}
            />
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
      </div>
    </section>
  );
}
