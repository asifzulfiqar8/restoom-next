"use client";

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Input from "../global/small/Input";

const SignupForm = () => {
  return (
    <form
      className="bg-white p-5 lg:py-8 lg:px-[8%] rounded-xl w-full"
      onSubmit={handleForm}
    >
      <h6 className="text-center md:text-left text-xl lg:text-2xl font-semibold text-text-textColor">
        Sign up now
      </h6>
      <div className="mt-5 lg:mt-7 grid grid-cols-1 gap-4">
        <Input
          label="Full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <Input
          label="Email address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
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
            className="absolute top-0 right-0 flex items-center gap-2 cursor-pointer text-sm lg:text-lg text-[#666666CC]"
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
        <Button
          width="w-full md:w-[184px]"
          height="h-[43px]"
          text="Sign up"
          type="submit"
          disabled={!isFormValid}
          cn={isFormValid ? "" : "opacity-50 cursor-not-allowed"}
        />
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
