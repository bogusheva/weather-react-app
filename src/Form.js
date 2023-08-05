import React from "react";

export default function Form({ handleSubmit, handleChange, city }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder={"enter a city..."}
        onChange={handleChange}
        value={city}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
