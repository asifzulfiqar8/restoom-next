import Button from "@/components/global/small/Button";

const BuildingModel = ({ setCurrentStep }) => {
  const nextBtnHandler = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <h6 className="text-base text-primary font-medium">Building Model</h6>
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
