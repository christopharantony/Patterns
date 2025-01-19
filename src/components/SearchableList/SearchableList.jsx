import React, { useRef, useState } from "react";

const SearchableList = ({ items, children, itemKeyFn }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const lastChange = useRef(null);

  const handleChange = (event) => {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }
    lastChange.current = setTimeout(() => {
      setSearchTerm(event.target.value);
      lastChange.current = null;
    }, 500);
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
