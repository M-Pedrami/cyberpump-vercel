import { Typography } from "@material-tailwind/react";
import LOGO from "../../assets/Brand.png"
 
export default function Footer() {
  return (
    <footer className="w-full text-white p-8">
      <hr className="my-8 border-deep-orange-500" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
        
        <img src={LOGO} alt="logo-ct" className="w-32" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-deep-orange-500 focus:text-deep-orange-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-deep-orange-500 focus:text-deep-orange-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-deep-orange-500 focus:text-deep-orange-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-deep-orange-500 focus:text-deep-orange-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      
      <Typography color="white" className="text-center font-normal">
        &copy; 2024 Maziar Pedrami
      </Typography>
    </footer>
  );
}