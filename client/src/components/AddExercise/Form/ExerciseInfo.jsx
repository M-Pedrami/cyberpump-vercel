import { Select, Input, Option } from "@material-tailwind/react";
export default function ExerciseInfo({ exercise, setExercise }) {
  return (
    <div className="flex flex-col gap-4 m-auto w-96">
      <Input
        type="text"
        size="lg"
        label="Exercise Title"
        value={exercise.name}
        className="bg-transparent text-black"
        onChange={(e) => {
          setExercise((prevExercise) => ({
            ...prevExercise,
            name: e.target.value,
          }));
        }}
      />
      <Input
        type="text"
        size="lg"
        label="Description"
        value={exercise.description}
        className="bg-transparent text-black"
        onChange={(e) => {
         
          setExercise((prevExercise) => ({
            ...prevExercise,
            description: e.target.value,
          }));
        }}
      />
      <Select
        variant="outlined"
        value={exercise.category}
        label="Category"
        onChange={(value) => {
          
           setExercise((prevExercise) => ({
            ...prevExercise,
            category: value
          })); 
        }}
      >
        <Option>Muscle Building</Option>
        <Option value="Cardio">Cardio</Option>
        <Option value="Fat Loss">Fat Loss</Option>
        <Option>Strength</Option>
        <Option>Celebrity</Option>
      </Select>
      <Select
        variant="outlined"
        label="Level"
        onChange={(value) => {
          setExercise((prevExercise) => ({
            ...prevExercise,
            level: value
          }));
        }}
      >
        <Option value="Beginner">Beginner</Option>
        <Option>Intermediate</Option>
        <Option>Advanced</Option>
      </Select>
      <Input
        type="text"
        size="lg"
        label="Equipment"
        value={exercise.equipment}
        className="bg-transparent text-black"
        onChange={(e) => {
          setExercise((prevExercise) => ({
            ...prevExercise,
            equipment: e.target.value,
          }));
        }}
      />
    </div>
  );
}
