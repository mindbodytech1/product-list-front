import React from "react";
import{ useState } from 'react';

const PriceSort = () => {
  const [value, setValue] = useState('Highest');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
 
  return (
    <div>
      <label>
        Sort By Price:
        <select value={value} onChange={handleChange}>
          <option value="highest">Highest to lowest</option>
          <option value="lowest">Lowest to highest</option>
        </select>
      </label>
    </div>
  );
 
 };

  export default PriceSort;



//SUDO CODE GOALS!!!
//use an algorithm that sorts numbers from highest to lowest or vice versa