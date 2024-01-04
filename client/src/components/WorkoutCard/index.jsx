
import { FaDumbbell } from "react-icons/fa";
import { FaStopwatch20 } from "react-icons/fa";
import { Link } from "react-router-dom";


 
export default function WorkoutCard({data}) {
  return (
    <Link to="/workout/:id">
    
    <div className="group text-white    bg-deep-orange-700 bg-opacity-15 flex flex-col max-w-96 pb-5 m-auto border-t-8 rounded-3xl border-deep-orange-700 hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer  ">
      <div className="image"><img src={data.thumbnail} className=" rounded-t-xl" /></div>
      <h1 className="header italic  group-hover:text-white text-2xl p-2 font-bold ">{data.name}</h1>
      <p className="description p-2 group-hover:text-white">{data.description}</p>
      <div className="icons p-2">
        <p className="flex items-center  gap-2 italic "><FaDumbbell className=" text-deep-orange-700 group-hover:text-white"/> {data.level}</p>
        <p className="flex items-center italic  gap-2"><FaStopwatch20 className="text-deep-orange-700 group-hover:text-white"/> {data.exercises?.length + ""} Exercises</p>
      </div>
    </div>
    </Link>
  );
}