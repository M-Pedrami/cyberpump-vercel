import { useState } from "react";
import ExerciseInfo from "./ExerciseInfo";
import ExerciseMedia from "./ExerciseMedia";

export default function Form() {
  const [step, setStep] = useState(0);
  const headers = ["Enter Exercise Info", "Enter Exercise Media"];
  const handlePrev = () => {
    setStep((currStep) => currStep - 1);
  };
  const handleNext = () => {
    setStep((currStep) => currStep + 1);
  };

  const PageDisplay = () => (step === 0 ? <ExerciseInfo /> : <ExerciseMedia />);

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
          <button onClick={handleNext} disabled={step === 1}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
