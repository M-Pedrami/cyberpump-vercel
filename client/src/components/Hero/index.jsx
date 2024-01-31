import Photo from "../../assets/Hero.jpg";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/UserContext";
export default function Hero() {
  const {activeUser} = useUser()
  return (
    <div>
      <section className="hero">
        <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:space-x-44">
          <div className=" md:w-1/3">
            <img src={Photo} alt="HeroPicture" />
          </div>
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-l text-4xl font-bold text-center md:text-6xl md:text-left text-white">
              Take Your <span className=" text-deep-orange-600">Fitness </span>{" "}
              Game to the Next Level With Innovative{" "}
              <span className=" text-deep-orange-600">Workout Plans</span>
            </h1>
            <p className="max-w-sm md:max-w-xl text-center text-deep-orange-600 md:text-left text-lg md:text-2xl">
              Whether you are looking to{" "}
              <span className=" font-bold text-white italic">
                build muscles
              </span>{" "}
              or you want to{" "}
              <span className=" font-bold text-white italic">
                increase your strength
              </span>
              , you will find your best{" "}
              <span className=" font-bold text-white italic">
                workout routine
              </span>{" "}
              here.
            </p>
            <div className="flex space-x-10">
              <Link to={activeUser ?  "/profile" : "/signup"}>
                <button className=" p-3 px-6 pt-2 text-white font-bold text-xl  bg-deep-orange-700 rounded-full hover:bg-deep-orange-700 hover:bg-opacity-10 border border-deep-orange-700 transition-all duration-300">
                  Join Us
                </button>
              </Link>
              <Link to={activeUser ?  "/profile" : "/signup"}>
                <button className="p-3 px-6 pt-2 text-white text-xl font-bold bg-deep-orange-700 bg-opacity-10 border border-deep-orange-700 rounded-full  hover:bg-deep-orange-700 transition-all duration-300">
                  Personalize Workout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
