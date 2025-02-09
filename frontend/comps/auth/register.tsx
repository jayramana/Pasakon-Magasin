import React, { useState } from "react";
import { Input } from "../../src/components/ui/input";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [pass, setPass] = useState("");

  const regisEnd = () => {
    console.log(name, email, role, pass);
    axios
      .post(`${import.meta.env.VITE_AUTH_API_PORT}/register`, {
        name: name,
        role: role,
        email: email,
        password: pass,
      })
      .then(() => console.log("Okay"))
      .catch((error) => console.log(error));
  };

  return (
    <main className="h-screen flex flex-col justify-center  items-center">
      <p>Register</p>
      <div className="flex flex-col gap-4 justify-center items-left">
        <div className="flex items-center">
          <label>Name</label>
          <Input type="name" onChange={(e) => setName(e.target.value)}></Input>
        </div>
        <div className="flex items-center">
          <label>Email</label>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div>
          <label htmlFor="">Role</label>
          <select name="Role" id="" onChange={(e) => setRole(e.target.value)}>
            <option value=""></option>
            <option value="admin">Admin</option>
            <option value="dev">Developer</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="flex items-center">
          <label htmlFor="">Password</label>
          <Input
            type="password"
            onChange={(e) => setPass(e.target.value)}
          ></Input>
        </div>
        <button className="self-start w-fit" onClick={() => regisEnd()}>
          Submit
        </button>
      </div>
    </main>
  );
};

export default Register;
