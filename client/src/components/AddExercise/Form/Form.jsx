import { useState } from "react";
import ExerciseInfo from "./ExerciseInfo";
import ExerciseMedia from "./ExerciseMedia";
import { Button } from "@material-tailwind/react";
import Instructions from "./Instructions";


export default function Form({exercise, setExercise, handleClick}) {
  const [step, setStep] = useState(0);
  const headers = ["Enter Exercise Info","Enter Exercise Instructions", "Enter Exercise Media"];
  const handlePrev = () => {
    setStep((currStep) => currStep - 1);
  };
  const handleNext = () => {
    setStep((currStep) => currStep + 1);
  };

  const PageDisplay = () => (step === 0 ? <ExerciseInfo exercise={exercise} setExercise = {setExercise} /> : step === 1 ? <Instructions exercise={exercise} setExercise = {setExercise} /> : <ExerciseMedia exercise={exercise} setExercise = {setExercise}/>);

  return (
    <section className="p-6 bg-white">
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header">
          <h1 className=" text-3xl text-black">{headers[step]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="foot">
          <button onClick={handlePrev} disabled={step === 0}>
            Prev
          </button>
          <button onClick={handleNext} disabled={step === 2}>
            Next
          </button>
          <Button style={{ display: step === 2 ? "block" : "none" }} type="submit" onClick={handleClick}>
  Add Exercise
</Button>

        </div>
      </div>
    </section>
  );
}
