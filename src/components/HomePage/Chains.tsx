"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ReactPaginate from "react-paginate";

const tableData = [
  {
    chain: "Ethereum",
    volume: "$20B",
    uaw: "100M",
    transactions: "1B",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    chain: "Base",
    volume: "$16B",
    uaw: "150M",
    transactions: "1.5B",
    image:
      "https://altcoinsbox.com/wp-content/uploads/2023/02/base-logo-in-blue.png",
  },
  {
    chain: "Bera",
    volume: "$12B",
    uaw: "200M",
    transactions: "2B",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/24647.png",
  },
  {
    chain: "Polygon",
    volume: "$10B",
    uaw: "10M",
    transactions: "100M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6leCuldaSsxH99h2ZPJXtT9aG3jRb0XTsQ&s",
  },
  {
    chain: "Arbitrum",
    volume: "$8B",
    uaw: "50M",
    transactions: "500B",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQ1pwxVT3lqCTZWhuUZzKTOqT0ZmYh2oeg&s",
  },
  {
    chain: "Bera",
    volume: "$12B",
    uaw: "200M",
    transactions: "2B",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/24647.png",
  },
  {
    chain: "Polygon",
    volume: "$10B",
    uaw: "10M",
    transactions: "100M",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6leCuldaSsxH99h2ZPJXtT9aG3jRb0XTsQ&s",
  },
  {
    chain: "Arbitrum",
    volume: "$8B",
    uaw: "50M",
    transactions: "500B",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQ1pwxVT3lqCTZWhuUZzKTOqT0ZmYh2oeg&s",
  },
];

const ITEMS_PER_PAGE = 5;

const Chains = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data based on search query
  const filteredData = tableData.filter((chain) =>
    chain.chain.toLowerCase().includes(searchQuery.toLowerCase())
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
      <h1 className="text-3xl font-bold">Chains</h1>
      <div className="border border-slate-200 rounded-3xl flex items-center p-2 gap-4 text-slate-600 w-full my-5">
        <Search className="h-6 w-6 stroke-slate-300" />
        <input
          placeholder="Search chain"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full font-medium text-sm outline-none focus:ring-0"
        />
      </div>

      <div className="overflow-x-auto w-full text-sm min-h-80">
        <table className="min-w-max w-full border-collapse text-left">
          <thead>
            <tr className="text-sm text-slate-400 font-light whitespace-nowrap">
              <th className="p-3">Chain</th>
              <th className="p-3">Volume</th>
              <th className="p-3">UAW</th>
              <th className="p-3">Transactions</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((row, index) => (
              <tr key={index}>
                <td className="p-3 flex items-center gap-2 whitespace-nowrap">
                  <img src={row.image} alt={row.chain} className="w-7 h-7" />
                  <span>{row.chain}</span>
                </td>
                <td className="p-3 whitespace-nowrap">{row.volume}</td>
                <td className="p-3 whitespace-nowrap">{row.uaw}</td>
                <td className="p-3 whitespace-nowrap">{row.transactions}</td>
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

export default Chains;
