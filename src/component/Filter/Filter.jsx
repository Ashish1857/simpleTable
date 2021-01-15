import React from "react";
import './Filter.css'

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <input placeholder='search by Campaign Name' className="filter" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
