import React, { useState, useRef } from "react";
import campaignData from "../../../src/data.json";
import "./Table.css";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import _ from "lodash";
const Table = () => {
  const [data, setData] = useState(campaignData);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const [currentData, setCurentData] = useState(
    data.slice(indexOfFirstData, indexOfLastData)
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const delayedQuery = useRef(_.debounce((value) => filterData(value), 500))
    .current;

  const filterData = (value) => {
    const filteredData = campaignData.filter((x) => {
      if (x.name.toUpperCase().includes(value.toUpperCase())) return x;
    });

    console.log(filteredData);
    setData(filteredData);
    setCurentData(filteredData.slice(indexOfFirstData, indexOfLastData));
  };

  return (
    <div>
      <div className="container">
        <div>
          <Filter
            value={searchValue}
            onChange={(e) => {
              let val = e.target.value;
              setSearchValue(e.target.value);

              if (val !== "") {
                delayedQuery(e.target.value);
              } else {
                setCurentData(campaignData.slice(0, 10));
                setData(campaignData);
              }
            }}
          />
          <table className="table">
            <thead>
              <tr className="table-row">
                <th className="column header cell">Campaign Name</th>
                <th className="column header cell">Type</th>
                <th className="column header cell">Last Saved</th>
                <th className="column header cell">Actions</th>
              </tr>

              {currentData.map((campaign, index) => (
                <tr className="table-row" key={campaign._id + " " + index}>
                  <td className="cell">{campaign.name}</td>
                  <td className="cell">{campaign.type}</td>
                  <td className="cell"></td>
                  <td className="cell"></td>
                </tr>
              ))}
            </thead>
          </table>
          <Pagination
            dataPerPage={dataPerPage}
            totalData={data.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
