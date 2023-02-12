import "./style.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchField() {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSearch = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
