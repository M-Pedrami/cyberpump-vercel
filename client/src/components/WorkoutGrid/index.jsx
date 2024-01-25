
import WorkoutCard from "../WorkoutCard";
import { getFilteredWorkouts, getWorkouts } from "../../utils/customrHooks";
import { useEffect } from "react";
import { useState } from "react";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { Checkbox } from "@material-tailwind/react";
export default function WorkoutGrid() {
  const [workoutData, setWorkoutData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  useEffect(() => {
    getFilteredWorkouts({
      category: selectedCategory.join(","),
      level: selectedLevels.join(","),
    })
      .then((res) => setWorkoutData(res.data.workouts))
      .catch((err) => console.log("USEEFFECT WorkoutGrid Catch", err));
  }, [selectedCategory, selectedLevels]);

  const handleCategoryCheckboxChange = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((selected) => selected !== category)
        : [...prevSelected, category]
    );
  };

  const handleLevelCheckboxChange = (level) => {
    setSelectedLevels((prevSelected) =>
      prevSelected.includes(level)
        ? prevSelected.filter((selected) => selected !== level)
        : [...prevSelected, level]
    );
  };
  return (
    <section className="p-6 ">
      <div className="params flex gap-10 card form-container w-fit m-auto bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500 ">

      <div className="Params Category border-deep-orange-500 border-l-8 text-left  p-2 ">
        <p className="header  text-black font-bold italic">Sort By Category</p>
      <Checkbox
            color="red"
            label="Muscle Building"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedCategory.includes("Muscle Building")}
            onChange={() => handleCategoryCheckboxChange("Muscle Building")}
          />
          <Checkbox
            color="red"
            label="Strength"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedCategory.includes("Strength")}
            onChange={() => handleCategoryCheckboxChange("Strength")}
          />
          <Checkbox
            color="red"
            label="Cardio"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedCategory.includes("Cardio")}
            onChange={() => handleCategoryCheckboxChange("Cardio")}
          />
          <Checkbox
            color="red"
            label="Fat Loss"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedCategory.includes("Fat Loss")}
            onChange={() => handleCategoryCheckboxChange("Fat Loss")}
          />
          <Checkbox
            color="red"
            label="Celebrity"
            icon={<MdOutlineFitnessCenter />}
            checked={selectedCategory.includes("Celebrity")}
            onChange={() => handleCategoryCheckboxChange("Celebrity")}
          />
      </div>
      <div className="paramLevel border-deep-orange-500 border-l-8 text-left ms-3 p-2">
      <p className="header  text-black font-bold italic">Sort By Level</p>
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
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 gap-x-1 p-10">
        {workoutData &&
          workoutData.map((workout) => (
            <WorkoutCard key={workout._id} data={workout} setWorkoutData={setWorkoutData}  />
          ))}
      </div>
    </section>
  );
}
