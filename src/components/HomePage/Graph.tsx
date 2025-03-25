"use client";
import { CreditCard, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import BarGraph1 from "./BarGraph1";
import BarGraph2 from "./BarGraph2";
import BarGraph3 from "./BarGraph3";

const Graph = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState("All Chain");

  const chains = ["All Chain", "Ethereum", "Binance", "Polygon"];

  return (
    <div className="p-2 md:p-5 border border-slate-200 rounded-3xl my-5 text-slate-600">
      <div className="flex flex-col md:flex-row gap-2 justify-between align-middle items-center">
      <div className="relative">
          <button
            className="rounded-3xl bg-slate-100 px-3 py-1 text-md flex justify-center items-center gap-1"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedChain}
            <ChevronDown className="w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute mt-2 bg-white border border-slate-200 rounded-xl shadow-lg w-full z-10">
              {chains.map((chain) => (
                <div
                  key={chain}
                  className="px-4 py-2 cursor-pointer hover:bg-slate-100"
                  onClick={() => {
                    setSelectedChain(chain);
                    setIsDropdownOpen(false);
                  }}
                >
                  {chain}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rounded-3xl flex justify-center items-center text-md gap-1 ">
          <button
            className={`px-4 py-1 rounded-3xl cursor-pointer transition ${
              selectedTab === 1 ? "bg-slate-100" : "hover:bg-slate-100"
            }`}
            onClick={() => setSelectedTab(1)}
          >
            Overview
          </button>
          <button
            className={`px-4 py-1 rounded-3xl cursor-pointer transition ${
              selectedTab === 2 ? "bg-slate-100" : "hover:bg-slate-100"
            }`}
            onClick={() => setSelectedTab(2)}
          >
            Liquidations
          </button>
          <button
            className={`px-4 py-1 rounded-3xl cursor-pointer transition ${
              selectedTab === 3 ? "bg-slate-100" : "hover:bg-slate-100"
            }`}
            onClick={() => setSelectedTab(3)}
          >
            Loan Sizes
          </button>
        </div>
      </div>
      <div className="pt-5 flex flex-col md:flex-row gap-5 justify-between items-stretch h-full w-full">
        {/* Left Section (Wallet Info) */}
        <div className="md:w-1/5 bg-slate-100 py-6 px-4 rounded-3xl flex items-stretch">
          <div className="flex flex-row md:flex-col justify-between w-full h-full gap-8">
            <div className="rounded-full bg-white flex justify-center items-center w-11 h-11">
              <CreditCard className="h-8 w-8 stroke-slate-400" />
            </div>
            <div>
              <p className="text-sm pb-1">Wallets</p>
              <h3 className="text-3xl font-bold">7000</h3>
            </div>
          </div>
        </div>

        {/* Right Section (Graph) */}
        <div className="md:w-4/5 flex items-stretch">
          <div className="w-full h-full flex items-stretch">
            {selectedTab === 1 ? (
              <BarGraph1 />
            ) : selectedTab === 2 ? (
              <BarGraph2 />
            ) : (
              <BarGraph3 />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
