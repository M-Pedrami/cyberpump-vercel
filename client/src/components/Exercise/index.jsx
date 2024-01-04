import { useEffect } from "react";

export default function Exercise({exercise}) {
  console.log(exercise)
  return (
    <section className="">
      <div className="Card flex flex-col text-left p-10 w-3/4 m-auto">
        <div className="CardHeader bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 p-4 w-full rounded-2xl">
          <h1 className="text-4xl text-white text-left font-bold">
            {exercise?.name}
            
          </h1>
        </div>
        <div className="CardVideos flex space-x-0 justify-evenly p-5 gap-4 mt-4 ">
          {exercise?.video.map(video=>(<video
            src={video}
            autoPlay
            muted
            loop
            className=" w-1/2 rounded-3xl border-t-4 border-b-8 border-orange-700  "
          ></video>))}
          
        </div>
        <div className="CardSteps flex flex-col gap-2 text-lg text-white">
          {exercise?.instructions.map((instruction, index)=>( <p>
            <span className="italic text-lg text-deep-orange-700 font-body">Step {index+1}: </span>{instruction}
            itaque.
          </p>))}
          
        </div>
      </div>
    </section>
  );
}
