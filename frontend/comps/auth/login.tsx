import React, { useState } from "react";
import { Input } from "../../src/components/ui/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const Navigate = useNavigate();
  const LoginEnd = () => {
    console.log(email, pass);
    axios
      .post(`${import.meta.env.VITE_AUTH_API_PORT}/login`, {
        email: email,
        password: pass,
      })
      .then((response) => {
        console.log("Logged-In Successfully");

        const { token, user } = response.data;

        localStorage.setItem("Token", token);
        localStorage.setItem("User", user);

        if (user.role == "user") {
          Navigate("/home/user");
        } else if (user.role == "dev") {
          Navigate("/home/dev");
        } else if (user.role == "admin") {
          Navigate("/home/admin");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <main className="h-screen flex flex-col justify-center  items-center">
      <p>Register</p>
      <div className="flex flex-col gap-4 justify-center items-left">
        <div className="flex items-center">
          <label>Email</label>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>

        <div className="flex items-center">
          <label htmlFor="">Password</label>
          <Input
            type="password"
            onChange={(e) => setPass(e.target.value)}
          ></Input>
        </div>
        <button className="self-start w-fit" onClick={() => LoginEnd()}>
          Submit
        </button>
      </div>
    </main>
  );
};

export default Login;
