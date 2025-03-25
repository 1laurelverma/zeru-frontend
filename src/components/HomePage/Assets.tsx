"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ReactPaginate from "react-paginate";

const assetsData = [
  {
    asset: "USDC",
    borrowValue: "$20B",
    collateralVolume: "100M",
    totalVolume: "1B",
    image: "https://cryptologos.cc/logos/tether-usdt-logo.png",
  },
  {
    asset: "USDT",
    borrowValue: "$16B",
    collateralVolume: "150M",
    totalVolume: "1.5B",
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
  },
  {
    asset: "ETH",
    borrowValue: "$12B",
    collateralVolume: "200M",
    totalVolume: "2B",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&s",
  },
  {
    asset: "BASE",
    borrowValue: "$10B",
    collateralVolume: "10M",
    totalVolume: "100M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNvsFSvVHz_EkKpHzfTvTZKM-VaiqOpiorA&s",
  },
  {
    asset: "ARB",
    borrowValue: "$8B",
    collateralVolume: "50M",
    totalVolume: "500B",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQ1pwxVT3lqCTZWhuUZzKTOqT0ZmYh2oeg&s",
  },
  {
    asset: "SOL",
    borrowValue: "$6B",
    collateralVolume: "80M",
    totalVolume: "900M",
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
  },
  {
    asset: "BNB",
    borrowValue: "$15B",
    collateralVolume: "300M",
    totalVolume: "3B",
    image: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
  },
];

const ITEMS_PER_PAGE = 5;

const Assets = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data based on search query
  const filteredData = assetsData.filter((asset) =>
    asset.asset.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0); // Reset to first page on search
  };

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const displayedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="py-5 px-2 sm:px-5 border border-slate-200 rounded-3xl">
      <h1 className="text-3xl font-bold">Assets</h1>
      <div className="border border-slate-200 rounded-3xl flex items-center p-2 gap-4 text-slate-600 w-full my-5">
        <Search className="h-6 w-6 stroke-slate-300" />
        <input
          placeholder="Search asset"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full font-medium text-sm outline-none focus:ring-0"
        />
      </div>
      <div className="overflow-x-auto w-full text-sm min-h-80">
        <table className="min-w-max w-full border-collapse text-left">
          <thead>
            <tr className="text-sm text-slate-400 font-light whitespace-nowrap">
              <th className="p-3">Asset</th>
              <th className="p-3">Borrow Value</th>
              <th className="p-3">Collateral Volume</th>
              <th className="p-3">Total Volume</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((row, index) => (
              <tr key={index}>
                <td className="p-3 flex items-center gap-2 whitespace-nowrap">
                  <img src={row.image} alt={row.asset} className="w-7 h-7" />
                  <span>{row.asset}</span>
                </td>
                <td className="p-3 whitespace-nowrap">{row.borrowValue}</td>
                <td className="p-3 whitespace-nowrap">
                  {row.collateralVolume}
                </td>
                <td className="p-3 whitespace-nowrap">{row.totalVolume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredData.length > ITEMS_PER_PAGE && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={
            "flex justify-center items-center gap-4 mt-4 text-sm"
          }
          previousClassName={"cursor-pointer"}
          nextClassName={"cursor-pointer"}
          disabledClassName={"opacity-50 cursor-pointer"}
          activeClassName={"bg-purple-400 text-white px-2 py-0 rounded-full"}
        />
      )}
    </div>
  );
};

export default Assets;
