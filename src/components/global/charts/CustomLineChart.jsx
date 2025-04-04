"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { AiOutlineArrowUp } from "react-icons/ai";

// Dummy data
const data = [
  { day: 1, value: 15 },
  { day: 2, value: 28 },
  { day: 3, value: 40 },
  { day: 4, value: 32 },
  { day: 5, value: 45 },
  { day: 6, value: 35 },
  { day: 7, value: 25 },
  { day: 8, value: 39 },
  { day: 9, value: 41 },
  { day: 10, value: 30 },
  { day: 11, value: 22 },
  { day: 12, value: 38 },
  { day: 13, value: 42 },
  { day: 14, value: 43 },
  { day: 15, value: 44 },
  { day: 16, value: 29 },
  { day: 17, value: 28 },
  { day: 18, value: 20 },
  { day: 19, value: 15 },
  { day: 20, value: 18 },
  { day: 21, value: 21 },
  { day: 22, value: 27 },
  { day: 23, value: 35 },
  { day: 24, value: 30 },
  { day: 25, value: 25 },
  { day: 26, value: 17 },
  { day: 27, value: 12 },
  { day: 28, value: 15 },
  { day: 29, value: 20 },
  { day: 30, value: 18 },
];

// Custom Tooltip Component
function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || payload.length === 0) return null;

  const currentValue = payload[0].value;
  return (
    <div className="bg-white border border-gray-300 rounded-md p-2 text-xs shadow-md">
      <p className="text-gray-700 font-semibold mb-1">{label} May 2024</p>
      <div className="flex items-center gap-1">
        <span className="text-[#A449EB] font-bold">{currentValue}%</span>
        <AiOutlineArrowUp className="text-green-500" />
      </div>
    </div>
  );
}

export default function CustomAreaChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: -25, bottom: 0 }}
        >
          <CartesianGrid vertical={false} stroke="#f0f0f0" />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#888" }}
          />

          {/* Set Y-Axis domain from 10 to 50 (adjust as needed) */}
          <YAxis
            domain={[10, 50]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#888" }}
            tickFormatter={(val) => `${val}%`}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#d0d0d0", strokeDasharray: "3 3" }}
          />

          {/* Define gradients */}
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#A449EB" stopOpacity={1} />
              <stop offset="100%" stopColor="#A449EB" stopOpacity={0.5} />
            </linearGradient>
            {/* Gradient for the area fill */}
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A449EB" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#A449EB" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            fill="url(#areaGradient)"
            fillOpacity={1}
            dot={false}
            activeDot={{
              r: 6,
              stroke: "#A449EB",
              strokeWidth: 2,
              fill: "#fff",
            }}
            baseValue="dataMin"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
