"use client";
import dynamic from "next/dynamic";
import Alerts from "./Alerts";
import DashboardCard from "./DashboardCard";
import { dashboardCardsData } from "@/data/data";
const Map = dynamic(() => import("./Map"), { ssr: false });

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        {dashboardCardsData.map((card, i) => (
          <DashboardCard card={card} key={i} />
        ))}
      </div>
      <section className=" grid grid-cols-1 lg:grid-cols-12  gap-4 ">
        <div className="xl:col-span-8">
          <Map />
        </div>
        <div className="xl:col-span-4">
          <Alerts />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
