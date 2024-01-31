import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import "react-toastify/dist/ReactToastify.css";
import { RiAccountCircleFill } from "react-icons/ri";

import { Link } from "react-router-dom";
import { useUser } from "../../utils/UserContext";

import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Brand.png";

export default function HamburgerMenu() {
  const { activeUser, setActiveUser } = useUser();
  const isUser = activeUser && activeUser.role === "user";
  const isAdmin = activeUser && activeUser.role === "admin";

  return (
    <>
      <Menu>
        <MenuHandler>
          <GiHamburgerMenu className="text-white text-3xl md:hidden cursor-pointer" />
        </MenuHandler>
        {isUser ? (
          <MenuList className="md:hidden bg-transparent backdrop-blur-sm border-deep-orange-600 hover:border-deep-orange-500 w-72 mt-5 ml-28 flex flex-col gap-5  items-center  justify-center p-10">
            <Link to="/profile">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  My Profile
                </Typography>
              </MenuItem>
            </Link>
            <Link className=" border-none" to="/profile/workout">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  My Workouts
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/directory">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  Exercises
                </Typography>
              </MenuItem>
            </Link>
            <img src={Logo} alt="" />
          </MenuList>
        ) : isAdmin ? (
          <MenuList className="md:hidden bg-transparent backdrop-blur-sm border-deep-orange-600 hover:border-deep-orange-500 w-72 mt-5 ml-28 flex flex-col gap-5  items-center  justify-center p-10">
            <Link to="/dashboard/users">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  Dashboard
                </Typography>
              </MenuItem>
            </Link>
            <Link className=" border-none" to="/addexercise">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  Add Exercise
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/addworkout">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  Add Workout
                </Typography>
              </MenuItem>
            </Link>
            <img src={Logo} alt="" />
          </MenuList>
        ) : (
          <MenuList className="md:hidden bg-transparent backdrop-blur-sm border-deep-orange-600 hover:border-deep-orange-500 w-72 mt-5 ml-28 flex flex-col gap-5  items-center  justify-center p-10">
            <Link to="/Home">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  About Us
                </Typography>
              </MenuItem>
            </Link>
            <Link className=" border-none" to="/login">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  Log In
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/signup">
              <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
                <RiAccountCircleFill className="bg-transparent text-xl  " />
                <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
                  Sign Up
                </Typography>
              </MenuItem>
            </Link>
            <img src={Logo} alt="" />
          </MenuList>
        )}
      </Menu>
    </>
  );
}
