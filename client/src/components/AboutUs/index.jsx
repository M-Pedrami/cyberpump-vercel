import Background from "../../assets/AboutUs.jpg";
import Nike from "../../assets/Nike.png";
import Puma from "../../assets/Puma.svg";
import MuscleFitness from "../../assets/Muscle-Fitness.svg";
import FitnessClub from "../../assets/FitnessClub.svg";
import Jordan from "../../assets/Jordan.svg"
import Anta from "../../assets/Anta.svg"

export default function AboutUs() {
  return (
    <section
      className=" bg-black "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" container flex flex-col md:flex-row items-center px-6 pt-20 mx-auto mt-10 space-y-0 md:space-y-0 md:space-x-44">
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl font-extrabold mb-4 ">
            <span className=" text-gray-50">Our</span>{" "}
            <span className=" italic">Mission</span>{" "}
          </h1>
          <div className="mb-20 space-y-12">
            <p className=" leading-6 text-3xl md:text-3xl md:text-left text-white">
              At{" "}
              <span className="italic text-orange-700 font-bold">
                CyberPump
              </span>
              , our mission is to make fitness accessible,{" "}
              <span className="italic text-orange-700">enjoyable</span>, and
              sustainable for everyone. We believe that a well-rounded approach
              to health goes beyond just physical exercise; it encompasses{" "}
              <span className="italic text-orange-700">mental well-being</span>,
              nutrition, and a{" "}
              <span className="italic text-orange-700 font-bold">
                supportive community.
              </span>
            </p>
          </div>
        </div>
        <div className="brands grid grid-cols-2 gap-10 gap-x-28 pb-20">
          <div className="flex flex-col gap-16">
            <img src={Nike} className="w-32" />
            <img src={FitnessClub} className="w-32" />
            <img src={Anta} className="w-32" />
          </div>
          <div className="flex flex-col gap-16 items-center">
            <img src={MuscleFitness} className="w-32" />
            <img src={Puma} className="w-32" />
            <img src={Jordan} className="w-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
