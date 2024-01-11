import { Input } from "@material-tailwind/react"
import { useState } from "react"
export default function ExerciseMedia() {
  const videoData = useState([])
  return (

    <div>
      <h1 className="text-2xl text-deep-orange-500"> Upload Exercise Media</h1>
      <Input
            type="file"
            size="lg"
            label="Upload"
/*             value={email}
 */            className="bg-transparent text-black"
          /*   onChange={(e) => {
              setEmail(e.target.value);
            }} */
          />
    </div>
  )
}
