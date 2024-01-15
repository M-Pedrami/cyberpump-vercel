import {
  Input,
  Textarea,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { getFilteredExercises } from "../../utils/customrHooks";
import { Checkbox } from "@material-tailwind/react";
import { MdOutlineFitnessCenter } from "react-icons/md";

export default function AddWorkout() {
  const [workout, setWorkout] = useState({
    name: "",
    description: "",
    exercises: [],
    category: "Muscle Building",
    level: "Beginner",
    createdFor: "65986f876a477c521d93f667",
    thumbnail: "",
  });

  //state for exercises to be added in the workout
  const [exercises, setExercises] = useState([]);
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  //fething the exercises by hitting the backend path
  useEffect(() => {
    getFilteredExercises({
      targetMuscle: selectedMuscles.join(","),
      level: selectedLevels.join(","),
      equipment: selectedEquipment.join(","),
    })
      .then((res) => setExercises(res.data.exercises))
      .catch((err) => console.log("useEffect/Addworkout", err));
  }, [selectedMuscles, selectedLevels, selectedEquipment]);
  const handleMuscleCheckboxChange = (muscle) => {
    setSelectedMuscles((prevSelected) =>
      prevSelected.includes(muscle)
        ? prevSelected.filter((selected) => selected !== muscle)
        : [...prevSelected, muscle]
    );
  };

  const handleLevelCheckboxChange = (level) => {
    setSelectedLevels((prevSelected) =>
      prevSelected.includes(level)
        ? prevSelected.filter((selected) => selected !== level)
        : [...prevSelected, level]
    );
  };

  const handleEquipmentCheckboxChange = (equipment) => {
    setSelectedEquipment((prevSelected) =>
      prevSelected.includes(equipment)
        ? prevSelected.filter((selected) => selected !== equipment)
        : [...prevSelected, equipment]
    );
  };

  //handling the selection of exercises for workout
  const addExerciseToWorkout = (exerciseId) => {
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      exercises: [...prevWorkout.exercises, exerciseId],
    }));
  };

  const handleAddExercises = () => {
    // Add the selected exercises to the workout
    setWorkout((prevWorkout) => ({
      ...prevWorkout,
      exercises: [...prevWorkout.exercises],
    }));
  };
  
 
  //handle what happens when user clicks on submit button
  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/workout",
        workout,
        {
          //adding this line is necessary for handling cookies, also the origin and credentials need to be added to the cors() middleware in the backend entry point
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log("handleSubmit/addworkout.jsx", error);
    }
  };

  return (
    <section className="p-6">
      <h1 className="text-center text-3xl text-white">ADD WORKOUT</h1>
      <div className="Card">
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
        <Input
          type="file"
          size="lg"
          label="Upload"
          className="bg-transparent text-black"
          onChange={(e) => {
            const files = e.target.files;
            console.log(":::::::::::::::::", files);
            setWorkout((prevWorkout) => ({
              ...prevWorkout,
              thumbnail: files[0],
            }));
          }}
        />
       
      </div>
      <Button type="button" onClick={handleClick} className="text-center ">
        Add Workout
      </Button>
    </section>
  );
}
