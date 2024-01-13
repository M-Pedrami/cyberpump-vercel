import { useUser } from "../../utils/UserContext";
import ProfilePicture from "../../assets/User.svg";
import axios from "axios";
export default function Profile() {
  const { activeUser, setActiveUser } = useUser();
  const handleUpload = async (e) => {
    const file = e.target.files[0];

  
    if (file) {
      try {
        const formData = new FormData();
        formData.append("avatar", file);
  
        const response = await axios.post("http://localhost:3001/user/updateprofile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true
        });

        setActiveUser(response.data.data)
  
        console.log(response.data);
      } catch (error) {
        console.log("FROM HANDLEUPLOAD", error);
      }
    }
  };
  return (
    <section className="p-6 ">
      <h1 className="text-3xl text-white text-center"> Profile Settings</h1>
      <div className="Profile Card  w-96 m-auto p-8 ">
        <div className="profilePicture flex flex-col gap-2 items-center bg-white py-5 rounded-t-3xl">
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
            <button className=" p-3 px-3  text-white font-bold text-xs  bg-deep-orange-700 rounded-full hover:bg-deep-orange-700 hover:bg-opacity-10 border border-deep-orange-700 hover:text-deep-orange-700 transition-all duration-300 ">
              Remove Image
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white gap-3 bg-deep-orange-800 bg-opacity-20 p-3 rounded-b-xl ">
          <div>
            <p>Personal Info</p>
            <p className="text-xs text-gray-500">Login Credentials</p>
          </div>

          <p>
            <span className="font-bold italic">Name</span> : {activeUser?.username}
          </p>
          <p>
            <span className="font-bold italic">Email</span> :{" "}
            {activeUser?.email}
          </p>
          <button className="border border-deep-orange-500 text-sm font-bold w-fit p-2 rounded-full hover:bg-deep-orange-700 hover:bg-opacity-20 ">
            Change Password
          </button>
        </div>
      </div>
    </section>
  );
}
