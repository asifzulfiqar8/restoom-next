"use client";
import { useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Notifications from "../Notifications";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";

const Header = () => {
  const [profileActive, setProfileActive] = useState(false);
  const [notificationActive, setNotificationActive] = useState(false);
  const notificationRef = useRef();
  const profileRef = useRef();
  const isLoading = false;
  const toggleDropDown = () => {
    setProfileActive(!profileActive);
    setNotificationActive(false);
  };

  const handleNotification = () => {
    setNotificationActive(!notificationActive);
    setProfileActive(false);
  };

  const logoutHandler = async () => {
    console.log("log out clicked");
  };
  return (
    <header className="w-full h-[220px] bg-[#088d9cc5] rounded-xl bg-[url('/images/default/header-bg.png')] bg-no-repeat bg-cover bg-center bg-blend-overlay p-5 md:p-8 flex flex-col justify-between">
      <div className="flex justify-end">
        <div className="flex justify-end  items-center gap-4">
          <button
            className="bg-black h-[40px] w-[40px] flex justify-center items-center rounded-lg relative cursor-pointer"
            onClick={handleNotification}
            ref={notificationRef}
          >
            <FaRegBell color="white" />
            <GoDotFill
              color="#EB5757"
              className="absolute right-[-4px] top-[-6px]"
            />
            {notificationActive && (
              <div className="absolute top-[45px] right-[-60px] sm:right-0 bg-white drop-shadow-md rounded-lg w-[280px] h-[300px] border border-gray-300 z-[999999] overflow-y-auto no-scrollbar">
                <Notifications />
              </div>
            )}
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            <img
              src="/images/default/profile.png"
              alt="profile-pic"
              className="w-[40px] h-[40px] rounded-lg object-cover hidden md:inline-block cursor-pointer"
              onClick={toggleDropDown}
            />
          </div>
        </div>
        {profileActive && (
          <div className="absolute top-[85px] right-[42px] bg-white shadow-md rounded-lg w-[150px] z-10">
            <Link
              className="flex items-center justify-between px-3 py-2 border-b border-gray-200"
              href={""}
              onClick={() => setProfileActive(false)}
            >
              Profile
              <IoIosArrowForward />
            </Link>
            <div
              className={`flex items-center justify-between px-3 py-2 cursor-pointer ${
                isLoading ? "cursor-none pointer-events-none opacity-50" : ""
              }`}
              onClick={logoutHandler}
            >
              Logout
              <IoIosLogOut />
            </div>
          </div>
        )}
      </div>
      <h3 className="text-lg lg:text-[34px] font-semibold text-white leading-none">
        Dashboard
      </h3>
    </header>
  );
};

export default Header;
