import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  let [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    onSearch(input);
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Search for a city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "220px",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}
