"use client";
import React, { PureComponent } from "react";
import {
  Bar,
  ResponsiveContainer,
  XAxis,
  Line,
  ComposedChart,
  LabelList,
  Tooltip,
} from "recharts";

const BarGraph1 = () => {
  const data = [
    {
      name: "Page A",
      uv: 1500,
      pv: 1700,
      amt: 0,
    },
    {
      name: "Page B",
      uv: 1200,
      pv: 1400,
      amt: 200,
    },
    {
      name: "Page C",
      uv: 900,
      pv: 1100,
      amt: 400,
    },
    {
      name: "Page D",
      uv: 600,
      pv: 800,
      amt: 600,
    },
    {
      name: "Page E",
      uv: 160,
      pv: 300,
      amt: 800,
    },
  ];

  // Function to format X-axis labels
  const formatRange = (value: number) => {
    const lowerLimit = value;
    const upperLimit = value + 200;
    return `${lowerLimit}-${upperLimit}`;
  };

  return (
    <div className="bg-pink-50 rounded-3xl w-full h-96 ">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 40,
            bottom: 20,
          }}
        >
          <Bar dataKey="uv" fill="#fb64b6" radius={24}>
            <LabelList
              dataKey="uv"
              position="insideBottom"
              fill="#FFFFFF"
              fontSize={16}
              fontWeight="bold"
            />
          </Bar>
          <Tooltip cursor={false} content={() => null} />
          <XAxis
            tickFormatter={formatRange}
            dataKey="amt"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#fb64b6", fontSize: 12, fontWeight: 400 }}
            domain={["dataMin", "dataMax"]}
            tickMargin={10}
          />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#fb64b6"
            strokeWidth={2}
            dot={false} // No default dots
            activeDot={{
              r: 8, // Dot size on hover
              fill: "#fb64b6", // Red background
              stroke: "#fff", // White border
              strokeWidth: 0,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph1;
