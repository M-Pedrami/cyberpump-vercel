import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
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

export default function Signup({ onSignup }) {
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Account Created Successfully!", {
      theme: "dark",
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({ username, password, email });
  const [displayError, setDisplayError] = useState("");

  useEffect(() => {
    setUser({ email, password, username });
  }, [email, password, username, displayError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosClient.post("/user/signup", user);

      if (response.status === 201) {
     
        // Clear input fields after successful submission
        setEmail("");
        setUsername("");
        setPassword("");
        // Display success toast
        notify();
        navigate("/");
        onSignup();
      }
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
          <Typography className="text-2xl font-bold">Sign Up</Typography>
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
            <Input
              type="text"
              label="Username"
              size="lg"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
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
