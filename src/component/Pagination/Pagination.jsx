import React from "react";

const Pagination = ({ dataPerPage, totalData, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul style={{justifyContent:"center"}}className="pagination">
        {pageNumbers &&
          pageNumbers.length > 1 &&
          pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        {pageNumbers.length === 0 && <span>No Records Found!!</span>}
      </ul>
    </nav>
  );
};

export default Pagination;
