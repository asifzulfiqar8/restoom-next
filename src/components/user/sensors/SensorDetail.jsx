"use client";
import Loader from "@/components/global/Loader";
import { useGetSingleSensorQuery } from "@/features/sensor/sensorApi";
import { useEffect, useState } from "react";

const SensorDetail = ({ id }) => {
  const { data, isLoading, error } = useGetSingleSensorQuery(id);
  const [sensorData, setSensorData] = useState({});

  console.log("SensorDetail", sensorData);

  useEffect(() => {
    if (data?.sensor) {
      setSensorData(data.sensor);
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  return <div>SensorDetail</div>;
};

export default SensorDetail;
