import {
  Input,
  Textarea,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function UserRequest({ handleOpen }) {
  const [request, setRequest] = useState({
    height: "",
    weight: "",
    age: 0,
    goal: "",
    request: "",
  });

  //handleClick
  const handleRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/request",
        request,
        {
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        toast.success("Request Sent Successfully", {
          theme: "dark",
        });

        handleOpen(false);
      }
    } catch (error) {
      console.log("useEffect/UserRequest", error);
    }
  };

  return (
    <section className="p-6">
      <div className="card form-container w-fit m-auto bg-blue-gray-50 p-6 rounded-t-xl border-t-8 border-t-deep-orange-500">
        <div className="header border-deep-orange-500 border-l-8 mb-6 text-left p-2 text-black">
          <h1 className="text-2xl font-bold italic">Add Workout</h1>
          <p className="text-xs italic">
            {" "}
            Enter Information for the Workout Plan
          </p>
        </div>

        <div className=" flex flex-col gap-4 m-auto w-[26rem]">
          <Input
            type="text"
            size="lg"
            label="Height"
            value={request.height}
            className="bg-transparent text-black"
            onChange={(e) => {
              setRequest((prevRequest) => ({
                ...prevRequest,
                height: e.target.value,
              }));
            }}
          />
          <Select
            variant="outlined"
            value={request.goal}
            label="Goal"
            onChange={(value) => {
              setRequest((prevWorkout) => ({
                ...prevWorkout,
                goal: value,
              }));
            }}
          >
            <Option value="Gain Muscle">Gain Muscle</Option>
            <Option value="Lose Weight">Lose Weight</Option>
            <Option value="Build Strength">Build Strength</Option>
          </Select>
          <Input
            type="text"
            size="lg"
            label="Weight"
            value={request.weight}
            className="bg-transparent text-black"
            onChange={(e) => {
              setRequest((prevRequest) => ({
                ...prevRequest,
                weight: e.target.value,
              }));
            }}
          />
          <Textarea
            type="text"
            size="lg"
            label="Request"
            value={request.request}
            className="bg-transparent text-black"
            onChange={(e) => {
              setRequest((prevRequest) => ({
                ...prevRequest,
                request: e.target.value,
              }));
            }}
          />
          <Input
            type="number"
            size="lg"
            label="Age"
            className="bg-transparent text-black"
            onChange={(e) => {
              setRequest((prevRequest) => ({
                ...prevRequest,
                age: e.target.value,
              }));
            }}
          />
          <Button
            onClick={handleRequest}
            className="rounded-xl flex flex-col content-center items-center px-2 py-3 w-40 "
          >
            Submit Request{" "}
          </Button>
        </div>
        <ToastContainer theme="dark" />

      </div>
    </section>
  );
}
