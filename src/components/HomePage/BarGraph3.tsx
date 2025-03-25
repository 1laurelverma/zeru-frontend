"use client";
import React, { PureComponent } from "react";
import {
  Bar,
  ResponsiveContainer,
  XAxis,
  Line,
  ComposedChart,
  Tooltip,
  LabelList,
} from "recharts";

const BarGraph3 = () => {
  const data = [
    {
      name: "Page A",
      uv: 190,
      pv: 270,
      amt: 0,
    },
    {
      name: "Page B",
      uv: 335,
      pv: 560,
      amt: 200,
    },
    {
      name: "Page C",
      uv: 695,
      pv: 900,
      amt: 400,
    },
    {
      name: "Page D",
      uv: 964,
      pv: 1600,
      amt: 600,
    },
    {
      name: "Page E",
      uv: 2000,
      pv: 2600,
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
    <div className="bg-green-50 rounded-3xl w-full h-96 ">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 40,
            bottom: 20,
          }}
        >
          <Bar dataKey="uv" fill="#05df72" radius={24}>
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
            tick={{ fill: "#05df72", fontSize: 12, fontWeight: 400 }}
            domain={["dataMin", "dataMax"]}
            tickMargin={10}
          />

          <Line
            type="monotone"
            dataKey="pv"
            stroke="#05df72"
            strokeWidth={2}
            dot={false} // No default dots
            activeDot={{
              r: 8, // Dot size on hover
              fill: "#05df72", // Red background
              stroke: "#fff", // White border
              strokeWidth: 0,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph3;
