import { FaDumbbell } from "react-icons/fa";
import { FaStopwatch20 } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiStrong } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { GiSmallFire } from "react-icons/gi";
import { PiBicycleFill } from "react-icons/pi";
import { FaTrash } from "react-icons/fa";
import { deleteExercise } from "../../utils/customrHooks";
import { useUser } from "../../utils/UserContext";

export default function ExerciseCard({ data, setData }) {
  const {activeUser} = useUser()
  const isAdmin = activeUser && activeUser.role==="admin"
  const handleDelete =  () =>{
    deleteExercise(data._id)
    .then(res=>setData((prevData)=>{
      return prevData.filter((exercise)=>{
        return exercise._id != data._id
      })
    }))
    .catch(err=>console.log("ERROR ExerciseCard/HandleDelete"))
  }
  return (
    <div className=" relative">
      <Link to={`/exercise/${data._id}`}>
        <div className="group text-white max-w-96    bg-deep-orange-700 bg-opacity-15 flex flex-col  h-[33rem] pb-5 m-auto border-t-8 rounded-3xl border-deep-orange-700 hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer  ">
          <div className="image">
            <img src={data.thumbnail} className=" rounded-t-xl w-96 h-56" />
          </div>
          <h1 className="header italic  group-hover:text-white text-2xl p-2 font-bold ">
            {data.name}
          </h1>
          <p className="description p-2 group-hover:text-white">
            {data.description}
          </p>
          <div className="icons p-2">
            <p className="flex items-center  gap-2 italic ">
              <GiStrong className=" text-deep-orange-700 group-hover:text-white" />{" "}
              {data.category}
            </p>
            <p className="flex items-center  gap-2 italic ">
              <FaDumbbell className=" text-deep-orange-700 group-hover:text-white" />{" "}
              {data.level}
            </p>
            <p className="flex items-center  gap-2 italic ">
              <FaDumbbell className=" text-deep-orange-700 group-hover:text-white" />{" "}
              {data.equipment}
            </p>
          </div>
        </div>
      </Link>
      {isAdmin && <FaTrash className="text-xl text-white absolute right-2 bottom-2 xl:right-12 hover:text-deep-orange-700 transition-all cursor-pointer" onClick={handleDelete}/> }
      
    </div>
  );
}
