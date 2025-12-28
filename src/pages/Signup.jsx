import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="w-full h-screen bg-[#242527] flex items-center justify-center">
      <div className="w-105 max-w-120 bg-[#1c1d1f] p-10 rounded-2xl shadow-xl">
        <h1 className="text-white text-3xl font-semibold text-center mb-8">
          Register
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-5 py-3 text-lg rounded-md bg-[#2b2c2f] text-white outline-none focus:ring-2 focus:ring-[#4CB6AC]"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 text-lg rounded-md bg-[#2b2c2f] text-white outline-none focus:ring-2 focus:ring-[#4CB6AC]"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-5 py-3 text-lg rounded-md bg-[#2b2c2f] text-white outline-none focus:ring-2 focus:ring-[#4CB6AC]"
            required
          />

          <button
            type="submit"
            className="mt-2 bg-[#4CB6AC] hover:bg-[#3e948b] transition text-white py-3 text-lg rounded-md font-medium"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            className="text-[#4CB6AC] cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
