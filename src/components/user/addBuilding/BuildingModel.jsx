import Button from "@/components/global/small/Button";
import MarkBuildingModel from "./MarkBuildingModel";
import { useState } from "react";

const BuildingModel = ({ setCurrentStep }) => {
  const [buildingModelImage, setBuildingModelImage] = useState(null);
  const [polygons, setPolygons] = useState([]);
  const [file, setFile] = useState(null);
  const nextBtnHandler = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <h6 className="text-base text-primary font-medium">Building Model</h6>
      <div className="py-10 grid place-items-center">
        <MarkBuildingModel
          setFile={setFile}
          buildingModelImage={buildingModelImage}
          setBuildingModelImage={setBuildingModelImage}
          polygons={polygons}
          setPolygons={setPolygons}
        />
      </div>
      <div className="flex items-center justify-end gap-4">
        <Button
          text="Back"
          width="!w-[150px]"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          cn="!bg-[#ACACAC40] !text-[#111111B2] hover:!bg-primary hover:!text-white"
        />
        <Button text="Next" width="!w-[150px]" onClick={nextBtnHandler} />
      </div>
    </div>
  );
};

export default BuildingModel;
