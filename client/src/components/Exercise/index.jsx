import Video1 from "../../assets/male-cable-twisting-curl-front.mp4";
import Video2 from "../../assets/male-cable-twisting-curl-side.mp4";
export default function Exercise() {
  return (
    <section className="p-6">
      <div className="Card flex flex-col text-left p-20 w-full m-auto">
        <div className="CardHeader bg-gradient-to-r from-deep-orange-700 to-deep-orange-400 p-4 w-full rounded-2xl">
          <h1 className="text-4xl text-white text-left font-bold">
            {" "}
            Cable Twisting Curl
          </h1>
        </div>
        <div className="CardVideos flex space-x-0 justify-evenly p-5 gap-4 mt-4 ">
          <video
            src={Video1}
            autoPlay
            muted
            loop
            className=" w-1/2 rounded-3xl border-t-4 border-b-8 border-orange-700  "
          ></video>
          <video
            src={Video2}
            autoPlay
            muted
            loop
            className=" w-1/2 rounded-3xl border-t-8 border-b-4 border-orange-700 "
          ></video>
        </div>
        <div className="CardSteps flex flex-col gap-2 text-lg text-white">
          <p>
            <span className="italic text-lg text-deep-orange-700 font-body">Step 1: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            itaque.
          </p>
          <p>
          <span className="italic text-lg text-deep-orange-700 font-body">Step 2: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa
            amet similique neque rerum dolore!
          </p>
          <p><span className="italic text-lg text-deep-orange-700 font-body">Step 3: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
}
