import React, { useState, useEffect } from "react";
import axios from "axios";
import { TbFaceIdError } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

export default function Signup() {
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
      const response = await axios.post(
        "http://localhost:3001/user/signup",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log(response.data);
        // Clear input fields after successful submission
        setEmail("");
        setUsername("");
        setPassword("");
        // Display success toast
        notify();
        navigate("/");
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
      <Card className="w-96 m-auto">
        <CardHeader variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center">
          <Typography className="text-2xl font-bold">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">

        </CardBody>
      <form
          action="submit"
          method="post"
          className="flex flex-col bg-white text-black m-auto w-28"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="email"
            value={email}
            className="bg-transparent text-black"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-transparent text-black"
          />
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="bg-transparent text-black"
          />
          <button type="submit" className="bg-white text-black">
            Submit
          </button>
        </form>
      </Card>
      {displayError && (
        <>
          <TbFaceIdError className=" text-8xl m-auto mt-28  text-deep-orange-700" />
          <p className="text-4xl text-center  text-deep-orange-700">
            {displayError}
          </p>
        </>
      )}
      <button onClick={notify} className="bg-white text-black">
        toast
      </button>
      <ToastContainer theme="dark"/>
    </>
  );
}


/* import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
 
export function LoginCard() {
  return (
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
} */