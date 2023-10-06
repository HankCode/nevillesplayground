"use client";

import React, { useState } from "react";
import { signUp } from "@/app/actions/users/signUp";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("Signing up...");
    const message = await signUp(email, password);
    setMessage(message);
  };

  return (
    <div className="flex flex-col gap-4 bg-transparent-400 p-4 pt-48 min-h-screen">
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-500"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-gray-500"
      />

      <button onClick={handleSubmit}>Sign up</button>

      <p>{message}</p>
    </div>
  );
};

export default SignUpForm;
