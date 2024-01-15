import { Input } from "@material-tailwind/react";
export default function ExerciseMedia({ exercise,setExercise }) {
  return (
    <div className="" >
      <Input
        type="file"
        size="lg"
        label="Upload"
        className="bg-transparent text-black"
        onChange={(e) => {
          const files = e.target.files;
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
