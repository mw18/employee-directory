import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type in an employee to begin"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchBar;
