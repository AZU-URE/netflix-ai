import React from "react";
import Header from "../component/Header";
import LoginForm from "../component/LoginForm";
import { netflixBg } from "../constants/constant";
function Login() {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-full w-full opacity-60 absolute bg-gradient-to-b from-black via-black to-black"></div>
      <div className="absolute h-full w-full flex items-end justify-center text-white">
        <LoginForm />
      </div>
      <img
        src={netflixBg}
        alt="background"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default Login;
