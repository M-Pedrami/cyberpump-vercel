import Image from "../../assets/Background.jpg"
import { FaDumbbell } from "react-icons/fa";
import { FaStopwatch20 } from "react-icons/fa";


 
export default function WorkoutCard() {
  return (
    <div className="group text-white    bg-deep-orange-700 bg-opacity-15 flex flex-col max-w-96 pb-5 m-auto border-t-8 rounded-3xl border-deep-orange-700 hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer  ">
      <div className="image w-96"><img src={Image} alt="" /></div>
      <h1 className="header italic  group-hover:text-white text-2xl p-2 font-bold w-96">Lorem ipsum dolor sit amet.</h1>
      <p className="description  w-96 p-2 group-hover:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus atque, saepe delectus exercitationem esse velit.</p>
      <div className="icons p-2">
        <p className="flex items-center  gap-2 italic "><FaDumbbell className=" text-deep-orange-700 group-hover:text-white"/> Advanced</p>
        <p className="flex items-center italic  gap-2"><FaStopwatch20 className="text-deep-orange-700 group-hover:text-white"/> 3 Exercises</p>
      </div>
    </div>
  );
}