"use client";
import { infoCardsData } from "@/data/data";
import BuildingCard from "./BuildingCard";
import QueueingStatus from "./QueueingStatus";
const FloorActivityChart = dynamic(() => import("./FloorActivityChart"), {
  ssr: false,
});
import dynamic from "next/dynamic";
import MostUsedRooms from "./MostUsedRooms";

const BuildingDetail = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-8 bg-white rounded-lg p-4 md:p-5">
        Building Details
      </div>
      <div className="lg:col-span-4">
        <QueueingStatus />
      </div>
      <div className="lg:col-span-8">
        <div className="flex flex-wrap gap-4">
          {infoCardsData.map((item, i) => (
            <BuildingCard data={item} key={i} />
          ))}
        </div>
        <div className="mt-5 bg-white p-5 rounded-xl">
          <FloorActivityChart />
        </div>
      </div>
      <div className="lg:col-span-4">
        <MostUsedRooms />
      </div>
    </section>
  );
};

export default BuildingDetail;
