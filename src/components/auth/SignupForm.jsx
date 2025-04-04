"use client";

import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Input from "../global/small/Input";
import Button from "../global/small/Button";
import Link from "next/link";

const SignupForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Check if form is valid (simple validation)
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.confirmPassword.trim() !== "" &&
    formData.password === formData.confirmPassword;

  // Handle form submission
  const handleForm = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("Form Submitted", formData);
    // API call or action for signup
  };

  return (
    <form
      className="bg-white p-5 lg:py-8 lg:px-[8%] rounded-xl w-full"
      onSubmit={handleForm}
    >
      <h6 className="text-center md:text-left text-xl lg:text-2xl font-semibold text-text-textColor">
        Sign up now
      </h6>
      <div className="mt-5 lg:mt-7 grid grid-cols-1 gap-4 md:gap-6">
        <div>
          <Input
            label="Full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Input
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="relative">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="new-password"
          />
          <div
            className="absolute top-0 right-3 flex items-center gap-2 cursor-pointer text-sm lg:text-lg text-[#666666CC]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <>
                <IoEyeOutline color="#666666CC" />
                Show
              </>
            ) : (
              <>
                <IoEyeOffOutline color="#666666CC" />
                Hide
              </>
            )}
          </div>
        </div>
        <div className="relative">
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            autoComplete="new-password"
          />
          <div
            className="absolute top-0 right-3 flex items-center gap-2 cursor-pointer text-sm lg:text-lg text-[#666666CC]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {!showConfirmPassword ? (
              <>
                <IoEyeOutline color="#666666CC" />
                Show
              </>
            ) : (
              <>
                <IoEyeOffOutline color="#666666CC" />
                Hide
              </>
            )}
          </div>
        </div>
        <Button text="Sign up" type="submit" />
        <div className="text-sm lg:text-base text-[#666666]">
          Already have an Account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
