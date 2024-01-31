import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupPage = ({ handleToggle }) => {
  const formik = useFormik({
    initialValues: {
      userType: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pincode: "",
      mobileISD: "",
      mobileNumber: "",
      fax: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userType: Yup.string().required("Please select a user type"),
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string(),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      address: Yup.string().required("Address is required"),
      country: Yup.string().required("Country is required"),
      state: Yup.string().required("State is required"),
      city: Yup.string().required("City is required"),
      pincode: Yup.string().required("Pincode is required"),
      mobileISD: Yup.string().required("ISD Code is required"),
      mobileNumber: Yup.string().required("Mobile Number is required"),
      fax: Yup.string(),
      phone: Yup.string(),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
          "Must contain at least one number and one uppercase and lowercase letter"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      const existingUsersString = localStorage.getItem("users");
      const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

   
      if (Array.isArray(existingUsers)) {
      
        existingUsers.push(values);

        
        localStorage.setItem("users", JSON.stringify(existingUsers));

      
        handleToggle(false);
      } else {
        
        const newUsersArray = [values];

        
        localStorage.setItem("users", JSON.stringify(newUsersArray));

        
        handleToggle(false);
      }
    },
  });


  return (
    <div className="mt-8 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="userType"
                value="Individual"
                onChange={formik.handleChange}
                checked={formik.values.userType === "Individual"}
              />
              Individual
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="userType"
                value="Enterprise"
                onChange={formik.handleChange}
                checked={formik.values.userType === "Enterprise"}
              />
              Enterprise
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="Government"
                onChange={formik.handleChange}
                checked={formik.values.userType === "Government"}
              />
              Government
            </label>
            {formik.touched.userType && formik.errors.userType && (
              <p className="text-red-500 text-sm">{formik.errors.userType}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
              formik.errors.firstName
                ? "border-red-500"
                : "focus:border-blue-500"
            }`}
            placeholder="Enter your first name"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className="text-red-500 text-sm">{formik.errors.firstName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your last name"
            {...formik.getFieldProps("lastName")}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Email<span className="text-red-500">*</span>
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
            Address<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
              formik.errors.address ? "border-red-500" : "focus:border-blue-500"
            }`}
            placeholder="Enter your address"
            {...formik.getFieldProps("address")}
          />
          {formik.touched.address && formik.errors.address && (
            <p className="text-red-500 text-sm">{formik.errors.address}</p>
          )}
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="mr-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Country<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
                  formik.errors.country
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Enter your country"
                {...formik.getFieldProps("country")}
              />
              {formik.touched.country && formik.errors.country && (
                <p className="text-red-500 text-sm">{formik.errors.country}</p>
              )}
            </div>
            <div className="ml-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                State<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
                  formik.errors.state
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Enter your state"
                {...formik.getFieldProps("state")}
              />
              {formik.touched.state && formik.errors.state && (
                <p className="text-red-500 text-sm">{formik.errors.state}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="mr-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                City<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
                  formik.errors.city
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Enter your city"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-sm">{formik.errors.city}</p>
              )}
            </div>
            <div className="ml-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Pincode<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
                  formik.errors.pincode
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Enter your pincode"
                {...formik.getFieldProps("pincode")}
              />
              {formik.touched.pincode && formik.errors.pincode && (
                <p className="text-red-500 text-sm">{formik.errors.pincode}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="mr-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Mobile ISD Code<span className="text-red-500">*</span>
              </label>
              <select
                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
                  formik.errors.mobileISD
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                {...formik.getFieldProps("mobileISD")}
              >
                <option value="">Select ISD Code</option>
                <option value="+1">(340) – United States Virgin Islands</option>
                <option value="+91">+91 - India</option>
                <option value="+37">+37 - Germany</option>
                <option value="+81">+81 - Japan</option>
                <option value="+82">+82 - South Korea</option>
                <option value="+672">+672 - Australia</option>
              </select>
              {formik.touched.mobileISD && formik.errors.mobileISD && (
                <p className="text-red-500 text-sm">
                  {formik.errors.mobileISD}
                </p>
              )}
            </div>
            <div className="ml-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
                  formik.errors.mobileNumber
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                placeholder="Enter your mobile number"
                {...formik.getFieldProps("mobileNumber")}
              />
              {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                <p className="text-red-500 text-sm">
                  {formik.errors.mobileNumber}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="mr-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Fax
              </label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your fax number"
                {...formik.getFieldProps("fax")}
              />
            </div>
            <div className="ml-2 w-1/2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Phone
              </label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your phone number"
                {...formik.getFieldProps("phone")}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Password<span className="text-red-500">*</span>
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

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className={`w-full border px-3 py-2 rounded-md focus:outline-none ${
              formik.errors.confirmPassword
                ? "border-red-500"
                : "focus:border-blue-500"
            }`}
            placeholder="Confirm your password"
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
