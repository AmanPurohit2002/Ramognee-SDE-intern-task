import React, { useState } from "react";
import emailjs from "emailjs-com";
import cryptoRandomString from "crypto-random-string";
import { useNavigate } from "react-router-dom";

emailjs.init("amanpurohit785@gmail.com");

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const generateRandomPassword = () => {
    return cryptoRandomString({ length: 10, type: "alphanumeric" });
  };

  const handleResetPassword = () => {
    const newPassword = generateRandomPassword();

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user by email
    const userToUpdate = users.find((user) => user.email === email);

    if (!userToUpdate) return alert("User does not exist");

    // Update the user's password
    userToUpdate.password = newPassword;

    // Update the users array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Send email using EmailJS
    const templateParams = {
      to_email: email,
      new_password: newPassword,
    };

    emailjs
      .send("service_b46xhnm", "template_1a74nca", templateParams,"8TiWzm83evd2FDJzb")
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );

    alert(
      "Password reset successful. Check your email for the new password."
    );
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-96 p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded-md focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleResetPassword}
            className="w-[45%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Reset Password
          </button>

          <button
            onClick={handleLogin}
            className="w-[45%] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login/Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
