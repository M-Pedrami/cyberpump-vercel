import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function Instructions({setExercise}) {
  const [instructions, setInstructions] = useState([""]);

  const handleInstructions = () =>{
    setExercise((prevExercise)=>({...prevExercise, instructions: instructions}))
  }

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
        <div key={index} className="mb-4">
          <Input
            type="text"
            label={`Step ${index + 1}`}
            value={instruction}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <Button onClick={() => handleRemoveStep(index)}>Remove Step</Button>
        </div>
      ))}
      <Button onClick={handleAddStep}>Add Next Step</Button>
      <Button onClick={handleInstructions}>Finalize Instructions</Button>
    </div>
  );
}
