import React, { useState } from "react";
import SignUp from "../component/SignUp";
import LoginPage from "../component/Login";

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(true);

  const handleToggle=(data)=>{
    setShowSignUp(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setShowSignUp(true)}
          className="w-[10vw] md:w-[20vw] text-black px-4 py-2 rounded-lg border hover:bg-green-500"
        >
          Sign Up
        </button>
        <button
          onClick={() => setShowSignUp(false)}
          className="w-[10vw] md:w-[20vw] text-black px-4 py-2 rounded-lg border hover:bg-green-500"
        >
          Log in
        </button>
      </div>

      {showSignUp ? <SignUp handleToggle={handleToggle}/> : <LoginPage />}
    </div>
  );
};

export default Auth;
