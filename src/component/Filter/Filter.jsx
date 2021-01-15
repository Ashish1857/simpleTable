import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <input className="filter" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Filter;
