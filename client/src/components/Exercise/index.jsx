import { useEffect } from "react";

export default function Exercise({ exercise }) {
  return (
    <section className="">
      <div className="Card flex flex-col text-left p-10 md:w-3/4 m-auto">
        <div className="bg-blue-gray-50 p-8 rounded-t-xl border-t-8 border-t-deep-orange-500">
          <h1 className="text-4xl text-black text-left font-bold">
            {exercise?.name}
          </h1>
        </div>
        <div className="CardVideos md:flex  md:justify-evenly p-5 gap-4 mt-4 ">
          {exercise?.video.map((video) => (
            <video
              src={video}
              autoPlay
              muted
              loop
              className=" md:w-1/2 rounded-3xl border-t-4 border-b-8 border-orange-700 mb-5  "
            ></video>
          ))}
        </div>
        <div className=" w-full m-auto bg-blue-gray-50 p-8 rounded-t-xl border-t-8 border-t-deep-orange-500">
          {exercise?.instructions.map((instruction, index) => (
            <p className="mb-5">
              <span className="italic text-lg text-deep-orange-700 font-body font-bold">
                Step {index + 1}:{" "}
              </span>
              <span className="">{instruction}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
