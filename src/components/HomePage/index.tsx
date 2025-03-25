import React from "react";
import Stats from "./Stats";
import Graph from "./Graph";
import Chains from "./Chains";
import Assets from "./Assets";

const index = () => {
  return (
    <div className="py-10 px-3 md:px-12">
      <h1 className="text-3xl font-bold">Global Stats</h1>
      <hr className="my-6 text-slate-200" />
      <Stats />
      <Graph />
      <div className="flex lg:flex-row flex-col gap-4 mt-7">
        <div className="flex-1">
          <Assets />
        </div>
        <div className="flex-1">
          <Chains />
        </div>
      </div>
    </div>
  );
};

export default index;
