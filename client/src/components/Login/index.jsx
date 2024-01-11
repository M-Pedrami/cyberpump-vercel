import React, { useState, useEffect } from "react";
import axios from "axios";
import { TbFaceIdError } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useUser } from "../../utils/UserContext";

export default function Login({ onSignup }) {
  const navigate = useNavigate();
  const { activeUser, setActiveUser } = useUser();

  const notify = (message) => {
    
      toast.success(message, {
        theme: "dark",
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ password, email });
  const [displayError, setDisplayError] = useState("");

  useEffect(() => {
    setUser({ email, password });
  }, [email, password, displayError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");

    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          //adding this line is necessary for handling cookies, also the origin and credentials need to be added to the cors() middleware in the backend entry point
          withCredentials: true,
        }
      );
      console.log("Response from server:", response);

      console.log("FROM Login COMPONENT LINE 44", response);
      // Clear input fields after successful submission
      setEmail("");
      setPassword("");
      setActiveUser(response.data)
      console.log("HELOOOOOOOOOOOOOOOOOOO",response.data)
      // Display success toast
      notify(`Welcome Back ${response.data.username}`);
      navigate("/");
      onSignup();
    } catch (error) {
      setDisplayError(error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    if (navigate.location?.pathname === "/") {
      // Call notify function when navigating to home page
      notify();
    }
  }, [navigate.location?.pathname]);

  return (
    <>
      <Card className="w-96 m-auto mt-20">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center  border-deep-orange-500 border-t-8"
        >
          <Typography className="text-2xl font-bold">Log In</Typography>
        </CardHeader>
        <CardBody>
          <form
            action="submit"
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <Input
              type="text"
              size="lg"
              label="Email"
              value={email}
              className="bg-transparent text-black"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Input
              type="password"
              size="lg"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-transparent text-black mb-5"
            />

            <Button
              type="submit"
              variant="gradient"
              className="mt-5 border-b-8 border-deep-orange-500"
              fullWidth
            >
              Submit
            </Button>
            <p className="text-center text-xs">
              Don't Have an Account Yet?{" "}
              <Link to={"/signup"}>
                <span className="font-bold text-deep-orange-700 cursor-pointer hover:text-deep-orange-200 translate-all duration-300">
                  Register
                </span>
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
      {displayError && (
        <>
          <TbFaceIdError className=" text-8xl m-auto mt-28  text-deep-orange-700" />
          <p className="text-4xl text-center  text-deep-orange-700">
            {displayError}
          </p>
        </>
      )}

      <ToastContainer theme="dark" />
    </>
  );
}
