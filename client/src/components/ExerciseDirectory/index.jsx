import { useEffect, useState } from "react";
import { getFilteredExercises } from "../../utils/customrHooks";
import { Checkbox } from "@material-tailwind/react";
import { MdOutlineFitnessCenter } from "react-icons/md";
import ExerciseCard from "../ExerciseCard";

export default function ExerciseDirectory() {
  const [exercises, setExercises] = useState(null);
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  useEffect(() => {
    getFilteredExercises({
      targetMuscle: selectedMuscles.join(","),
      level: selectedLevels.join(","),
      equipment: selectedEquipment.join(","),
    })
      .then((res) => {
        console.log(res.data.exercises);
        setExercises(res.data.exercises);
      })
      .catch((err) =>
        console.log("GETEXERCISE/CATCH/USEEFFECT/DIRECTORY", err)
      );
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

  return (
    <section className="p-6">
      <div className="params  w-full bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500 flex ">

      <div className="">
        <p className="header border-deep-orange-500 border-l-8 ml-3 text-left p-2  text-black italic font-bold">Filter by Target Muscle</p>
        <div className="checkBox">
          <Checkbox
            color="red"
            label="Chest"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Chest")}
            onChange={() => handleMuscleCheckboxChange("Chest")}
          />
          <Checkbox
            color="red"
            label="Glutes"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Glutes")}
            onChange={() => handleMuscleCheckboxChange("Glutes")}
          />
          <Checkbox
            color="red"
            label="Biceps"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Biceps")}
            onChange={() => handleMuscleCheckboxChange("Biceps")}
          />
          <Checkbox
            color="red"
            label="Traps"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Traps")}
            onChange={() => handleMuscleCheckboxChange("Traps")}
          />
          <Checkbox
            color="red"
            label="Triceps"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Triceps")}
            onChange={() => handleMuscleCheckboxChange("Triceps")}
          />
          <Checkbox
            color="red"
            label="Lats"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Lats")}
            onChange={() => handleMuscleCheckboxChange("Lats")}
          />
          <Checkbox
            color="red"
            label="Back"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Back")}
            onChange={() => handleMuscleCheckboxChange("Back")}
          />
          <Checkbox
            color="red"
            label="Quads"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Quads")}
            onChange={() => handleMuscleCheckboxChange("Quads")}
          />
          <Checkbox
            color="red"
            label="Shoulders"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedMuscles.includes("Shoulders")}
            onChange={() => handleMuscleCheckboxChange("Shoulders")}
          />
        </div>
      </div>
      <div className="">
        <p className="header border-deep-orange-500 border-l-8 ml-3 text-left p-2  text-black italic font-bold">Filter By Difficulty</p>
        <Checkbox
          color="red"
          label="Beginner"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedLevels.includes("Beginner")}
          onChange={() => handleLevelCheckboxChange("Beginner")}
        />
        <Checkbox
          color="red"
          label="Intermediate"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedLevels.includes("Intermediate")}
          onChange={() => handleLevelCheckboxChange("Intermediate")}
        />
        <Checkbox
          color="red"
          label="Advanced"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedLevels.includes("Advanced")}
          onChange={() => handleLevelCheckboxChange("Advanced")}
        />
        {/* Repeat for other level checkboxes */}
      </div>
      <div className="">
        <p className="header border-deep-orange-500 border-l-8 ml-3 text-left p-2  text-black italic font-bold">Filter By Equipment</p>
        <Checkbox
          color="red"
          label="Dumbbell"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedEquipment.includes("Dumbbell")}
          onChange={() => handleEquipmentCheckboxChange("Dumbbell")}
        />
        <Checkbox
          color="red"
          label="Barbell"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedEquipment.includes("Barbell")}
          onChange={() => handleEquipmentCheckboxChange("Barbell")}
        />
        <Checkbox
          color="red"
          label="Bodyweight"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedEquipment.includes("Bodyweight")}
          onChange={() => handleEquipmentCheckboxChange("Bodyweight")}
        />
        <Checkbox
          color="red"
          label="Cables"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedEquipment.includes("Cables")}
          onChange={() => handleEquipmentCheckboxChange("Cables")}
        />
        <Checkbox
          color="red"
          label="Kettlebells"
          icon={<MdOutlineFitnessCenter />}
          checked={selectedEquipment.includes("Kettlebells")}
          onChange={() => handleEquipmentCheckboxChange("Kettlebells")}
        />
      </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 p-10 w-full rounded-t-xl ">
        {exercises && exercises.map(exercise =>(
          <ExerciseCard data={exercise} key={exercise._id}/>
        ))}   
      </div>
    </section>
  );
}
