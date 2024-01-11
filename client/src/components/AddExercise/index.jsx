import { useState } from "react";
import Form from "./Form/Form";
import { useUser } from "../../utils/UserContext";
import axios from "axios";

export default function AddExercise() {
  const { activeUser } = useUser();
  const [exercise, setExercise] = useState({
    name: "",
    description: "",
    creator: activeUser && activeUser.id, // Make sure to set the  initial value to aktiveUser.id
    category: "",
    level: "",
    equipment: "",
    instructions: [],
    targetMuscle: "",
    video: {},
    thumbnail: "",
  });
  //handle the different states for the inputs with a function:
  const handleInputChange = (fieldName, value) => {
    setExercise((prevExercise) => ({
      ...prevExercise,
      [fieldName]: value,
    }));
  };
  //handle what happens when user clicks on submit button
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (const key in exercise) {
        if (key === "video") {
          for (const videoKey in exercise[key]) {
            formData.append("video", exercise[key][videoKey]);
            console.log(key, videoKey,exercise[key][videoKey])
          }
        } else {
          formData.append(
            key,
            exercise[key] //look it up later
          );
        }
      }

      const response = await axios.post(
        "http://localhost:3001/exercise",
        formData,
        {
          
          //adding this line is necessary for handling cookies, also the origin and credentials need to be added to the cors() middleware in the backend entry point
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log("handleSubmit/addExercise.jsx", error);
    }
  };
  return (
    <div>
      <Form
        exercise={exercise}
        setExercise={setExercise}
        handleClick={handleSubmit}
      />
    </div>
  );
}
