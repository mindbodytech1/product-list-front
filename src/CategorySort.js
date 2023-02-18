import React from "react";
import{ useState } from 'react';

const CategorySort = () => {
  const [value, setValue] = useState('tools');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //trigger an actual filter
  //use redux action 
  //grabs the list of products
 
  return (
    <div>
      <label>
        Sort By Category:
        <select value={value} onChange={handleChange}>
          <option value="tools">Tools</option>
          <option value="toys">Toys</option>
          <option value="food">Food</option>
        </select>
      </label>
    </div>
  );
 
 };

export default CategorySort;



//SUDO CODE GOALS!!!
//use an algorithm that sorts by category and only displays those products
//product filters