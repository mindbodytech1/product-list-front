import React from "react";
import{ useState } from 'react';


const FilterDropdown = () => {
  const [value, setValue] = useState('Highest');
  const [cat, setCategory] = useState('tools');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
 
  const handleChng = (event) => {
    setCategory(event.target.value);
  };


  return (
    <div className='overall div'>
      <label>
        Sort By Price:
        <select value={value} onChange={handleChange}>
          <option value="highest">Highest to lowest</option>
          <option value="lowest">Lowest to highest</option>
        </select>
      </label>

      <label>
        Sort By Category:
        <select value={cat} onChange={handleChng}>
          <option value="tools">Tools</option>
          <option value="toys">Toys</option>
          <option value="food">Food</option>
        </select>
      </label>



    </div>
  );
 
 };
  



export default FilterDropdown;
