import { connectDb } from "@/configs/connectDb";
import { isAuthenticated } from "@/lib/isAuthenticated";
import { Sensor } from "@/models/sensor.model";
import { asyncHandler } from "@/utils/asynHanlder";
import { customError } from "@/utils/customError";
import { isValidObjectId } from "mongoose";
import { turborepoTraceAccess } from "next/dist/build/turborepo-access-trace";
import { NextResponse } from "next/server";

export const GET = asyncHandler(async (req, { params }) => {
  await connectDb();
  const user = await isAuthenticated();
  const ownerId = user._id;
  const { sensorId } = await params;
  if (!isValidObjectId(sensorId))
    throw new customError(400, "Invalid sensor id");

  const sensor = await Sensor.findOne({ _id: sensorId, ownerId });

  return NextResponse.json({
    success: true,
    message: "Sensor fetched successfully",
    sensor,
  });
});

export const PUT = asyncHandler(async (req, { params }) => {
  await connectDb();
  const user = await isAuthenticated();
  const ownerId = user._id;
  const { sensorId } = await params;
  if (!isValidObjectId(sensorId))
    throw new customError(400, "Invalid sensor id");
  const body = await req.json();
  const { name, type, uniqueId, status, isConnected } = body;
  if (!name && !type && !uniqueId && !status && !isConnected)
    throw new customError(400, "Please provide at least one field to update");

  const sensor = await Sensor.findOne({ _id: sensorId, ownerId });
  if (!sensor) throw new customError(400, "Sensor not found");
  if (name) sensor.name = name;
  if (type) sensor.type = type;
  if (status) {
    if (status === "true") sensor.status = true;
    if (status === "false") sensor.status = false;
  }
  if (isConnected) {
    if (isConnected === "true") sensor.isConnected = true;
    if (isConnected === "false") sensor.isConnected = false;
  }
  if (uniqueId && uniqueId != sensor.uniqueId) {
    const isExist = await Sensor.findOne({ uniqueId });
    if (isExist) throw new customError(400, "Sensor uniqueId already exists");
    sensor.uniqueId = uniqueId;
  }
  await sensor.save();
  return NextResponse.json({
    success: true,
    message: "Sensor updated Successfully",
    sensor,
  });
});

export const DELETE = asyncHandler(async (req, { params }) => {
  await connectDb();
  const user = await isAuthenticated();
  const ownerId = user._id;
  const { sensorId } = await params;
  if (!isValidObjectId(sensorId))
    throw new customError(400, "Invalid sensor id");

  const sensor = await Sensor.findOneAndDelete({ _id: sensorId, ownerId });
  if (!sensor) throw new customError(400, "Sensor not found");

  return NextResponse.json({
    success: true,
    message: "Sensor Deleted successfully",
  });
});
