import Button from "@/components/global/small/Button";

const Restrooms = ({ setCurrentStep }) => {
  const saveBuilding = () => {
    console.log("save building");
  };
  return (
    <div>
      <h6 className="text-base text-primary font-medium">Restrooms</h6>
      <div className="flex items-center justify-end gap-4">
        <Button
          text="Back"
          width="!w-[150px]"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          cn="!bg-[#ACACAC40] !text-[#111111B2] hover:!bg-primary hover:!text-white"
        />
        <Button
          text="Save Building"
          width="!w-[200px]"
          onClick={saveBuilding}
        />
      </div>
    </div>
  );
};

export default Restrooms;
