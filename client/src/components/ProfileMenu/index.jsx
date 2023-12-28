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

export default function ProfileMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="avatar"
          className="cursor-pointer ring ring-gray-900 hover:ring-orange-500"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        />
      </MenuHandler>
      <MenuList className=" bg-transparent border-deep-orange-600 hover:border-deep-orange-500">
        <MenuItem className="flex items-center gap-2 focus:bg-white  text-deep-orange-400 focus:text-gray-900">
          <RiAccountCircleFill className="bg-transparent text-xl  " />
          <Typography className="bg-transparent  text-sm font-bold  hover:text-gray-900">
            My Profile
          </Typography>
        </MenuItem>
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
