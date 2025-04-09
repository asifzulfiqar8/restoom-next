"use client";
import { useState } from "react";
import Input from "@/components/global/small/Input";
import Button from "@/components/global/small/Button";

const EditSensor = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    ip: "",
    url: "",
    port: "",
    location: "",
    uniqueId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sensor Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-12 gap-4"
    >
      <div className="lg:col-span-6">
        <Input
          label="Sensor Name"
          name="name"
          placeholder="e.g. Pressure Sensor"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          label="Type"
          name="type"
          placeholder="e.g. Pressure, Temperature"
          value={formData.type}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          label="IP Address"
          name="ip"
          placeholder="e.g. 192.168.1.1"
          value={formData.ip}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          label="Stream URL"
          name="url"
          placeholder="e.g. http://example.com/stream"
          value={formData.url}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          label="Port"
          name="port"
          placeholder="e.g. 8080"
          value={formData.port}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-6">
        <Input
          label="Location"
          name="location"
          placeholder="e.g. Main Plant Area"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className="lg:col-span-12">
        <Input
          label="Unique ID"
          name="uniqueId"
          placeholder="e.g. SN-872364923"
          value={formData.uniqueId}
          onChange={handleChange}
        />
      </div>

      <div className="lg:col-span-12 flex items-center justify-center gap-4 mt-4">
        <Button
          onClick={onClose}
          text="Cancel"
          cn="border-primary bg-transparent !text-primary"
        />
        <Button text="Save Sensor" />
      </div>
    </form>
  );
};

export default EditSensor;
