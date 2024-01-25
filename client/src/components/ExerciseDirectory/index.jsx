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
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFilteredExercises({
          targetMuscle: selectedMuscles.join(","),
          level: selectedLevels.join(","),
          equipment: selectedEquipment.join(","),
        });
        setExercises(res.data.exercises);
        setCurrentPage(1); // Reset to the first page when filters change
      } catch (err) {
        console.log("GETEXERCISE/CATCH/USEEFFECT/DIRECTORY", err);
      }
    };

    fetchData();
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

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="p-6">
      <div className="params  w-[90%] m-auto bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500 flex ">
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
        {currentExercises &&
          currentExercises.map((exercise) => (
            <ExerciseCard data={exercise} setData={setExercises} key={exercise._id} />
          ))}
      </div>
      <div className="pagination mt-4">
      {exercises && (
        <ul className="flex justify-center space-x-2">
          {Array.from({ length: Math.ceil(exercises.length / exercisesPerPage) }, (_, i) => (
            <li key={i} className={`cursor-pointer inline-block px-3 py-2 text-sm rounded-md transition duration-300 ${currentPage === i + 1 ? 'bg-deep-orange-500 text-white font-bold' : 'bg-white text-black hover:bg-gray-200'}`} onClick={() => paginate(i + 1)}>
              {i + 1}
            </li>
          ))}
        </ul>
      )}
    </div>
    </section>
  );
}
