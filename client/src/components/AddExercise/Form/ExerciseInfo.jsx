import { Select, Input, Option, Textarea } from "@material-tailwind/react";
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
      <Select
        variant="outlined"
        value={exercise.category}
        label="Category"
        onChange={(value) => {
          setExercise((prevExercise) => ({
            ...prevExercise,
            category: value,
          }));
        }}
      >
        <Option value="Muscle Building">Muscle Building</Option>
        <Option value="Cardio">Cardio</Option>
        <Option value="Fat Loss">Fat Loss</Option>
        <Option value="Strength">Strength</Option>
        <Option value="Celebrity">Celebrity</Option>
      </Select>
      <Select
        variant="outlined"
        label="Level"
        value={exercise.level}
        onChange={(value) => {
          setExercise((prevExercise) => ({
            ...prevExercise,
            level: value,
          }));
        }}
      >
        <Option value="Beginner">Beginner</Option>
        <Option value="Intermediate">Intermediate</Option>
        <Option value="Advanced">Advanced</Option>
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
      <Textarea
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
    </div>
  );
}
