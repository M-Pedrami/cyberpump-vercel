import { Select, Input, Option  } from "@material-tailwind/react";
export default function ExerciseInfo() {
  return (
    <div className="flex flex-col gap-4 m-auto w-96">
      <Input
            type="text"
            size="lg"
            label="Exercise Title"
/*             value={email}
 */            className="bg-transparent text-black"
          /*   onChange={(e) => {
              setEmail(e.target.value);
            }} */
          />
      <Input
            type="text"
            size="lg"
            label="Description"
/*             value={email}
 */            className="bg-transparent text-black"
          /*   onChange={(e) => {
              setEmail(e.target.value);
            }} */
          />
       <Select variant="outlined" label="Category">
        <Option>Muscle Building</Option>
        <Option>Cardio</Option>
        <Option>Fat Loss</Option>
        <Option>Strength</Option>
        <Option>Celebrity</Option>
      </Select>
      <Select variant="outlined" label="Level">
        <Option>Beginner</Option>
        <Option>Intermediate</Option>
        <Option>Advanced</Option>
      </Select>
      <Input
            type="text"
            size="lg"
            label="Equipment"
/*             value={email}
 */            className="bg-transparent text-black"
          /*   onChange={(e) => {
              setEmail(e.target.value);
            }} */
          />
    </div>
  )
}
