import React, { useState } from "react";
import { validateForm } from "../util/validateForm";
import { useAuthFunctions } from "../hooks/useAuthFunctions";

function LoginForm() {
  const [isSignIn, setSignIn] = useState(true);
  const [message, setMessage] = useState({ msg: null, success: false });
  const { LogIn } = useAuthFunctions();
  const submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const email = e.target.email.value;
    const message = validateForm(email, password, name);
    if (message === null) {
      setMessage({ msg: "Successfull", success: true });
    } else {
      setMessage({ msg: message, success: false });
    }
  };

  // return (
  //   <div
  //     className={`w-[30%] bg-black/60 py-[2rem] px-[4rem] rounded-[4px] ${
  //       isSignIn ? "mb-[2rem]" : ""
  //     }`}
  //   >
  //     <h3 className="font-black font-sans text-[2rem] my-[0.75rem]">
  //       {isSignIn ? "Sign In" : "Sign Up"}
  //     </h3>
  //     <form className="w-full space-y-[1.25rem]" onSubmit={submit}>
  //       {!isSignIn && (
  //         <input
  //           name="name"
  //           type="text"
  //           placeholder="Full Name"
  //           disabled
  //           className="w-full rounded-[4px] border-[1px] border-slate-400 p-[1rem] bg-transparent "
  //         ></input>
  //       )}
  //       <input
  //         name="email"
  //         type="text"
  //         disabled
  //         placeholder="Email or mobile number"
  //         className="w-full rounded-[4px] border-[1px] border-slate-400 p-[1rem] bg-transparent "
  //       ></input>
  //       <input
  //         name="password"
  //         type="password"
  //         placeholder="Password"
  //         disabled
  //         className="w-full rounded-[4px] border-[1px] border-slate-400 p-[1rem] bg-transparent "
  //       ></input>
  //       <p
  //         className={`${message.msg === null ? "hidden" : ""} ${
  //           message.success === true ? "text-green-500" : "text-red-500"
  //         } font-bold -tracking-tighter`}
  //       >
  //         {message.msg}
  //       </p>
  //       <button
  //         disabled
  //         className="dont-medium w-full py-[0.5rem] rounded-[4px] bg-netflixRed text-white text-lg"
  //       >
  //         {isSignIn ? "Sign In" : "Sign Up"}
  //       </button>
  //     </form>
  //     <p className="w-full text-center my-[0.75rem] text-lg text-zinc-300">
  //       OR
  //     </p>
  //     <button
  //       onClick={LogIn}
  //       className="font-semibold w-full py-[0.5rem] rounded-[4px] bg-zinc-500/60 text-white text-lg"
  //     >
  //       Google SignIn
  //     </button>
  //     {isSignIn ? (
  //       <p className="space-x-1 mt-[2rem]">
  //         <span className="text-zinc-300">New To Netflix ?</span>
  //         <span
  //           className="font-bold text-white hover:underline hover:underline-offset-2 cursor-pointer"
  //           onClick={() => setSignIn(!isSignIn)}
  //         >
  //           Sign Up Now
  //         </span>
  //       </p>
  //     ) : (
  //       <p className="space-x-1 mt-[2rem]">
  //         <span className="text-zinc-300">Already a Member ?</span>
  //         <span
  //           className="font-bold text-white hover:underline hover:underline-offset-2 cursor-pointer"
  //           onClick={() => setSignIn(!isSignIn)}
  //         >
  //           Sign In Now
  //         </span>
  //       </p>
  //     )}
  //   </div>
  // );
  return (
    <div className="w-[30%] bg-black/60 py-[2rem] px-[4rem] rounded-[4px]">
      <h3 className="font-black font-sans text-[2rem] mb-[2rem]  text-center">
        LogIn
      </h3>
      <button
        onClick={LogIn}
        className="font-semibold w-full py-[0.5rem] rounded-[4px] bg-zinc-500/60 text-white text-lg"
      >
        Google SignIn
      </button>
    </div>
  );
}

export default LoginForm;
