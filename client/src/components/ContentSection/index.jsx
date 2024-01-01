import { MdFitnessCenter } from "react-icons/md";
import { GiTronArrow } from "react-icons/gi";
import { GiSmallFire } from "react-icons/gi";
import { PiBicycleFill } from "react-icons/pi";
import { GiStrong } from "react-icons/gi";
import Background from "../../assets/Background.jpg"





export default function ContentSection() {
  return (
    <section className="py-48 flex flex-col items-center bg-black " style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${Background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <h1 className="text-white text-4xl font-extrabold text-center tracking-wide"><span className=" text-deep-orange-500">JUMP</span> <span className=" italic">RIGHT</span> IN</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-12 ">
      <div className="flex px-5 py-3 text-white border-2 rounded-3xl border-deep-orange-500 bg-deep-orange-700 bg-opacity-10 hover:hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer  ">
        <div className="group flex flex-col items-center gap-4 mt-2 group-hover:text-white" >
          <h3 className="text-white text-lg font-semibold italic">Cardio Exercises</h3>
          {<PiBicycleFill className=" text-deep-orange-500 text-5xl group-hover:text-white"/>}
          <p className=" text-center w-72 text-md">These workouts will help you burn some serious calories. Whether you're looking for machine-based workout plans or shorter, we've got you covered. </p>
          <button className="bg-transparent font-semibold  flex items-center gap-2 mt-6 text-white">Check it Out{<GiTronArrow/>}</button>
        </div>  
      </div>
      <div className="flex px-5 py-3 text-white border-2 rounded-3xl border-deep-orange-500 bg-deep-orange-700 bg-opacity-10 hover:hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer  ">
        <div className="group flex flex-col items-center gap-4 mt-2 group-hover:text-white" >
          <h3 className="text-white text-lg font-semibold italic">Muscle Building</h3>
          {<MdFitnessCenter className=" text-deep-orange-500 text-5xl group-hover:text-white"/>}
          <p className=" text-center w-72 text-md">Power up your physique with targeted muscle-building workouts, sculpting strength, and unlocking your full fitness potential.</p>
          <button className="bg-transparent font-semibold  flex items-center gap-2 mt-6 text-white">Check it Out{<GiTronArrow/>}</button>
        </div>  
      </div>
      <div className="flex px-5 py-3 text-white border-2 rounded-3xl border-deep-orange-500 bg-deep-orange-700 bg-opacity-10 hover:hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer ">
        <div className="group flex flex-col items-center gap-4 mt-2 group-hover:text-white" >
          <h3 className="text-white text-lg font-semibold italic">Strength Training</h3>
          {<GiStrong className=" text-deep-orange-500 text-5xl group-hover:text-white"/>}
          <p className=" text-center w-72 text-md">Build strength, enhance endurance: Transform your body with targeted workouts designed to sculpt muscles and improve stamina.</p>
          <button className="bg-transparent font-semibold  flex items-center gap-2 mt-6 text-white">Check it Out{<GiTronArrow/>}</button>
        </div>  
      </div>
      <div className="flex px-5 py-3 text-white border-2 rounded-3xl border-deep-orange-500 bg-deep-orange-700 bg-opacity-10 hover:hover:bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 hover:text-white hover:cursor-pointer ">
        <div className="group flex flex-col items-center gap-4 mt-2 group-hover:text-white" >
          <h3 className="text-white text-lg font-semibold italic">Fat Loss</h3>
          {<GiSmallFire className=" text-deep-orange-500 text-5xl group-hover:text-white"/>}
          <p className=" text-center w-72 text-md">Take your fat loss goals to the next level with our huge database of free fat-burning workouts designed for men and women. </p>
          <button className="bg-transparent font-semibold  flex items-center gap-2 mt-6 text-white">Check it Out{<GiTronArrow/>}</button>
        </div>  
      </div>
      </div>
      
    </section>
  )
}
