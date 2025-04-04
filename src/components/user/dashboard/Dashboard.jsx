"use client";
import dynamic from "next/dynamic";
import Alerts from "./Alerts";
import DashboardCard from "./DashboardCard";
import { dashboardCardsData, pieChartData } from "@/data/data";
import CustomLineChart from "@/components/global/charts/CustomLineChart";
import { BuildingIcon } from "@/assets/icon";
import PieChartComponent from "@/components/global/charts/PieChartComponent";
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
        <div className="xl:col-span-8 rounded-2xl bg-white p-4 md:p-5 shadow-md">
          <h6 className="text-base md:text-xl font-semibold text-black mb-5">
            Overall Performance
          </h6>
          <CustomLineChart />
        </div>
        <div className="xl:col-span-4 rounded-2xl bg-white p-4 md:p-5 shadow-md flex flex-col justify-around">
          <h6 className="text-base md:text-xl font-medium text-black mb-5 flex items-center gap-1">
            <BuildingIcon isLinkActive />
            Top Buildings
          </h6>
          <PieChartComponent
            data={pieChartData}
            COLORS={["#FF955A", "#7A5AF8", "#34C1FD"]}
            icon="/images/dashboard/building.png"
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
