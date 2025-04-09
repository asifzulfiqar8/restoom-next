"use client";
import { initialSensorsData, tableStyles } from "@/data/data";
import DataTable from "react-data-table-component";
import { IoIosAddCircle } from "react-icons/io";
import { HiOutlineEye } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import ToggleButton from "@/components/global/small/ToggleButton";
import { useState } from "react";
import Modal from "@/components/global/Modal";
import AddSensor from "./AddSensor";
import EditSensor from "./EditSensor";
import Button from "@/components/global/small/Button";

const Sensors = () => {
  const [sensorsData, setSensorsData] = useState(initialSensorsData);
  const [modalType, setModalType] = useState("");

  const modalOpenHandler = (type, row) => setModalType(type);
  const modalCloseHandler = (type) => setModalType("");
  const handleStatusHandler = (index) => {
    const updatedData = [...sensorsData];
    const status = updatedData[index].status;
    updatedData[index].status =
      status === "connected" ? "disconnected" : "connected";
    setSensorsData(updatedData);
  };

  return (
    <section className="bg-white p-4 md:p-5 rounded-[10px]">
      <div className="flex justify-between items-center">
        <h4 className="text-base md:text-xl font-semibold text-[#05004E]">
          All Sensors
        </h4>
        <button onClick={() => modalOpenHandler("add")}>
          <IoIosAddCircle className="text-primary text-2xl" />
        </button>
      </div>
      <div className="mt-6">
        <DataTable
          data={sensorsData}
          columns={tableColumns(handleStatusHandler, modalOpenHandler)}
          customStyles={tableStyles}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="60vh"
          selectableRows
        />
      </div>
      {modalType === "add" && (
        <Modal onClose={modalCloseHandler} title={"Add Sensor"}>
          <AddSensor onClose={modalCloseHandler} />
        </Modal>
      )}
      {modalType === "edit" && (
        <Modal onClose={modalCloseHandler} title={"Edit Sensor"}>
          <EditSensor onClose={modalCloseHandler} />
        </Modal>
      )}
      {modalType === "delete" && (
        <Modal
          onClose={modalCloseHandler}
          title={"Confirmation"}
          width="w-[300px] md:w-[600px]"
        >
          <div>
            <p className="text-[16px] text-[#00000090]">
              Are you sure you want to delete this sensor?
            </p>
            <div className="flex items-center justify-end gap-4 mt-5">
              <Button
                onClick={modalCloseHandler}
                text="Cancel"
                cn="border-primary bg-transparent !text-primary"
              />
              <Button text="Delete Sensor" />
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Sensors;

const tableColumns = (handleStatusHandler, modalOpenHandler) => [
  {
    name: "Sensor Name",
    selector: (row) => row?.name,
  },
  {
    name: "IP",
    selector: (row) => row?.ip,
  },
  {
    name: "Port",
    selector: (row) => row?.port,
  },
  {
    name: "Type",
    selector: (row) => row?.type,
  },
  {
    name: "Unique Id",
    selector: (row) => row?.uniqueId,
  },
  {
    name: "Status",
    cell: (row, index) => (
      <ToggleButton
        isChecked={row.status === "connected" ? true : false}
        onToggle={() => handleStatusHandler(index)}
      />
    ),
  },
  {
    name: "Action",
    cell: (row) => (
      <div className="flex items-center gap-3">
        <Link href={`/sensors/${row._id}`}>
          <div className="cursor-pointer">
            <HiOutlineEye fontSize={20} />
          </div>
        </Link>

        <div
          className="cursor-pointer"
          onClick={() => modalOpenHandler("edit", row)}
        >
          <CiEdit fontSize={23} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => modalOpenHandler("delete", row)}
        >
          <AiOutlineDelete fontSize={23} style={{ color: "red" }} />
        </div>
      </div>
    ),
  },
];
