import { useUser } from "../../utils/UserContext";
import ProfilePicture from "../../assets/User.svg";
import axiosClient from "../../axiosClient";
import UserWorkoutGrid from "../UserWorkouts";
import UserRequest from "../UserRequest";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
export default function Profile() {
  const { activeUser, setActiveUser } = useUser();

  //state for Dialog
  const [open, setOpen] = useState(false);

  //handleOpen for Dialog
  const handleOpen = () => setOpen(!open);

  //handleUpload Profile Picture
  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("avatar", file);

        const response = await axiosClient.post(
          "/user/updateprofile",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setActiveUser(response.data.data);
      } catch (error) {
        console.log("FROM HANDLEUPLOAD", error);
      }
    }
  };
  return (
    <section className="p-6 ">
      <div className="Profile Card  w-96 m-auto p-8 ">
        <div className="profilePicture flex flex-col gap-2 items-center bg-white py-5 rounded-t-3xl border-t-8 border-deep-orange-700">
          <h1 className="header border-deep-orange-500 border-l-8 mb-6 text-left p-2 text-black font-bold italic font-2xl ">
            {" "}
            Profile Settings
          </h1>
          <img
            src={
              activeUser && activeUser.avatar
                ? activeUser.avatar
                : ProfilePicture
            }
            alt="profilePicture"
            className=" rounded-full w-[200px] h-[200px] object-cover"
          />
          <div className="flex gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
              id="uploadInput"
            />
            <label
              htmlFor="uploadInput"
              className="p-3 px-3 text-white font-bold text-xs bg-deep-orange-700 rounded-full hover:bg-deep-orange-700 hover:text-deep-orange-700 hover:bg-opacity-10 border border-deep-orange-700 transition-all duration-300 cursor-pointer"
            >
              Upload Image
            </label>
            {/*    <button className=" p-3 px-3  text-white font-bold text-xs  bg-deep-orange-700 rounded-full hover:bg-deep-orange-700 hover:bg-opacity-10 border border-deep-orange-700 hover:text-deep-orange-700 transition-all duration-300 ">
              Remove Image
            </button> */}
          </div>
        </div>
        <div className="flex flex-col text-white gap-3 bg-deep-orange-800 bg-opacity-20 p-3 rounded-b-xl ">
          <div>
            <p>Personal Info</p>
            <p className="text-xs text-gray-500">Login Credentials</p>
          </div>

          <p>
            <span className="font-bold italic">Name</span> :{" "}
            {activeUser?.username}
          </p>
          <p>
            <span className="font-bold italic">Email</span> :{activeUser?.email}
          </p>
          {activeUser && (
            <button
              className="border border-deep-orange-500 text-sm font-bold w-fit py-2 px-4 rounded-xl hover:bg-deep-orange-700 hover:bg-opacity-20 "
              onClick={handleOpen}
            >
              Send Request
            </button>
          )}
        </div>
      </div>

      <div className="myWorkouts"></div>
      {/* Dialog Box */}
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="bg-transparent border-b-8 border-deep-orange-700"
      >
        <DialogHeader>Workout Request</DialogHeader>
        <DialogBody className="">
          <UserRequest handleOpen={handleOpen} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}
