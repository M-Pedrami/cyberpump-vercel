import { useEffect, useState } from "react";
import Form from "./Form/Form";
import { useUser } from "../../utils/UserContext";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from "react-toastify";

export default function AddExercise({ updateExercises, handleOpen }) {
  const { activeUser } = useUser();
  const [exercise, setExercise] = useState({
    name: "",
    description: "",
    category: "",
    level: "",
    equipment: "",
    instructions: [],
    targetMuscle: "",
    video: {},
    thumbnail: "",
  });
  //handle what happens when user clicks on submit button
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      for (const key in exercise) {
        if (key === "video") {
          for (const videoKey in exercise[key]) {
            formData.append("video", exercise[key][videoKey]);
          }
        } else if (key === "instructions") {
          // Handle instructions as an array
          exercise[key].forEach((step, index) => {
            formData.append(`instructions[${index}]`, step);
          });
        } else {
          formData.append(
            key,
            exercise[key] //look it up later
          );
        }
      }

      const response = await axiosClient.post("/exercise", formData);

      toast.success("Exercise Created", {
        theme: "dark",
      });
      if (updateExercises) {
        updateExercises((prev) => {
          return [...prev, response.data];
        });
        handleOpen(false);
      }
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
      <ToastContainer theme="dark" />
    </div>
  );
}
