"use client";

import Button from "@/components/global/small/Button";

const GeneralInfo = ({ setCurrentStep }) => {
  const nextBtnHandler = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  return (
    <div>
      <h6 className="text-base text-primary font-medium">
        General Information
      </h6>
      <form className="grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-3 flex justify-end">
          <Button text="Next" width="!w-[150px]" onClick={nextBtnHandler} />
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
