import React from "react";
import { Link, Globe, FileUp, Wallet } from "lucide-react";

const Stats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-2">
      <div className="flex flex-col rounded-3xl p-3 sm:p-6 bg-purple-50 text-purple-400">
        <div className="flex flex-col gap-7">
          <div className="rounded-full bg-white flex justify-center items-center w-10 h-10">
            <Wallet className="h-6 w-6 stroke-purple-400" />
          </div>
          <div>
            <h3 className="text-3xl font-bold">12,750</h3>
            <p className="text-[0.75rem]">Total Wallets Scored</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl p-3 sm:p-6 bg-pink-50 text-pink-400">
        <div className="flex flex-col gap-7">
          <div className="rounded-full bg-white flex justify-center items-center w-10 h-10">
            <FileUp className="h-6 w-6 stroke-pink-400" />
          </div>
          <div>
            <h3 className="text-3xl font-bold">40.10K</h3>
            <p className="text-[0.75rem]">Total Transactions Tracked</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl p-3 sm:p-6 bg-blue-50 text-blue-400">
        <div className="flex flex-col gap-7">
          <div className="rounded-full bg-white flex justify-center items-center w-10 h-10">
            <Link className="h-6 w-6 stroke-blue-400" />
          </div>
          <div>
            <h3 className="text-3xl font-bold">110</h3>
            <p className="text-[0.75rem]">Total Chains Scored</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-3xl p-3 sm:p-6 bg-green-50 text-green-400">
        <div className="flex flex-col gap-7">
          <div className="rounded-full bg-white flex justify-center items-center w-10 h-10">
            <Globe className="h-6 w-6 stroke-green-400" />
          </div>
          <div>
            <h3 className="text-3xl font-bold">8,654</h3>
            <p className="text-[0.75rem]">Real World Score Generated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
