import { Input } from "@material-tailwind/react";
export default function ExerciseMedia({ exercise,setExercise }) {
  return (
    <div>
      <h1 className="text-2xl text-deep-orange-500"> Upload Exercise Media</h1>
      <Input
        type="file"
        size="lg"
        label="Upload"
        className="bg-transparent text-black"
        onChange={(e) => {
          const files = e.target.files;
          console.log(":::::::::::::::::",files)
          setExercise((prevExercise) =>({
            ...prevExercise, video: files

          }),
          );
          
        }}
        multiple
      />
    </div>
  );
}
