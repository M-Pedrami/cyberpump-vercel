import React, { useEffect, useState } from "react";
import { Input, Button, Textarea } from "@material-tailwind/react";
import { CiCircleRemove } from "react-icons/ci";

export default function Instructions({ setExercise }) {
  const [instructions, setInstructions] = useState([""]);

  useEffect(() => {
    setExercise((prevExercise) => {
      return {
        ...prevExercise,
        instructions: instructions.map((step) => step.trim()), // Trim each step
      };
    });
  }, [instructions]);

  const handleAddStep = () => {
    setInstructions((prevInstructions) => [...prevInstructions, ""]);
  };

  const handleInputChange = (index, value) => {
    setInstructions((prevInstructions) => {
      const newInstructions = [...prevInstructions];
      newInstructions[index] = value;
      return newInstructions;
    });
  };

  const handleRemoveStep = (index) => {
    setInstructions((prevInstructions) => {
      const newInstructions = [...prevInstructions];
      newInstructions.splice(index, 1);
      return newInstructions;
    });
  };

  return (
    <div>
      {instructions.map((instruction, index) => (
        <div key={index} className="">
          <div className="steps flex items-center">
            <Textarea
              type="text"
              label={`Step ${index + 1}`}
              value={instruction}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-[500px]"
            />
            <Button
              onClick={() => handleRemoveStep(index)}
              className="bg-transparent w-20 shadow-none hover:shadow-none hover:text-3xl translate-all duration-300"
            >
              <CiCircleRemove className="text-red-500 text-4xl" />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <Button className="w-fit" onClick={handleAddStep}>
          Add Next Step
        </Button>
      </div>
    </div>
  );
}
