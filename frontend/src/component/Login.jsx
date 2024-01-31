import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const user = storedUsers.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );

      if (user) {
        navigate("/product");
      } else {
        formik.setFieldError("email", "Incorrect email or password");
        formik.setFieldError("password", "Incorrect email or password");
      }
    },
  });

  return (
    <div className="w-96 mt-8 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
              formik.errors.email ? "border-red-500" : "focus:border-blue-500"
            }`}
            placeholder="Enter your email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
              formik.errors.password
                ? "border-red-500"
                : "focus:border-blue-500"
            }`}
            placeholder="Enter your password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>
        <div className="my-4 text-center text-blue-500">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
