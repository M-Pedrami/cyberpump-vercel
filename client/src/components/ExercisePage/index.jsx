import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExercise } from "../../utils/customrHooks";
export default function ExercisePage() {
  const [exercise, setExercise] = useState();
  const { id } = useParams();
  useEffect(() => {
    getExercise(id)
      .then((res) => setExercise(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(":::", exercise);
  return (
    <section className="">
  {exercise && (
    <div className="Card flex flex-col text-left p-10 w-3/4 m-auto">
      <div className="bg-blue-gray-50 p-8 rounded-t-xl border-t-8 border-t-deep-orange-500">
        <h1 className="text-4xl  text-left font-bold">
          {exercise.name}
        </h1>
      </div>
      <div className="CardVideos flex space-x-0 justify-evenly p-5 gap-4 mt-4 ">
        {exercise.video.map((video, index) => (
          <video
            key={index}  // Add a unique key for each video
            src={video}
            autoPlay
            muted
            loop
            controls  // Add controls attribute
            className="w-1/2 rounded-3xl border-t-4 border-b-8 border-orange-700"
          ></video>
        ))}
      </div>
      <div className="w-full m-auto bg-blue-gray-50 p-8 rounded-t-xl border-t-8 border-t-deep-orange-500">
        {exercise.instructions.map((instruction, index) => (
          <p key={index} className="mb-5">
            <span className="italic text-lg text-deep-orange-700 font-body font-bold">
              Step {index + 1}:
            </span>{" "}
            <span className="">{instruction}</span>
          </p>
        ))}
      </div>
    </div>
  )}
</section>
  );
}
