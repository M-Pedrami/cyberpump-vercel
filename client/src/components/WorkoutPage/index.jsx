import React, { useEffect, useState } from "react";
import Exercise from "../Exercise";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

import {getExercises} from "../../utils/customrHooks";

export default function WorkoutPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesData, setExercisesData] = useState([]);
  const exercisesPerPage = 1;

  //getting the exercises from backend
  useEffect(() => {
    getExercises()
      .then((res) => {
        setExercisesData(res.exercises);
        console.log("USEEFFECT", res.exercises);
      })
      .catch((err) => console.log("USEEFFECT", err));
  }, []);

  const totalExercises = exercisesData.length;
  const totalPages = Math.ceil(totalExercises / exercisesPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * exercisesPerPage;
  const endIndex = Math.min(startIndex + exercisesPerPage, totalExercises);
  const exercisesToDisplay = exercisesData?.slice(startIndex, endIndex);

  return (
    <section className="p-6">
      <div className=" mt-10 mb-0 flex items-center justify-center gap-4 grow-0">
        <button
          className="w-10"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          <GrCaretPrevious className="text-5xl  text-deep-orange-700 hover:text-4xl transition-all duration-500 hover:text-opacity-50" />
        </button>
        <span className="text-xl font-bold text-white  ">
          {" "}
          Exercise {currentPage} of {totalPages}{" "}
        </span>
        <button
          className="w-10"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          <GrCaretNext className="text-5xl  text-deep-orange-700 hover:text-4xl transition-all duration-500 hover:text-opacity-50 " />
        </button>
      </div>
      {exercisesToDisplay?.map((exercise) => (
        <Exercise key={exercise.id} exercise={exercise} />
      ))}
      <p className="text-white text-center text-5xl">THIS IS A TEST</p>
    </section>
  );
}
