import { useState } from "react";
import ExerciseInfo from "./ExerciseInfo";
import ExerciseMedia from "./ExerciseMedia";
import { Button } from "@material-tailwind/react";
import Instructions from "./Instructions";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

export default function Form({ exercise, setExercise, handleClick, isValid }) {
  const [step, setStep] = useState(0);
  const headers = [
    " Exercise Information",
    " Exercise Instructions",
    "Enter Exercise Media",
  ];
  const handlePrev = () => {
    setStep((currStep) => currStep - 1);
  };
  const handleNext = () => {
    setStep((currStep) => currStep + 1);
  };

  const PageDisplay = () =>
    step === 0 ? (
      <ExerciseInfo exercise={exercise} setExercise={setExercise} />
    ) : step === 1 ? (
      <Instructions exercise={exercise} setExercise={setExercise} />
    ) : (
      <ExerciseMedia exercise={exercise} setExercise={setExercise} />
    );

  return (
    <section className="p-6 ">
      <div className="progressbar"></div>
      <div className="form-container w-fit m-auto bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500">
        <div className="header border-deep-orange-500 border-l-8 mb-6 text-left p-2 text-black">
          <h1 className=" text-2xl font-bold italic ">{headers[step]}</h1>
          <div className="text-left text-xs">
            {step === 0 ? (
              <p>General Information about your Exercise</p>
            ) : step === 1 ? (
              <p>
                Enter The Instructions
                <span className="font-bold italic"> Step by Step.</span> Once
                finished adding all the steps click on
                 <span className="font-bold italic"> Next</span>
              </p>
            ) : (
              <>
                <p>
                  Upload Videos and Thumbnail for the Execise.
                  <span className="font-bold italic"> Maximum of 2 videos </span>
                   are allowed
                </p>
                <p className="text-xs italic text-gray-600">
                  Allowed Video Formats : MP4, AVI, Webp, FLV
                </p>
                <p className="text-xs italic text-gray-600">
                  Allowed Image Formats : JPG, PNG
                </p>
              </>
            )}
          </div>
        </div>
        <div className="body mb-3 w-fit">{PageDisplay()}</div>

        <div className="w-1/2 flex gap-2 content-center ">
          <Button
            onClick={handlePrev}
            disabled={step === 0}
            className="disabled:cursor-not-allowed  "
          >
            Back
          </Button>
          <Button
            onClick={step === 2 ? handleClick : handleNext}
            className="disabled:cursor-not-allowed "
          >
            {step === 2 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </section>
  );
}
