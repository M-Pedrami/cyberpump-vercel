import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiDashboard2Fill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import UserPhoto from "../../assets/User.svg";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="avatar"
          className="cursor-pointer ring ring-gray-900 hover:ring-orange-500"
          src={UserPhoto}
        />
      </MenuHandler>
      <MenuList className=" bg-transparent border-deep-orange-600 hover:border-deep-orange-500">
      <Link to={"/Profile"} >
        <MenuItem className="flex items-center gap-2 focus:bg-white   text-deep-orange-400 focus:text-gray-900 ">
          <RiAccountCircleFill className="bg-transparent text-xl  " />
          <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
            My Profile
          </Typography>
        </MenuItem>
        </Link>
          <MenuItem className="flex items-center gap-2 focus:bg-white  text-deep-orange-400 focus:text-gray-900">
            <RiDashboard2Fill className="bg-transparent text-xl " />
            <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
              Dashboard
            </Typography>
          </MenuItem>
        

        <hr className="my-2 border-deep-orange-400" />
        <MenuItem className="flex items-center gap-2 focus:bg-white  text-deep-orange-400 focus:text-gray-900">
          <RiLogoutCircleFill className="bg-transparent text-xl " />
          <Typography className="bg-transparent  text-sm font-bold   hover:text-gray-900">
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
