"use client";
import dynamic from "next/dynamic";
import Alerts from "./Alerts";
const Map = dynamic(() => import("./Map"), { ssr: false });

const Dashboard = () => {
  return (
    <section className=" grid grid-cols-1 xl:grid-cols-12  gap-4 ">
      <div className="xl:col-span-8">
        <Map />
      </div>
      <div className="xl:col-span-4">
        <Alerts />
      </div>
    </section>
  );
};

export default Dashboard;
