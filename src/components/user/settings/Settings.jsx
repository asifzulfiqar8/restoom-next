"use client";
import { useState } from "react";
import Profile from "./Profile";
import SubscriptionHistory from "./SubscriptionHistory";
import ChangePassword from "./ChangePassword";
import Configuration from "./Configuration";

const Settings = () => {
  const [tabs, setTabs] = useState("Profile");

  const handleTabChange = (tab) => setTabs(tab);
  return (
    <section className="bg-white rounded-[15px] p-4 lg:p-6">
      <div className="flex items-center gap-4">
        {[
          "Profile",
          "Subscriptions History",
          "Change Password",
          "Configuration",
        ].map((tab, i) => (
          <button
            key={i}
            className={`text-base font-medium px-5 py-3 rounded-md transition-all duration-150 ${
              tabs === tab
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 md:mt-5">
        {tabs === "Profile" && (<Profile />)}
        {tabs === "Subscriptions History" && (<SubscriptionHistory />)}
        {tabs === "Change Password" && (<ChangePassword />)}
        {tabs === "Configuration" && (<Configuration />)}
      </div>
    </section>
  );
};

export default Settings;
