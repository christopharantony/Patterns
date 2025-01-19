import React, { useState } from "react";

const SearchableList = ({ items, children, itemKeyFn }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items?.filter((item) =>
    JSON.stringify(item)?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="searchable-list">
      <input
        type="text"
        className="search"
        placeholder="Search"
        onChange={handleChange}
      />
      <ul>
        {filteredItems?.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableList;
