import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineDownload } from "react-icons/ai";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === password) {
      // Logika untuk berhasil login
      console.log("Login successful");
      router.push("/HomeScreen");
    } else {
      setErrorMessage(
        "Invalid email or password, make sure to put email and password same"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">
          Login
        </h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        {email === password && (
          <p className="text-center mt-4">
            You are logged in. Go to <Link href="/HomeScreen"></Link> page.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
